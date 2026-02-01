export interface ISkill {
  category: string;
  items: string[];
}

export const skills: ISkill[] = [
  { category: 'languages', items: ['JavaScript', 'TypeScript', 'PHP', 'SQL'] },
  {
    category: 'frontend',
    items: [
      'React',
      'Next.js',
      'Context API',
      'Zustand',
      'TanStack Query',
      'HTML5',
      'CSS3',
    ],
  },
  { category: 'backend', items: ['Node.js', 'Express.js', 'NestJS'] },
  { category: 'databases', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  {
    category: 'testing',
    items: ['Jest', 'React Testing Library', 'Supertest'],
  },
  { category: 'tools', items: ['Git'] },
];
