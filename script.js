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
