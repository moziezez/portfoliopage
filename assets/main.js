const i18n = {
  en: {
    'nav-projects': 'Projects', 'nav-skills': 'Skills', 'nav-about': 'About', 'nav-contact': 'Contact',
    'hero-badge': 'Available for projects',
    'tag1': 'Web Dev', 'tag2': 'UI Designer', 'tag3': 'Future Builder',
    'hero-cta': 'View My Work →',
    'scroll': 'Scroll',
    'label-projects': 'Selected Work', 'title-projects': 'What I\'ve built',
    'status-live': 'Live', 'status-wip': 'In Progress',
    'p1-name': 'Horoscope WebApp',
    'p1-desc': 'A dynamic astrology web application running on a Node.js server, seamlessly integrated via WordPress plugin — blending cosmic data with custom UI design.',
    'p2-name': 'Restaurant Website',
    'p2-desc': 'A fully custom restaurant web presence — designed and built from scratch with focus on appetite-evoking visuals, smooth navigation and clean mobile experience.',
    'p3-name': 'Popup Yoga Site',
    'p3-desc': 'A minimalist landing page for Popup Yoga — designed to help instructors plan and promote spontaneous yoga sessions with easy scheduling and booking.',
    'p4-name': 'Yoga Teacher Training',
    'p4-desc': 'An elegant promotion page for yoga teacher training programs — currently in development, featuring soft aesthetics, course info, and booking flow.',
    'p5-name': 'CoCreator Profiles',
    'p5-desc': 'A platform for showcasing creative professionals and their portfolios — currently in development, featuring a modern design, user profiles, and project showcases.',
    'view-project': 'View Project', 'coming-soon': 'Coming Soon',
    'label-skills': 'Capabilities', 'title-skills': 'Tools & Craft',
    'cat-dev': 'Development', 'cat-design': 'Design', 'cat-proficiency': 'Proficiency',
    'label-about': 'Who I Am', 'title-about': 'The Mind behind it',
    'about-p1': '<strong>Mo Viveka</strong> — web developer and UI designer operating at the intersection of technology and human experience.',
    'about-p2': 'I don\'t just build websites — I architect <strong>digital spaces</strong> that feel intentional, alive, and future-ready. Every project is a chance to push the boundaries of what a browser can express.',
    'about-p3': 'My approach blends <strong>clean engineering</strong> with a strong visual language — layered textures, typographic precision, and interaction details that make users stop and notice.',
    'about-p4': 'Whether you need a high-performance web app, a product landing page, or a custom WordPress integration — I build it with care, curiosity, and a futurist\'s eye.',
    'label-contact': 'Get In Touch', 'title-contact': 'Let\'s build something great',
    'contact-intro': 'Have a project in mind? I\'d love to hear about it. Reach out and let\'s explore what we can create together.',
    'contact-email': 'Send an Email', 'contact-portfolio': 'Portfolio',
    'footer-craft': 'Crafted with intention'
  },
  de: {
    'nav-projects': 'Projekte', 'nav-skills': 'Skills', 'nav-about': 'Über mich', 'nav-contact': 'Kontakt',
    'hero-badge': 'Offen für neue Projekte',
    'tag1': 'Web Dev', 'tag2': 'UI Designer', 'tag3': 'Zukunftsbilder',
    'hero-cta': 'Meine Arbeiten →',
    'scroll': 'Scrollen',
    'label-projects': 'Ausgewählte Arbeiten', 'title-projects': 'Was ich gebaut habe',
    'status-live': 'Live', 'status-wip': 'In Arbeit',
    'p1-name': 'Horoskop WebApp',
    'p1-desc': 'Eine dynamische Astrologie-Webanwendung auf Basis eines Node.js-Servers, nahtlos über ein WordPress-Plugin integriert — kosmische Daten trifft auf maßgeschneidertes UI-Design.',
    'p2-name': 'Restaurant-Website',
    'p2-desc': 'Ein vollständig individuell gestalteter Webauftritt für ein Restaurant — von Grund auf entwickelt mit Fokus auf stimmungsvolle Grafiken, intuitive Navigation und ein sauberes mobiles Erlebnis.',
    'p3-name': 'Popup-Yoga-Seite',
    'p3-desc': 'Eine minimalistische Landingpage für Popup Yoga — entwickelt, um Kursleiter:innen bei der Planung und Promotion spontaner Yoga-Sessions mit einfacher Terminplanung und Buchung zu unterstützen.',
    'p4-name': 'Yoga-Lehrerausbildung',
    'p4-desc': 'Eine elegante Promotionsseite für Yoga-Teacher-Training-Programme — aktuell in Entwicklung, mit sanfter Ästhetik, Kursinformationen und Buchungsabwicklung.',
    'p5-name': 'CoCreatorProfiles',
    'p5-desc': 'Eine Plattform zur Präsentation kreativer Fachleute und ihrer Portfolios — aktuell in Entwicklung, mit modernem Design, Nutzerprofilen und Projektpräsentationen.',
    'view-project': 'Projekt ansehen', 'coming-soon': 'Demnächst',
    'label-skills': 'Fähigkeiten', 'title-skills': 'Tools & Können',
    'cat-dev': 'Entwicklung', 'cat-design': 'Design', 'cat-proficiency': 'Kenntnisstand',
    'label-about': 'Wer ich bin', 'title-about': 'Der Kopf dahinter',
    'about-p1': '<strong>Mo Viveka</strong> — Webentwickler und UI-Designer an der Schnittstelle von Technologie und menschlichem Erleben.',
    'about-p2': 'Ich baue keine Webseiten — ich entwerfe <strong>digitale Räume</strong>, die sich durchdacht, lebendig und zukunftsfähig anfühlen. Jedes Projekt ist eine Chance, die Grenzen des Browsers neu zu definieren.',
    'about-p3': 'Mein Ansatz verbindet <strong>sauberes Engineering</strong> mit einer starken Bildsprache — geschichtete Texturen, typografische Präzision und Interaktionsdetails, die Nutzer innehalten lassen.',
    'about-p4': 'Ob leistungsstarke Web-App, Produkt-Landingpage oder individuelle WordPress-Integration — ich baue es mit Sorgfalt, Neugier und dem Blick eines Futuristen.',
    'label-contact': 'Kontakt aufnehmen', 'title-contact': 'Lass uns etwas Großes bauen',
    'contact-intro': 'Hast du ein Projekt im Kopf? Ich freue mich davon zu hören. Meld dich und lass uns gemeinsam erkunden, was wir erschaffen können.',
    'contact-email': 'E-Mail senden', 'contact-portfolio': 'Portfolio',
    'footer-craft': 'Mit Absicht gestaltet'
  }
};

// State from localStorage
let lang = localStorage.getItem('mv-lang') || 'en';
let theme = localStorage.getItem('mv-theme') || 'dark';

function applyLang(l) {
  lang = l;
  localStorage.setItem('mv-lang', l);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[l][key] !== undefined) el.innerHTML = i18n[l][key];
  });
  document.getElementById('langToggle').textContent = l === 'en' ? 'DE' : 'EN';
  document.documentElement.lang = l;
}

function applyTheme(t) {
  theme = t;
  localStorage.setItem('mv-theme', t);
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeToggle').textContent = t === 'dark' ? '☀' : '☽';
}

document.getElementById('langToggle').addEventListener('click', () => applyLang(lang === 'en' ? 'de' : 'en'));
document.getElementById('themeToggle').addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));

// Init
applyLang(lang);
applyTheme(theme);

// Scroll-reveal for sections
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Scroll-reveal for skill bars
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.animationPlayState = 'running';
      });
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-bar-group').forEach(g => {
  g.querySelectorAll('.skill-bar-fill').forEach(b => b.style.animationPlayState = 'paused');
  observer.observe(g);
});