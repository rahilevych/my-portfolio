'use client';
import { NavLink, navLinks } from '@/data/navData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';
export default function Nav() {
  const lang = 'en';
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navLinks
          .filter((link) => link.lang === lang)
          .map((link: NavLink) => {
            const isActive = pathname === link.href;
            return (
              <li key={`${link.lang}-${link.href}`}>
                <p>#</p>
                <Link
                  href={link.href}
                  className={isActive ? styles.active : styles.link}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
