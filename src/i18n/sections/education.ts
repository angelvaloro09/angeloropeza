import type { Lang } from '@/data/profile';

export interface EducationCopy {
  eyebrow: string;
  title: { before: string; accent: string };
  intro: string;
  cecytLabel: string;
  upiicsaLabel: string;
  unitsLabel: string;
  semester: (n: number) => string;
  done: string;
  current: string;
  progress: (done: number, total: number) => string;
  progressAria: (current: number, total: number) => string;
  source: string;
}

export const educationCopy: Record<Lang, EducationCopy> = {
  es: {
    eyebrow: 'Formación',
    title: { before: 'Donde aprendí ', accent: 'a construir' },
    intro:
      'Dos planes de estudio del IPN. Las materias son las del mapa curricular oficial; lo que aprendí en cada una lo puedes ver en los proyectos.',
    cecytLabel: 'Nivel medio superior',
    upiicsaLabel: 'Nivel superior',
    unitsLabel: 'Unidades de aprendizaje',
    semester: (n) => `${n}.º semestre`,
    done: 'Cursado',
    current: 'En curso',
    progress: (done, total) => `${done} de ${total} periodos cursados`,
    progressAria: (current, total) => `Cursando el periodo ${current} de ${total}`,
    source: 'Fuente: mapas curriculares oficiales del IPN (CECyT 3 y UPIICSA, Plan 2021).',
  },
  en: {
    eyebrow: 'Education',
    title: { before: 'Where I learned ', accent: 'to build' },
    intro:
      'Two IPN study plans. The courses are the ones in the official curriculum map; what I learned in each one shows in the projects.',
    cecytLabel: 'High school',
    upiicsaLabel: 'University',
    unitsLabel: 'Learning units',
    semester: (n) => `Semester ${n}`,
    done: 'Completed',
    current: 'In progress',
    progress: (done, total) => `${done} of ${total} periods completed`,
    progressAria: (current, total) => `Currently in period ${current} of ${total}`,
    source: 'Source: official IPN curriculum maps (CECyT 3 and UPIICSA, 2021 plan).',
  },
};
