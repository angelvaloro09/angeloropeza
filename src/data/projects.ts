import type { TechId } from './stack';
import { projectImages, type ProjectImages } from './images';

type L = { es: string; en: string };

/** 'shipped' = no status chip is shown (used when the state is not verified). */
export type ProjectStatus = 'shipped' | 'building' | 'concept';

export interface Project {
  slug: string;
  title: string;
  year: string;
  kind: L;
  summary: L;
  /** What I did, when it is worth saying (client / team work). */
  role?: L;
  stack: TechId[];
  status: ProjectStatus;
  /** Freelance for a client. */
  client?: boolean;
  /** Repo is private (or there is none). Public repos set links.repo. */
  links: { repo?: string; live?: string };
  featured: boolean;
  /** Gets a deep-dive block with several screenshots. */
  case?: boolean;
  /** Real captures. `cover`/`shots` are undefined for projects with no UI to show. */
  images: ProjectImages;
  /** Backend work: shows a Backend tag, and a card in the Backend section when highlights exist. */
  backend?: boolean;
  /** Verified facts (counted in the code) about the backend. */
  highlights?: L[];
  /** Honest note about what the images are (design comps, app icons…). */
  imageNote?: L;
}

const p = (slug: string) => projectImages(slug);

export const projects: Project[] = [
  {
    slug: 'base',
    title: 'BASE Studio',
    year: '2026',
    kind: { es: 'Sitio web · Estudio de marca', en: 'Website · Brand studio' },
    summary: {
      es: 'Sitio de BASE Studio, estudio de sistemas de marca. Implementación en Next.js 15 del diseño de Figma, junto al equipo de BASE: autores de las ilustraciones y de mi retrato.',
      en: 'Website for BASE Studio, a brand-systems studio. Next.js 15 implementation of the Figma design, built alongside the BASE team, who also made the illustrations and my portrait.',
    },
    role: { es: 'Desarrollo web', en: 'Web development' },
    stack: ['nextjs', 'typescript', 'tailwind', 'framer-motion'],
    status: 'shipped',
    links: {},
    featured: true,
    case: true,
    images: p('base'),
  },
  {
    slug: 'trailers',
    title: 'Trailers',
    year: '2026',
    kind: { es: 'Web + móvil · Freelance', en: 'Web + mobile · Freelance' },
    summary: {
      es: 'Panel de operaciones para flotillas (rastreo en tiempo real, choferes, cotizador de rutas) y app móvil de seguimiento GPS.',
      en: 'Fleet operations panel (live tracking, drivers, route quoting) and a mobile GPS tracking app.',
    },
    role: { es: 'Diseño y desarrollo', en: 'Design & development' },
    stack: ['nextjs', 'typescript', 'supabase', 'expo'],
    status: 'shipped',
    client: true,
    links: {},
    featured: true,
    case: true,
    backend: true,
    highlights: [
      { es: 'Supabase (Postgres + Auth): 14 tablas y 21 migraciones', en: 'Supabase (Postgres + Auth): 14 tables and 21 migrations' },
      { es: '27 políticas RLS por rol (admin y despachador)', en: '27 row-level security policies by role (admin and dispatcher)' },
      { es: 'Cotizaciones con PDF, rastreo GPS y límite de uso de APIs de mapas', en: 'PDF quotes, GPS tracking and a usage limiter for map APIs' },
    ],
    images: p('trailers'),
    imageNote: { es: 'Maquetas de diseño con datos de demostración', en: 'Design comps with demo data' },
  },
  {
    slug: 'segenar',
    title: 'Segenar',
    year: '2026',
    kind: { es: 'Landing page · Freelance', en: 'Landing page · Freelance' },
    summary: {
      es: 'Landing para una constructora peruana de acabados e interiores comerciales, diseñada en Figma e implementada en Astro.',
      en: 'Landing page for a Peruvian commercial-interiors contractor, designed in Figma and built with Astro.',
    },
    role: { es: 'Diseño y desarrollo', en: 'Design & development' },
    stack: ['astro', 'typescript', 'figma'],
    status: 'shipped',
    client: true,
    links: {},
    featured: true,
    case: true,
    images: p('segenar'),
  },
  {
    slug: 'isca-epm',
    title: 'ISCA EPM',
    year: '2025',
    kind: { es: 'Backend empresarial · Freelance', en: 'Enterprise backend · Freelance' },
    summary: {
      es: 'Plataforma de gestión (EPM) que administra los proyectos y las finanzas de ISCA Constructores.',
      en: 'Management platform (EPM) that manages the projects and finances of ISCA Constructores.',
    },
    role: { es: 'Backend', en: 'Backend' },
    stack: ['java', 'spring', 'maven'],
    status: 'shipped',
    client: true,
    links: {},
    featured: true,
    case: true,
    backend: true,
    images: p('isca-epm'),
  },
  {
    slug: 'etchio-gui',
    title: 'Etchio GUI',
    year: '2026',
    kind: { es: 'Librería de sistemas', en: 'Systems library' },
    summary: {
      es: 'Librería GUI multihilo en C con capa moderna en C++, render Vulkan y pruebas. Incluye un editor de nodos y un diseñador de interfaces declarativas en XML.',
      en: 'Multithreaded GUI library in C with a modern C++ layer, Vulkan rendering and tests. Ships a node editor and an XML declarative UI designer.',
    },
    stack: ['c', 'cpp', 'cmake'],
    status: 'building',
    links: {},
    featured: true,
    case: true,
    images: p('etchio-gui'),
  },
  {
    slug: 'upiicsnotes',
    title: 'UPIICSNotes',
    year: '2026',
    kind: { es: 'Biblioteca de libros abiertos', en: 'Open textbook library' },
    summary: {
      es: 'Mi biblioteca abierta de libros de Ciencias de la Computación: catálogo de cursos, lector de lecciones con diagramas y navegación por tema. Junto a un cuaderno de notas con datos en Markdown + JSON.',
      en: 'My open library of Computer Science books: course catalog, lesson reader with diagrams and per-topic navigation. Alongside a notes notebook with data in Markdown + JSON.',
    },
    stack: ['typescript', 'nodejs', 'astro'],
    status: 'shipped',
    links: {},
    featured: true,
    case: true,
    images: p('upiicsnotes'),
  },
  {
    slug: 'upiicscode',
    title: 'UPIICSCode',
    year: '2026',
    kind: { es: 'Plataforma educativa', en: 'Educational platform' },
    summary: {
      es: 'Teoría por materia en MDX con lector de lecciones para la comunidad UPIICSA. Aulas virtuales y juez automático de código están en el roadmap.',
      en: 'Per-subject theory in MDX with a lesson reader for the UPIICSA community. Virtual classrooms and an automatic code judge are on the roadmap.',
    },
    stack: ['nextjs', 'react', 'typescript', 'tailwind'],
    status: 'building',
    links: { repo: 'https://github.com/angelvaloro09/upiicscode' },
    featured: true,
    case: true,
    images: p('upiicscode'),
  },
  {
    slug: 'mobile',
    title: 'Mobile',
    year: '2025–26',
    kind: { es: 'Apps móviles', en: 'Mobile apps' },
    summary: {
      es: 'PoliNexu (agenda y conector SAES para estudiantes del IPN), Bienescript (Flutter con backend NestJS) y Trailers Tracker (rastreador GPS en Expo).',
      en: 'PoliNexu (schedule and SAES connector for IPN students), Bienescript (Flutter with a NestJS backend) and Trailers Tracker (Expo GPS tracker).',
    },
    stack: ['flutter', 'dart', 'expo', 'nestjs'],
    status: 'shipped',
    links: { repo: 'https://github.com/angelvaloro09/PoliNexu' },
    featured: true,
    images: p('mobile'),
    imageNote: { es: 'Iconos de las apps', en: 'App icons' },
  },
  {
    slug: 'ciupiicsa',
    title: 'CI UPIICSA',
    year: '2026',
    kind: { es: 'Sitio web comunitario', en: 'Community website' },
    summary: {
      es: 'Sitio del Club de Informática de la UPIICSA, con estética retro pixel-art, cursos y el lanzador de Galactic UPIICSA.',
      en: 'Website of the UPIICSA Computer Science Club, with a retro pixel-art look, courses and the Galactic UPIICSA launcher.',
    },
    stack: ['astro', 'javascript', 'python'],
    status: 'shipped',
    links: {},
    featured: true,
    images: p('ciupiicsa'),
  },
  {
    slug: 'java-cafe',
    title: 'Java Café',
    year: '2026',
    kind: { es: 'Videojuego educativo', en: 'Educational game' },
    summary: {
      es: 'RPG 2D cenital estilo GBA que enseña Java a principiantes: heredas una cafetería y aprendes con lecciones y retos de código. Java 17 + LibGDX, contenido en JSON.',
      en: 'GBA-style top-down 2D RPG that teaches Java to beginners: inherit a café and learn through lessons and code challenges. Java 17 + LibGDX, JSON-driven content.',
    },
    stack: ['java'],
    status: 'building',
    links: {},
    featured: false,
    images: p('java-cafe'),
    imageNote: { es: 'Arte conceptual y sprites', en: 'Concept art and sprites' },
  },
  {
    slug: 'polimusic',
    title: 'PoliMusic',
    year: '2026',
    kind: { es: 'Diseño de producto', en: 'Product design' },
    summary: {
      es: 'Maquetas propias de un reproductor de música offline con salida bit-perfect (FLAC), biblioteca por álbumes y artistas, y búsqueda.',
      en: 'Own design comps for an offline music player with bit-perfect FLAC output, album/artist library and search.',
    },
    stack: [],
    status: 'concept',
    links: {},
    featured: false,
    images: p('polimusic'),
    imageNote: { es: 'Maquetas de diseño', en: 'Design comps' },
  },
  {
    slug: 'passwords',
    title: 'Password Manager',
    year: '2026',
    kind: { es: 'Seguridad · Sistemas', en: 'Security · Systems' },
    summary: {
      es: 'Gestor de contraseñas personal. Su backend es un servidor de sincronización zero-knowledge en Rust (axum, OPAQUE, SQLite) que solo guarda blobs cifrados; el núcleo criptográfico y el cliente de escritorio JavaFX se conectan por un puente JNI.',
      en: 'Personal password manager. Its backend is a zero-knowledge sync server in Rust (axum, OPAQUE, SQLite) that only stores encrypted blobs; the crypto core and the JavaFX desktop client connect through a JNI bridge.',
    },
    stack: ['rust', 'sqlite', 'java'],
    status: 'building',
    links: {},
    featured: false,
    backend: true,
    highlights: [
      { es: '7 rutas: registro y login OPAQUE, push/pull de bóveda con cursor de versión y tombstones', en: '7 routes: OPAQUE register/login, vault push/pull with a version cursor and tombstones' },
      { es: '19 pruebas de integración contra el cliente real; límite de intentos y sesiones con TTL', en: '19 integration tests against the real client; attempt rate limit and TTL sessions' },
      { es: 'Prototipo en desarrollo: el protocolo aún no está auditado', en: 'Prototype in progress: the protocol has not been audited yet' },
    ],
    images: p('passwords'),
  },
  {
    slug: 'polinexu-api',
    title: 'PoliNexu API',
    year: '2026',
    kind: { es: 'Backend · API', en: 'Backend · API' },
    summary: {
      es: 'API en FastAPI que da a la app Flutter de PoliNexu acceso a horario, calificaciones y kardex desde un portal estudiantil sin API oficial, con sesión persistente y credenciales cifradas.',
      en: 'FastAPI service that gives the PoliNexu Flutter app access to schedule, grades and transcript from a student portal with no official API, with persistent sessions and encrypted credentials.',
    },
    stack: ['python', 'fastapi'],
    status: 'shipped',
    backend: true,
    highlights: [
      { es: '17 endpoints: autenticación, horario, calificaciones, kardex y calendario', en: '17 endpoints: auth, schedule, grades, transcript and calendar' },
      { es: '6 parsers de HTML y un servicio que mantiene viva la sesión', en: '6 HTML parsers and a service that keeps the session alive' },
      { es: 'Credenciales cifradas con Fernet; el CAPTCHA se conserva en cada reautenticación', en: 'Credentials encrypted with Fernet; the CAPTCHA is kept on every re-authentication' },
    ],
    links: { repo: 'https://github.com/angelvaloro09/PoliNexu' },
    featured: false,
    images: p('polinexu-api'),
  },
  {
    slug: 'nest-gemini-api',
    title: 'Gemini API',
    year: '2025',
    kind: { es: 'Backend · API', en: 'Backend · API' },
    summary: {
      es: 'API en NestJS sobre Google Gemini con respuestas en streaming, subida de archivos e historial por chat. Es el backend de la app Flutter Bienescript.',
      en: 'NestJS API on top of Google Gemini with streaming responses, file uploads and per-chat history. It is the backend of the Bienescript Flutter app.',
    },
    stack: ['nestjs', 'typescript'],
    status: 'shipped',
    backend: true,
    highlights: [
      { es: '4 endpoints: prompt básico, streaming, chat con streaming e historial', en: '4 endpoints: basic prompt, streaming, streaming chat and history' },
      { es: 'Historial en memoria (sin base de datos) y validación con class-validator', en: 'In-memory history (no database) and class-validator validation' },
    ],
    links: {},
    featured: false,
    images: p('nest-gemini-api'),
  },
  {
    slug: 'tienda-db',
    title: 'Tienda DB',
    year: '2026',
    kind: { es: 'Bases de datos · Académico', en: 'Databases · Coursework' },
    summary: {
      es: 'Diseño y migración de la base de datos de una tienda: modelo entidad-relación, modelo relacional y migración de MariaDB a MySQL 8.4 con scripts de verificación.',
      en: 'Design and migration of a shop database: entity-relationship model, relational model and a MariaDB to MySQL 8.4 migration with verification scripts.',
    },
    stack: ['mysql'],
    status: 'shipped',
    backend: true,
    highlights: [
      { es: '5 tablas: productos, proveedores, compras, ventas y categorías', en: '5 tables: products, suppliers, purchases, sales and categories' },
      { es: 'Migración maestra, datos de prueba y consultas con JOIN y UNION', en: 'Master migration, seed data and JOIN/UNION queries' },
    ],
    links: {},
    featured: false,
    images: p('tienda-db'),
  },
  {
    slug: 'sun',
    title: 'Sun',
    year: '2026',
    kind: { es: 'Lenguaje de programación', en: 'Programming language' },
    summary: {
      es: 'Lenguaje en diseño (nombre provisional) para aprender lexer, parser, tipos e IR: tipado estático, sin null, errores como valores y pattern matching exhaustivo.',
      en: 'Language in design (working name) to learn lexers, parsers, types and IR: static typing, no null, errors as values and exhaustive pattern matching.',
    },
    stack: ['rust'],
    status: 'concept',
    links: {},
    featured: false,
    images: p('sun'),
  },
];

export const featuredProjects = projects.filter((x) => x.featured);
export const moreProjects = projects.filter((x) => !x.featured);
