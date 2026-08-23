# GrowthSync Studio Website

## Overview

GrowthSync Studio is a freelance marketing analytics and automation website for small and mid-sized businesses.

The website is built as a simple static site so it is easy to edit later and easy to publish through:

```text
Codex
  -> GitHub Repository
  -> Vercel Hosting
  -> Custom Domain
```

## Brand

**Website name:** GrowthSync Studio  
**Tagline:** Data. Automation. Growth.  
**Contact email:** growthsync3@gmail.com  
**Positioning:** Marketing analytics, performance marketing, data automation, and growth consulting.

## Main Message

Turn your marketing data into smarter business decisions.

We help small and mid-sized businesses automate reporting, optimize marketing performance, and build scalable analytics systems.

## Website Sections

### Home

Hero section with:

- Brand name
- Main headline
- Short service promise
- Experience highlights
- Consultation call-to-action
- Analytics consulting illustration

### Services

Current service categories:

- Marketing Analytics
- Performance Marketing
- Data Engineering
- Automation Solutions
- Training and Mentoring

### About

Highlights 12+ years of global marketing, analytics, and automation experience.

Proof points:

- 12+ industries
- Global clients
- 100+ projects delivered
- High client retention

### How We Work

Four-step process:

1. Discover
2. Design and Build
3. Implement
4. Optimize and Scale

### Training

Consultation options for:

- Students
- Experienced professionals

### Resources

Placeholder resource ideas:

- How to choose the right marketing KPIs
- GA4 and Looker Studio audit checklist
- Weekly growth dashboard structure

### Contact

The contact form opens an email to:

```text
growthsync3@gmail.com
```

## Project Files

```text
index.html
styles.css
script.js
README.md
WEBSITE.md
assets/
  favicon.svg
  hero-growth-consulting.svg
  hero-growth-consulting.png
```

## How To Edit Later

### Change Text

Edit the page copy in:

```text
index.html
```

### Change Colors

Edit the color variables near the top of:

```text
styles.css
```

Main color variables:

```css
--navy
--blue
--violet
--teal
--coral
```

### Change Email

Find this line in `index.html`:

```html
<form class="contact-form" action="mailto:growthsync3@gmail.com" method="post" enctype="text/plain">
```

Replace `growthsync3@gmail.com` with the new email address.

### Change Website Name

Search for:

```text
GrowthSync Studio
```

Replace it with the new website name.

## GitHub Publishing

The local repository remote is set to:

```text
https://github.com/MONIKAVERMA14/website.git
```

To publish the current code after GitHub is connected:

```bash
git push -u origin main
```

## Vercel Publishing

After the code is on GitHub:

1. Open Vercel.
2. Import the GitHub repository `MONIKAVERMA14/website`.
3. Choose the project root as the output.
4. Leave the build command empty.
5. Deploy.

This is a static website, so no framework or build step is required.

## Current Status

- Website files created.
- Local Git repository connected to GitHub remote.
- Local commits created.
- GitHub push still requires GitHub account authorization in Codex or local Git credentials.
