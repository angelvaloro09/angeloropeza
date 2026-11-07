export type Lang = 'es' | 'en';
type L = Record<Lang, string>;

export const profile = {
  name: 'Angel Oropeza',
  role: { es: 'Ingeniero de software en formación', en: 'Software engineer in training' } as L,
  tagline: {
    es: 'Full-stack, backend empresarial y sistemas. Construyo productos web, móviles y de escritorio.',
    en: 'Full-stack, enterprise backend and systems. I build web, mobile and desktop products.',
  } as L,
  email: 'angel.valoro09@gmail.com',
  github: 'https://github.com/angelvaloro09',
  linkedin: 'https://www.linkedin.com/in/angel-oropeza-34338834b/',
  location: 'CDMX, México',
};

export const timeline: { year: string; title: L; place: string }[] = [
  { year: '2022–2025', title: { es: 'Técnico en Computación', en: 'Computer Technician' }, place: 'CECyT 3 “Estanislao Ramírez Ruiz” · IPN' },
  { year: '2025–', title: { es: 'Ingeniería en Informática · 3.er semestre', en: 'Informatics Engineering · 3rd semester' }, place: 'UPIICSA · IPN' },
  { year: '2025–', title: { es: 'Desarrollo freelance', en: 'Freelance development' }, place: 'ISCA · Trailers · Segenar' },
  { year: '2026–', title: { es: 'Club de Informática', en: 'Computer Science Club' }, place: 'UPIICSA' },
  { year: '2026', title: { es: 'Desarrollo web de BASE Studio', en: 'BASE Studio web development' }, place: 'Equipo BASE' },
];

// Re-export projects and stack data for backward compatibility and centralized access
export { projects, featuredProjects, moreProjects, type Project, type ProjectStatus } from './projects';
export {
  technologies,
  techList,
  stackGroups,
  skills,
  getTech,
  type Tech,
  type TechId,
  type GroupId,
} from './stack';
