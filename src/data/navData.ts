export type NavLink = {
  label: string;
  href: string;
  lang: 'en' | 'de';
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', lang: 'en' },
  { label: 'About', href: '/about', lang: 'en' },
  { label: 'Projects', href: '/projects', lang: 'en' },
  { label: 'Contact', href: '/contact', lang: 'en' },

  { label: 'Start', href: '/', lang: 'de' },
  { label: 'Über mich', href: '/about', lang: 'de' },
  { label: 'Projekte', href: '/projects', lang: 'de' },
  { label: 'Kontakt', href: '/contact', lang: 'de' },
];
