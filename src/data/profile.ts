export type Lang = 'es' | 'en';
type L = Record<Lang, string>;

export const profile = {
  name: 'Angel Valoro', // placeholder
  role: { es: 'Ingeniero de software en formación', en: 'Software engineer in training' } as L,
  tagline: {
    es: 'Full-stack, backend empresarial y sistemas. Construyo productos web, móviles y de escritorio.',
    en: 'Full-stack, enterprise backend and systems. I build web, mobile and desktop products.',
  } as L,
  email: 'hola@example.com', // placeholder
  github: 'https://github.com/angelvaloro09',
  linkedin: 'https://linkedin.com/in/placeholder', // placeholder
  location: 'CDMX, México',
};

export interface Project {
  slug: string;
  title: string;
  year: string;
  kind: L;
  summary: L;
  stack: string[];
  freelance?: boolean;
  featured?: boolean;
  repo?: string; // solo si es público
}

export const projects: Project[] = [
  { slug: 'isca-epm', title: 'ISCA EPM', year: '2025', freelance: true, featured: true,
    kind: { es: 'Backend empresarial · Freelance', en: 'Enterprise backend · Freelance' },
    summary: { es: 'Plataforma de gestión (EPM) para ISCA Constructores.', en: 'Management platform (EPM) for ISCA Constructores.' },
    stack: ['Java', 'Spring', 'Maven'] },
  { slug: 'upiicscode', title: 'UPIICSCode', year: '2026', featured: true,
    kind: { es: 'Plataforma educativa', en: 'Educational platform' },
    summary: { es: 'Teoría por materia, aulas virtuales y juez automático de código para la comunidad UPIICSA.', en: 'Course theory, virtual classrooms and an automatic code judge for the UPIICSA community.' },
    stack: ['TypeScript', 'Full-stack'], repo: 'https://github.com/angelvaloro09/upiicscode' },
  { slug: 'upiicsnotes', title: 'UPIICSNotes', year: '2026', featured: true,
    kind: { es: 'Herramienta de desarrollo', en: 'Developer tool' },
    summary: { es: 'Cuaderno de notas multiplataforma para estudiantes de computación, con datos en Markdown + JSON.', en: 'Cross-platform notebook for CS students, with data in Markdown + JSON.' },
    stack: ['TypeScript', 'Node', 'Desktop'] },
  { slug: 'trailers', title: 'Trailers', year: '2026', freelance: true, featured: true,
    kind: { es: 'Web + móvil · Freelance', en: 'Web + mobile · Freelance' },
    summary: { es: 'Aplicación web y app móvil de seguimiento.', en: 'Web app and mobile tracking app.' },
    stack: ['Next.js', 'Expo', 'TypeScript'] },
  { slug: 'segenar', title: 'Segenar', year: '2026', freelance: true, featured: true,
    kind: { es: 'Landing page · Freelance', en: 'Landing page · Freelance' },
    summary: { es: 'Landing page para una constructora peruana, diseñada en Figma e implementada en Astro.', en: 'Landing page for a Peruvian construction company, designed in Figma and built with Astro.' },
    stack: ['Astro', 'TypeScript', 'Figma'] },
  { slug: 'etchio-gui', title: 'Etchio GUI', year: '2026', featured: true,
    kind: { es: 'Librería de sistemas', en: 'Systems library' },
    summary: { es: 'Librería GUI multihilo en C con capa moderna en C++, con pruebas.', en: 'Multithreaded GUI library in C with a modern C++ layer, tested.' },
    stack: ['C', 'C++', 'CMake'] },
  { slug: 'mobile', title: 'Mobile', year: '2025–26', featured: true,
    kind: { es: 'Apps móviles', en: 'Mobile apps' },
    summary: { es: 'PoliNexu, Bienescript (con backend NestJS) y Trailers Tracker.', en: 'PoliNexu, Bienescript (with NestJS backend) and Trailers Tracker.' },
    stack: ['Flutter', 'Dart', 'Expo', 'NestJS'], repo: 'https://github.com/angelvaloro09/PoliNexu' },
  { slug: 'ciupiicsa', title: 'CI UPIICSA', year: '2026', featured: true,
    kind: { es: 'Sitio web comunitario', en: 'Community website' },
    summary: { es: 'Sitio del Club de Informática de la UPIICSA.', en: 'Website of the UPIICSA Computer Science Club.' },
    stack: ['Astro', 'JavaScript', 'Python'] },
];

export const skills: { group: L; items: string[] }[] = [
  { group: { es: 'Full-stack', en: 'Full-stack' }, items: ['TypeScript', 'React', 'Next.js', 'Astro', 'Node', 'NestJS'] },
  { group: { es: 'Backend', en: 'Backend' }, items: ['Java', 'Spring Boot', 'Maven', 'SQL'] },
  { group: { es: 'Sistemas', en: 'Systems' }, items: ['C', 'C++', 'CMake', 'Rust', 'Assembly'] },
  { group: { es: 'Móvil', en: 'Mobile' }, items: ['Flutter', 'Dart', 'Expo'] },
  { group: { es: 'Herramientas', en: 'Tooling' }, items: ['Git', 'Docker', 'Python', 'Figma'] },
];

export const timeline: { year: string; title: L; place: string }[] = [
  { year: '2025–', title: { es: 'Ingeniería Informática', en: 'Computer Engineering' }, place: 'UPIICSA · IPN' },
  { year: '2025–', title: { es: 'Desarrollo freelance', en: 'Freelance development' }, place: 'ISCA · Trailers · Segenar' },
  { year: '2026–', title: { es: 'Club de Informática', en: 'Computer Science Club' }, place: 'UPIICSA' },
];
