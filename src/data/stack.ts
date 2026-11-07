export type GroupId = 'fullstack' | 'backend' | 'systems' | 'mobile' | 'tools';

export type TechId =
  | 'typescript'
  | 'javascript'
  | 'react'
  | 'nextjs'
  | 'astro'
  | 'tailwind'
  | 'gsap'
  | 'framer-motion'
  | 'nodejs'
  | 'nestjs'
  | 'java'
  | 'spring'
  | 'postgresql'
  | 'mysql'
  | 'sqlite'
  | 'fastapi'
  | 'supabase'
  | 'sanity'
  | 'python'
  | 'rust'
  | 'c'
  | 'cpp'
  | 'assembly'
  | 'cmake'
  | 'maven'
  | 'flutter'
  | 'dart'
  | 'expo'
  | 'git'
  | 'docker'
  | 'figma';

export interface Tech {
  id: TechId;
  name: string;
  icon: string;
  group: GroupId;
}

export const stackGroups: Record<GroupId, { es: string; en: string }> = {
  fullstack: { es: 'Full-stack & Frontend', en: 'Full-stack & Frontend' },
  backend: { es: 'Backend & Bases de datos', en: 'Backend & Databases' },
  systems: { es: 'Sistemas & Bajo nivel', en: 'Systems & Low-level' },
  mobile: { es: 'Móvil', en: 'Mobile' },
  tools: { es: 'Herramientas & Diseño', en: 'Tools & Design' },
};

export const technologies: Record<TechId, Tech> = {
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'devicon:typescript',
    group: 'fullstack',
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'devicon:javascript',
    group: 'fullstack',
  },
  react: {
    id: 'react',
    name: 'React',
    icon: 'devicon:react',
    group: 'fullstack',
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    icon: 'devicon:nextjs',
    group: 'fullstack',
  },
  astro: {
    id: 'astro',
    name: 'Astro',
    icon: 'simple-icons:astro',
    group: 'fullstack',
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: 'devicon:tailwindcss',
    group: 'fullstack',
  },
  gsap: {
    id: 'gsap',
    name: 'GSAP',
    icon: 'simple-icons:gsap',
    group: 'fullstack',
  },
  'framer-motion': {
    id: 'framer-motion',
    name: 'Framer Motion',
    icon: 'simple-icons:framer',
    group: 'fullstack',
  },
  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    icon: 'devicon:nodejs',
    group: 'backend',
  },
  nestjs: {
    id: 'nestjs',
    name: 'NestJS',
    icon: 'devicon:nestjs',
    group: 'backend',
  },
  java: {
    id: 'java',
    name: 'Java',
    icon: 'devicon:java',
    group: 'backend',
  },
  spring: {
    id: 'spring',
    name: 'Spring Boot',
    icon: 'devicon:spring',
    group: 'backend',
  },
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: 'devicon:postgresql',
    group: 'backend',
  },
  fastapi: {
    id: 'fastapi',
    name: 'FastAPI',
    icon: 'devicon:fastapi',
    group: 'backend',
  },
  mysql: {
    id: 'mysql',
    name: 'MySQL',
    icon: 'devicon:mysql',
    group: 'backend',
  },
  sqlite: {
    id: 'sqlite',
    name: 'SQLite',
    icon: 'devicon:sqlite',
    group: 'backend',
  },
  supabase: {
    id: 'supabase',
    name: 'Supabase',
    icon: 'simple-icons:supabase',
    group: 'backend',
  },
  sanity: {
    id: 'sanity',
    name: 'Sanity',
    icon: 'simple-icons:sanity',
    group: 'backend',
  },
  python: {
    id: 'python',
    name: 'Python',
    icon: 'devicon:python',
    group: 'backend',
  },
  rust: {
    id: 'rust',
    name: 'Rust',
    icon: 'devicon:rust',
    group: 'systems',
  },
  c: {
    id: 'c',
    name: 'C',
    icon: 'devicon:c',
    group: 'systems',
  },
  cpp: {
    id: 'cpp',
    name: 'C++',
    icon: 'devicon:cplusplus',
    group: 'systems',
  },
  assembly: {
    id: 'assembly',
    name: 'Assembly',
    icon: 'assembly',
    group: 'systems',
  },
  cmake: {
    id: 'cmake',
    name: 'CMake',
    icon: 'devicon:cmake',
    group: 'systems',
  },
  maven: {
    id: 'maven',
    name: 'Maven',
    icon: 'simple-icons:apachemaven',
    group: 'backend',
  },
  flutter: {
    id: 'flutter',
    name: 'Flutter',
    icon: 'devicon:flutter',
    group: 'mobile',
  },
  dart: {
    id: 'dart',
    name: 'Dart',
    icon: 'devicon:dart',
    group: 'mobile',
  },
  expo: {
    id: 'expo',
    name: 'Expo',
    icon: 'simple-icons:expo',
    group: 'mobile',
  },
  git: {
    id: 'git',
    name: 'Git',
    icon: 'devicon:git',
    group: 'tools',
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    icon: 'devicon:docker',
    group: 'tools',
  },
  figma: {
    id: 'figma',
    name: 'Figma',
    icon: 'devicon:figma',
    group: 'tools',
  },
};

export const techList: Tech[] = Object.values(technologies);

export function getTech(id: TechId): Tech | undefined {
  return technologies[id];
}

// Legacy format for existing components compatibility
export const skills = [
  {
    group: stackGroups.fullstack,
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    group: stackGroups.backend,
    items: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'Maven', 'FastAPI', 'PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Sanity', 'Python'],
  },
  {
    group: stackGroups.systems,
    items: ['Rust', 'C', 'C++', 'Assembly', 'CMake'],
  },
  {
    group: stackGroups.mobile,
    items: ['Flutter', 'Dart', 'Expo'],
  },
  {
    group: stackGroups.tools,
    items: ['Git', 'Docker', 'Figma'],
  },
];
