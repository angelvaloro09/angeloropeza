import type { Lang } from '@/data/profile';

export interface PathCopy {
  sectionTitlePrefix: string;
  sectionTitleAccent: string;
  lead: string;
  baseCredit: string;
  noteBadge: string;
  noteTitle: string;
  noteText: string;
}

export const pathCopy: Record<Lang, PathCopy> = {
  es: {
    sectionTitlePrefix: 'Mi',
    sectionTitleAccent: 'trayectoria',
    lead: 'Hitos académicos, desarrollo de sistemas y proyectos en comunidad.',
    baseCredit: 'Retrato e ilustraciones: equipo BASE',
    noteBadge: 'Cuaderno de ruta',
    noteTitle: 'Construcción continua',
    noteText: 'Cada etapa combina fundamentos de ingeniería, software de sistemas y desarrollo orientado a resolver problemas reales.',
  },
  en: {
    sectionTitlePrefix: 'My',
    sectionTitleAccent: 'path',
    lead: 'Academic milestones, systems development, and community projects.',
    baseCredit: 'Portrait and illustrations: BASE team',
    noteBadge: 'Field notes',
    noteTitle: 'Continuous craft',
    noteText: 'Each chapter pairs engineering fundamentals, systems programming, and software built to tackle real-world problems.',
  },
};
