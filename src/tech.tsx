/**
 * Every technology shown on the site, with its logo and brand colour.
 * `color: null` means the logo is black in its brand (Next.js, Express…), so it
 * follows the text colour and stays visible in dark mode.
 */
import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import {
  SiAngular, SiChartdotjs, SiCss, SiDocker, SiExpress, SiGit, SiHtml5, SiJavascript, SiJenkins,
  SiJsonwebtokens, SiMongodb, SiMui, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPostman,
  SiReact, SiReactivex, SiRedis, SiRedux, SiTailwindcss, SiTypescript,
} from 'react-icons/si';
import { TbDatabase, TbPlugConnected } from 'react-icons/tb';

export type Tech = { name: string; Icon: IconType; color: string | null };

const t = (name: string, Icon: IconType, color: string | null): Tech => ({ name, Icon, color });

export const TECH = {
  react: t('React', SiReact, '#149eca'),
  angular: t('Angular', SiAngular, '#dd0031'),
  typescript: t('TypeScript', SiTypescript, '#3178c6'),
  javascript: t('JavaScript', SiJavascript, '#e8b500'),
  html: t('HTML5', SiHtml5, '#e34f26'),
  css: t('CSS', SiCss, '#663399'),
  redux: t('Redux Toolkit', SiRedux, '#764abc'),
  rtkQuery: t('RTK Query', SiRedux, '#764abc'),
  next: t('Next.js', SiNextdotjs, null),
  mui: t('Material UI', SiMui, '#007fff'),
  tailwind: t('Tailwind CSS', SiTailwindcss, '#06b6d4'),
  node: t('Node.js', SiNodedotjs, '#5fa04e'),
  express: t('Express', SiExpress, null),
  mongodb: t('MongoDB', SiMongodb, '#47a248'),
  sql: t('SQL', TbDatabase, '#f29111'),
  rest: t('REST APIs', TbPlugConnected, '#ff6c37'),
  websockets: t('WebSockets', TbPlugConnected, '#10b981'),
  jwt: t('JWT', SiJsonwebtokens, '#d63aff'),
  git: t('Git', SiGit, '#f05032'),
  jenkins: t('Jenkins CI/CD', SiJenkins, '#d24939'),
  aws: t('AWS (S3, EC2)', FaAws, '#ff9900'),
  postman: t('Postman', SiPostman, '#ff6c37'),
  rxjs: t('RxJS', SiReactivex, '#b7178c'),
  chartjs: t('Chart.js', SiChartdotjs, '#ff6384'),
  nest: t('NestJS', SiNestjs, '#e0234e'),
  postgres: t('PostgreSQL', SiPostgresql, '#4169e1'),
  redis: t('Redis', SiRedis, '#ff4438'),
  docker: t('Docker', SiDocker, '#2496ed'),
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof TECH;
