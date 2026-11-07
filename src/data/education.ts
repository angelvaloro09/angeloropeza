/**
 * Formal education. Every unit name below is copied from the official IPN curriculum maps:
 *  - CECyT 3 "Estanislao Ramírez Ruiz": Técnico en Computación (escolarizada), Plan 2021,
 *    approved 21-May-2021, effective August 2021 (ipn.mx mapa-curricular tec-computacion.pdf).
 *  - UPIICSA: Ingeniería en Informática, Plan 2021, 8 periods
 *    (upiicsa.ipn.mx mallas-curriculares ing-informatica-21-mapa.pdf).
 * English names are translations; the Spanish names are the official ones.
 */
type L = { es: string; en: string };
const u = (es: string, en: string): L => ({ es, en });

export interface UnitGroup {
  label: L;
  units: L[];
}

export const cecyt = {
  school: u('CECyT 3 “Estanislao Ramírez Ruiz” · IPN', 'CECyT 3 “Estanislao Ramírez Ruiz” · IPN'),
  program: u('Técnico en Computación', 'Computer Technician'),
  plan: u('2022–2025 · Plan 2021 · 6 niveles', '2022–2025 · 2021 plan · 6 levels'),
  /** Paraphrase of the official program objective. */
  objective: u(
    'Formación de técnicos que programan, dan soporte y mantenimiento a sistemas computacionales y desarrollan software.',
    'Training of technicians who program, support and maintain computer systems, and develop software.',
  ),
  groups: [
    {
      label: u('Programación y software', 'Programming & software'),
      units: [
        u('Algoritmia y Programación', 'Algorithms & Programming'),
        u('Programación Modular', 'Modular Programming'),
        u('Desarrollo de Aplicaciones con Entornos Gráficos', 'GUI Application Development'),
        u('Programación de Aplicaciones para Dispositivos Móviles', 'Mobile App Programming'),
        u('Portales Web', 'Web Portals'),
      ],
    },
    {
      label: u('Datos', 'Data'),
      units: [u('Bases de Datos', 'Databases'), u('Introducción a la Ciencia de Datos', 'Intro to Data Science')],
    },
    {
      label: u('Redes, sistemas y seguridad', 'Networks, systems & security'),
      units: [
        u('Redes de Comunicaciones', 'Communication Networks'),
        u('Sistemas Operativos', 'Operating Systems'),
        u('Seguridad Informática', 'Information Security'),
      ],
    },
    {
      label: u('Hardware y soporte', 'Hardware & support'),
      units: [
        u('Ensamblado y Soporte de Componentes Electrónicos', 'Assembly & Support of Electronic Components'),
        u('Computación Básica I y II', 'Basic Computing I & II'),
      ],
    },
    {
      label: u('Optativas', 'Electives'),
      units: [u('Redes', 'Networking'), u('Multimedia', 'Multimedia')],
    },
    {
      label: u('Bases científicas', 'Scientific foundations'),
      units: [
        u('Álgebra', 'Algebra'),
        u('Geometría y Trigonometría', 'Geometry & Trigonometry'),
        u('Geometría Analítica', 'Analytic Geometry'),
        u('Cálculo Diferencial', 'Differential Calculus'),
        u('Cálculo Integral', 'Integral Calculus'),
        u('Probabilidad y Estadística', 'Probability & Statistics'),
        u('Dibujo Técnico I y II', 'Technical Drawing I & II'),
        u('Inglés I–VI', 'English I–VI'),
      ],
    },
  ] satisfies UnitGroup[],
};

export interface Semester {
  n: number;
  state: 'done' | 'current';
  units: L[];
}

export const upiicsa = {
  school: u('UPIICSA · IPN', 'UPIICSA · IPN'),
  program: u('Ingeniería en Informática', 'Informatics Engineering'),
  plan: u('2025– · Plan 2021 · 8 periodos', '2025– · 2021 plan · 8 periods'),
  totalSemesters: 8,
  semesters: [
    {
      n: 1,
      state: 'done',
      units: [
        u('Matemáticas Discretas', 'Discrete Mathematics'),
        u('Fundamentos de Física', 'Physics Fundamentals'),
        u('Física General Experimental', 'Experimental General Physics'),
        u('Comunicación Profesional Interdisciplinaria', 'Interdisciplinary Professional Communication'),
        u('Responsabilidad Social y Ética', 'Social Responsibility & Ethics'),
        u('Fundamentos de Administración', 'Management Fundamentals'),
        u('Lógica de Programación', 'Programming Logic'),
      ],
    },
    {
      n: 2,
      state: 'done',
      units: [
        u('Cálculo Diferencial e Integral', 'Differential & Integral Calculus'),
        u('Psicología en el Trabajo', 'Workplace Psychology'),
        u('Metodología de la Investigación', 'Research Methodology'),
        u('Sistemas Digitales', 'Digital Systems'),
        u('Aplicación de Sistemas Digitales', 'Digital Systems Applications'),
        u('Fundamentos de Ingeniería de Software', 'Software Engineering Fundamentals'),
        u('Estructura de Datos', 'Data Structures'),
        u('Programación de Bajo Nivel', 'Low-Level Programming'),
      ],
    },
    {
      n: 3,
      state: 'current',
      units: [
        u('Probabilidad', 'Probability'),
        u('Ingeniería de Requerimientos', 'Requirements Engineering'),
        u('Diseño de Interfaces de Usuario', 'User Interface Design'),
        u('Arquitectura y Organización de las Computadoras', 'Computer Architecture & Organization'),
        u('Construcción de Bases de Datos', 'Database Construction'),
        u('Algoritmos Computacionales', 'Computational Algorithms'),
        u('Programación Orientada a Objetos', 'Object-Oriented Programming'),
      ],
    },
  ] satisfies Semester[],
};
