import type { Lang } from '@/data/profile';

export interface ContactCopy {
  subtitle: string;
  copyEmail: string;
  copied: string;
  backToTop: string;
  githubLabel: string;
  linkedinLabel: string;
  avatarNote: string;
}

export const contactCopy: Record<Lang, ContactCopy> = {
  es: {
    subtitle: '¿Tienes un proyecto en mente, una vacante o una idea técnica? Escríbeme directamente.',
    copyEmail: 'Copiar correo',
    copied: '¡Copiado!',
    backToTop: 'Volver arriba ↑',
    githubLabel: 'Perfil de GitHub de Angel Oropeza',
    linkedinLabel: 'Perfil de LinkedIn de Angel Oropeza',
    avatarNote: '¡Hablemos de código!',
  },
  en: {
    subtitle: 'Have a project in mind, an opening, or a technical idea? Reach out directly.',
    copyEmail: 'Copy email',
    copied: 'Copied!',
    backToTop: 'Back to top ↑',
    githubLabel: 'Angel Oropeza GitHub profile',
    linkedinLabel: 'Angel Oropeza LinkedIn profile',
    avatarNote: "Let's build together!",
  },
};
