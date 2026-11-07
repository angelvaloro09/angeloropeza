import type { Lang } from '@/data/profile';

export interface StackBentoCopy {
  eyebrow: string;
  title: { before: string; accent: string };
  intro: string;
  projectCount: (n: number) => string;
}

export const stackBentoCopy: Record<Lang, StackBentoCopy> = {
  es: {
    eyebrow: 'Stack',
    title: { before: 'Herramientas con las que ', accent: 'construyo' },
    intro: 'Lo que uso, agrupado por tipo de trabajo. El número indica en cuántos proyectos de esta página aparece cada una.',
    projectCount: (n) => (n === 1 ? '1 proyecto' : `${n} proyectos`),
  },
  en: {
    eyebrow: 'Stack',
    title: { before: 'Tools I ', accent: 'build with' },
    intro: 'What I use, grouped by kind of work. The number is how many projects on this page use each one.',
    projectCount: (n) => (n === 1 ? '1 project' : `${n} projects`),
  },
};
