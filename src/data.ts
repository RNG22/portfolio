/**
 * All site content lives here. Source: Rutuja's resume (Rutuja_Gaikwad_4yexp.pdf).
 * Edit this file to update the site; components only render it.
 */
import type { TechKey } from './tech';

export const profile = {
  name: 'Rutuja Gaikwad',
  firstName: 'Rutuja',
  role: 'software developer',
  location: 'Bangalore, India',
  email: 'rutujag44@gmail.com',
  github: 'https://github.com/RNG22',
  githubHandle: 'RNG22',
  // Add your real profile URL to show a LinkedIn link everywhere, e.g. 'https://www.linkedin.com/in/your-name'
  linkedin: '',
  photo: 'rutuja-gaikwad.jpg',
  intro:
    'I build fast, dependable web interfaces with React, Angular and TypeScript, from booking flows that thousands of travellers use to data platforms that teams rely on every day.',
  background: [
    'I’m a frontend-focused software developer with 4 years of experience. Today I work at SpiceJet on the Skyhop booking platform and the Precog data platform, where I design reusable UI systems, tune performance, and build secure, API-driven screens.',
    'I care about interfaces that feel instant and never surprise the people using them: clear validation, sensible defaults, and components that other developers can pick up and trust.',
  ],
};

export const highlights = [
  { value: 4, suffix: '+', label: 'years building production UI' },
  { value: 40, suffix: '%', label: 'faster page loads with code splitting' },
  { value: 25, suffix: '%', label: 'less time to choose a booking' },
  { value: 20, suffix: '+', label: 'reusable React components shipped' },
];

export const stack: { title: string; items: TechKey[] }[] = [
  { title: 'Languages', items: ['typescript', 'javascript', 'html', 'css'] },
  { title: 'Frameworks & libraries', items: ['react', 'angular', 'redux', 'next', 'node', 'mui', 'tailwind'] },
  { title: 'APIs & data', items: ['rest', 'websockets', 'jwt', 'mongodb', 'sql'] },
  { title: 'Delivery & tools', items: ['git', 'jenkins', 'aws', 'postman'] },
];

export type Job = {
  role: string;
  company: string;
  place: string;
  period: string;
  current?: boolean;
  accent: string;
  points: string[];
  tech: TechKey[];
};

export const experience: Job[] = [
  {
    role: 'Software Developer',
    company: 'SpiceJet',
    place: 'Bangalore',
    period: 'Jun 2024 – Present',
    current: true,
    accent: '#e5484d',
    points: [
      'Redesigned route search and passenger validation on the **Skyhop** booking platform, cutting booking selection time by **25%** and reducing booking errors.',
      'Architected a library of **20+ reusable React + Redux Toolkit components** shared across booking and analytics workflows.',
      'Built dynamic API filtering (RTK Query, react-select, date pickers) with Chart.js visualisations for the **Precog** data platform, reducing data retrieval time by **40%**.',
      'Improved load times by **40%** with lazy loading, code splitting and an optimised build configuration.',
      'Implemented JWT authentication and protected routes, adopted as the security standard across both internal platforms.',
      'Mentored 2 junior developers and supported releases via Jenkins CI/CD and AWS with **zero critical post-release incidents**.',
    ],
    tech: ['react', 'redux', 'rtkQuery', 'typescript', 'chartjs', 'jwt', 'jenkins', 'aws'],
  },
  {
    role: 'Associate Software Developer',
    company: 'Bizdata Inc',
    place: 'Bangalore',
    period: 'Apr 2023 – Dec 2023',
    accent: '#6e56cf',
    points: [
      'Engineered and optimised CRUD operations for the Database Environment feature, cutting data retrieval time by **40%**.',
      'Built activity-monitoring dashboards with log filtering by type and date, giving support teams faster root-cause analysis.',
      'Integrated interactive chart visualisations with React and REST APIs, increasing engagement with data-heavy interfaces.',
    ],
    tech: ['react', 'rest', 'javascript', 'sql'],
  },
  {
    role: 'Associate Software Developer',
    company: 'Aptara',
    place: 'Pune',
    period: 'Sep 2021 – Nov 2022',
    accent: '#12a594',
    points: [
      'Developed responsive, component-based UI screens for an e-learning platform, improving usability and consistency.',
      'Delivered client-driven feature enhancements while keeping performance benchmarks and backward compatibility.',
      'Resolved critical UI and functionality bugs, improving platform stability for thousands of learners.',
    ],
    tech: ['angular', 'javascript', 'html', 'css'],
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  points?: string[];
  tech: TechKey[];
  gradient: [string, string];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Seaplane booking platform',
    tag: 'Full-stack · 2026',
    description:
      'A booking system for seaplane operators where a flight can sell out on seats or weight. Passengers search, book and pay; dispatchers run a live board with weather risk, check-in weighing and weight & balance.',
    points: [
      'Overbooking prevented by atomic holds plus database constraints, proven with a 40-buyer concurrency test',
      'Passenger site split into independently deployed Next.js microfrontends',
      'Payments with seat holds, idempotent retries, signed webhooks and automatic refunds',
    ],
    tech: ['next', 'nest', 'typescript', 'postgres', 'redis', 'docker'],
    gradient: ['#0ea5e9', '#6366f1'],
  },
  {
    title: 'Real-time chat app',
    tag: 'Full-stack · Real-time',
    description:
      'A full-stack chat application with JWT authentication and two-way WebSocket messaging, backed by Node.js, Express and MongoDB.',
    tech: ['react', 'websockets', 'express', 'mongodb', 'jwt'],
    gradient: ['#10b981', '#06b6d4'],
  },
  {
    title: 'E-commerce app',
    tag: 'Frontend · Angular',
    description:
      'A responsive store built with Angular and RxJS: product listing with pagination, cart management and a complete checkout flow over REST APIs.',
    tech: ['angular', 'rxjs', 'rest', 'postman'],
    gradient: ['#f43f5e', '#f59e0b'],
  },
];

export const education = [
  {
    school: 'Vishwakarma Institute of Information Technology (VIIT)',
    detail: 'Bachelor of Technology, Information Technology',
    place: 'Pune',
    period: '2017 – 2021',
  },
];
