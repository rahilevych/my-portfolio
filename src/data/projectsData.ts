export interface Project {
  title: string;
  technologies: string[];
  descKey: string;
  img: string;
  git: string;
  link: string;
  type: 'fullstack' | 'frontend' | 'backend' | 'other';
}

export const projects: Project[] = [
  {
    title: 'Event Rave',
    technologies: ['TypeScript', 'React', 'PostgreSQL', 'Nest.js'],
    descKey: 'projects.eventRave',
    img: '/img/events.png',
    git: 'https://github.com/rahilevych/event-rave',
    link: 'https://event-rave.vercel.app/',
    type: 'fullstack',
  },
  {
    title: 'Portfolio Website',
    technologies: ['TypeScript', 'React', 'Next.js'],
    descKey: 'projects.portfolio',
    img: '/img/portfolio.png',
    git: 'https://github.com/rahilevych/my-portfolio',
    link: 'https://my-portfolio-alona-rahilevych.vercel.app/',
    type: 'frontend',
  },
  {
    title: 'Whitepace',
    technologies: ['TypeScript', 'React'],
    descKey: 'projects.whitepace',
    img: '/img/whitepace.png',
    git: 'https://github.com/rahilevych/whitepace',
    link: 'https://whitepace-wheat-three.vercel.app/',
    type: 'frontend',
  },
  {
    title: 'Bodhi Balance',
    technologies: [
      'TypeScript',
      'React',
      'MongoDB',
      'Node.js',
      'Express.js',
      'React Testing Library',
      'Jest',
    ],
    descKey: 'projects.bodhi',
    img: '/img/bodhi.png',
    git: 'https://github.com/rahilevych/bodhi-balance',
    link: 'https://bodhi-balance-8ucr.vercel.app',
    type: 'fullstack',
  },
  {
    title: 'Bookery',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Next',
      'MongoDB',
    ],
    descKey: 'projects.bookery',
    img: '/img/books.png',
    git: 'https://github.com/rahilevych/bookery',
    link: 'https://bookery-sbic.vercel.app/',
    type: 'fullstack',
  },
  {
    title: 'Moments',
    technologies: [
      'TypeScript',
      'React',
      'MongoDB',
      'Node.js',
      'Express.js',
      'Socket.IO',
      'Jest',
    ],
    descKey: 'projects.moments',
    img: '/img/inst.png',
    git: 'https://github.com/rahilevych/moments',
    link: 'https://moments-client1.onrender.com',
    type: 'fullstack',
  },
  {
    title: 'Pictures',
    technologies: ['HTML5', 'CSS3', 'TypeScript', 'ReactJS', 'Firebase'],
    descKey: 'projects.pictures',
    img: '/img/picture.png',
    git: 'https://github.com/rahilevych/pictures',
    link: 'https://pictures-sigma.vercel.app/',
    type: 'frontend',
  },
];
