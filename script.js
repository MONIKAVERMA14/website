const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
if(menuToggle&&navLinks){menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));}

document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const careerPopup=document.querySelector('[data-career-booking-popup]');
if(careerPopup){
  const closeCareerPopup=careerPopup.querySelector('.career-popup-close');
  let careerPopupShown=false;
  const showCareerPopup=()=>{
    const scrollable=document.documentElement.scrollHeight-window.innerHeight;
    const progress=scrollable>0?window.scrollY/scrollable:0;
    if(!careerPopupShown&&progress>=.45){
      careerPopupShown=true;
      careerPopup.classList.add('is-visible');
      careerPopup.setAttribute('aria-hidden','false');
      window.removeEventListener('scroll',showCareerPopup);
    }
  };
  window.addEventListener('scroll',showCareerPopup,{passive:true});
  showCareerPopup();
  closeCareerPopup.addEventListener('click',()=>{
    careerPopup.classList.remove('is-visible');
    careerPopup.setAttribute('aria-hidden','true');
  });
}

const homeConsultPopup=document.querySelector('[data-home-consult-popup]');
if(homeConsultPopup){
  const closeHomePopup=homeConsultPopup.querySelector('.home-popup-close');
  let homePopupShown=false;
  const showHomePopup=()=>{
    const scrollable=document.documentElement.scrollHeight-window.innerHeight;
    const progress=scrollable>0?window.scrollY/scrollable:0;
    if(!homePopupShown&&progress>=.38){
      homePopupShown=true;
      homeConsultPopup.classList.add('is-visible');
      homeConsultPopup.setAttribute('aria-hidden','false');
      window.removeEventListener('scroll',showHomePopup);
    }
  };
  window.addEventListener('scroll',showHomePopup,{passive:true});
  showHomePopup();
  closeHomePopup.addEventListener('click',()=>{
    homeConsultPopup.classList.remove('is-visible');
    homeConsultPopup.setAttribute('aria-hidden','true');
  });
}


/* Privacy-conscious Google Analytics 4 setup */
const GA_MEASUREMENT_ID='G-LJKEQHSVGJ';
const ANALYTICS_CONSENT_KEY='monika_analytics_consent';

function loadGoogleAnalytics(){
  if(window.__monikaGaLoaded)return;
  window.__monikaGaLoaded=true;

  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());
  window.gtag('config',GA_MEASUREMENT_ID,{
    anonymize_ip:true,
    send_page_view:true
  });

  const gaScript=document.createElement('script');
  gaScript.async=true;
  gaScript.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(GA_MEASUREMENT_ID);
  document.head.appendChild(gaScript);
}

function closeAnalyticsConsent(){
  const banner=document.querySelector('.analytics-consent');
  if(banner)banner.remove();
}

function saveAnalyticsConsent(choice){
  try{localStorage.setItem(ANALYTICS_CONSENT_KEY,choice);}catch(e){}
  closeAnalyticsConsent();
  if(choice==='accepted')loadGoogleAnalytics();
}

function showAnalyticsConsent(){
  if(document.querySelector('.analytics-consent'))return;

  const banner=document.createElement('section');
  banner.className='analytics-consent';
  banner.setAttribute('role','dialog');
  banner.setAttribute('aria-label','Analytics cookie preferences');
  banner.innerHTML=`
    <div class="analytics-consent-copy">
      <strong>Analytics preferences</strong>
      <p>I use Google Analytics to understand how this website is used and improve the content. Analytics only starts if you accept.</p>
    </div>
    <div class="analytics-consent-actions">
      <button type="button" class="analytics-reject">Reject analytics</button>
      <button type="button" class="analytics-accept">Accept analytics</button>
    </div>
  `;
  document.body.appendChild(banner);

  banner.querySelector('.analytics-reject').addEventListener('click',()=>saveAnalyticsConsent('rejected'));
  banner.querySelector('.analytics-accept').addEventListener('click',()=>saveAnalyticsConsent('accepted'));
}

function getAnalyticsConsent(){
  try{return localStorage.getItem(ANALYTICS_CONSENT_KEY);}catch(e){return null;}
}

const savedAnalyticsConsent=getAnalyticsConsent();
if(savedAnalyticsConsent==='accepted')loadGoogleAnalytics();
else if(savedAnalyticsConsent!=='rejected')showAnalyticsConsent();

document.querySelectorAll('.footer-links').forEach(footerLinks=>{
  if(footerLinks.querySelector('.cookie-settings-link'))return;
  const button=document.createElement('button');
  button.type='button';
  button.className='cookie-settings-link';
  button.textContent='Cookie settings';
  button.addEventListener('click',showAnalyticsConsent);
  footerLinks.appendChild(button);
});
