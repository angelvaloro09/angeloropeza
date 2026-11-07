import type { Lang } from '@/data/profile';

export const ui = {
  es: {
    nav: { work: 'Proyectos', backend: 'Backend', stack: 'Stack', path: 'Trayectoria', contact: 'Contacto' },
    hero: { cta: 'Ver proyectos', scroll: 'Desplázate' },
    work: 'Proyectos destacados',
    stack: 'Stack y expertise',
    path: 'Trayectoria',
    contact: 'Hablemos',
    freelance: 'Freelance',
    metrics: { projects: 'Proyectos', langs: 'Tecnologías', years: 'Años construyendo' },
    code: 'Ver código',
    private: 'Código privado',
    footer: 'Hecho con Astro',
  },
  en: {
    nav: { work: 'Work', backend: 'Backend', stack: 'Stack', path: 'Path', contact: 'Contact' },
    hero: { cta: 'View work', scroll: 'Scroll' },
    work: 'Featured work',
    stack: 'Stack & expertise',
    path: 'Path',
    contact: "Let's talk",
    freelance: 'Freelance',
    metrics: { projects: 'Projects', langs: 'Technologies', years: 'Years building' },
    code: 'View code',
    private: 'Private code',
    footer: 'Built with Astro',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
export const other = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
