import type { Lang } from '@/data/profile';

export interface BackendCopy {
  eyebrow: string;
  title: { before: string; accent: string };
  intro: string;
  highlightsLabel: string;
  privateCode: string;
  viewCode: string;
  seeCase: string;
  factsNote: string;
}

export const backendCopy: Record<Lang, BackendCopy> = {
  es: {
    eyebrow: 'Backend',
    title: { before: 'Lo que corre ', accent: 'detrás' },
    intro:
      'APIs, bases de datos, autenticación y sincronización. Cada cifra sale de contar el código, no de estimarla.',
    highlightsLabel: 'Datos verificados',
    privateCode: 'Código privado',
    viewCode: 'Ver código',
    seeCase: 'Ver caso',
    factsNote: 'Cifras contadas en el repositorio.',
  },
  en: {
    eyebrow: 'Backend',
    title: { before: 'What runs ', accent: 'behind' },
    intro:
      'APIs, databases, authentication and sync. Every number comes from counting the code, not from estimating.',
    highlightsLabel: 'Verified facts',
    privateCode: 'Private code',
    viewCode: 'View code',
    seeCase: 'See case',
    factsNote: 'Numbers counted in the repository.',
  },
};
