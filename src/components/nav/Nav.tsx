'use client';
import { navLinks } from '@/data/navData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';
export default function Nav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.key}>
              <span>.</span>
              <Link
                href={link.href}
                className={isActive ? styles.active : styles.link}
              >
                {t(`nav.${link.key}`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
