import type { Lang } from '@/data/profile';
import type { ProjectStatus } from '@/data/projects';

export interface WorkCopy {
  eyebrow: string;
  title: { before: string; accent: string };
  intro: string;
  caseOf: (n: string, total: string) => string;
  role: string;
  stackLabel: string;
  status: Record<ProjectStatus, string>;
  freelance: string;
  viewCode: string;
  viewLive: string;
  privateCode: string;
  baseCredit: string;
  index: { title: { before: string; accent: string }; label: string; hint: string };
  alt: {
    screenshot: (title: string) => string;
    comp: (title: string, note: string) => string;
    shot: (title: string, n: number) => string;
    artBrick: string;
    artCrowd: string;
    appIcon: (name: string) => string;
  };
}

export const workCopy: Record<Lang, WorkCopy> = {
  es: {
    eyebrow: 'Trabajo seleccionado',
    title: { before: 'Cosas que he ', accent: 'construido' },
    intro: 'Los proyectos principales explicados a fondo y, después, el resto en un índice. Cada imagen dice qué es.',
    caseOf: (n, total) => `Caso ${n} / ${total}`,
    role: 'Rol',
    stackLabel: 'Tecnologías',
    status: { shipped: 'Publicado', building: 'En construcción', concept: 'Concepto' },
    freelance: 'Freelance',
    viewCode: 'Ver código',
    viewLive: 'Ver sitio',
    privateCode: 'Código privado',
    baseCredit: 'Ilustraciones: equipo BASE',
    index: {
      title: { before: 'Todo lo ', accent: 'demás' },
      label: 'Índice de proyectos',
      hint: 'Pasa el cursor por una fila para ver el proyecto',
    },
    alt: {
      screenshot: (t) => `Captura de ${t}`,
      comp: (t, note) => `${t}: ${note}`,
      shot: (t, n) => `${t}, captura adicional ${n}`,
      artBrick: 'Ilustración de BASE: una mano coloca un ladrillo rojo sobre otros',
      artCrowd: 'Ilustración de BASE: contorno de un grupo de personas',
      appIcon: (name) => `Ícono de ${name}`,
    },
  },
  en: {
    eyebrow: 'Selected work',
    title: { before: 'Things I have ', accent: 'built' },
    intro: 'The main projects in depth, then the rest in an index. Every image says what it is.',
    caseOf: (n, total) => `Case ${n} / ${total}`,
    role: 'Role',
    stackLabel: 'Technologies',
    status: { shipped: 'Shipped', building: 'In progress', concept: 'Concept' },
    freelance: 'Freelance',
    viewCode: 'View code',
    viewLive: 'View site',
    privateCode: 'Private code',
    baseCredit: 'Illustrations: BASE team',
    index: {
      title: { before: 'Everything ', accent: 'else' },
      label: 'Project index',
      hint: 'Hover a row to preview the project',
    },
    alt: {
      screenshot: (t) => `Screenshot of ${t}`,
      comp: (t, note) => `${t}: ${note}`,
      shot: (t, n) => `${t}, extra screenshot ${n}`,
      artBrick: 'BASE illustration: a hand places a red brick on top of others',
      artCrowd: 'BASE illustration: outline of a group of people',
      appIcon: (name) => `${name} app icon`,
    },
  },
};
