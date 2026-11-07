import type { Lang } from '@/data/profile';

export interface HeroCopy {
  /** Short neutral greeting handwritten next to the avatar. */
  greeting: string;
  ctaWork: string;
  ctaContact: string;
  scroll: string;
  /** Exact substring of `profile.tagline[lang]` that gets the marker highlight. */
  marker: string;
  /** Accessible label of the tech marquee region. */
  techLabel: string;
  proof: {
    heading: string;
    projects: string;
    freelance: string;
    tech: string;
    repos: string;
  };
}

export const heroCopy: Record<Lang, HeroCopy> = {
  es: {
    greeting: 'hola',
    ctaWork: 'Ver proyectos',
    ctaContact: 'Hablemos',
    scroll: 'Desplázate',
    marker: 'web, móviles y de escritorio',
    techLabel: 'Tecnologías con las que trabajo',
    proof: {
      heading: 'En números',
      projects: 'proyectos',
      freelance: 'proyectos freelance',
      tech: 'tecnologías',
      repos: 'repos públicos',
    },
  },
  en: {
    greeting: 'hi',
    ctaWork: 'View work',
    ctaContact: "Let's talk",
    scroll: 'Scroll',
    marker: 'web, mobile and desktop products',
    techLabel: 'Technologies I work with',
    proof: {
      heading: 'By the numbers',
      projects: 'projects',
      freelance: 'freelance projects',
      tech: 'technologies',
      repos: 'public repos',
    },
  },
};
