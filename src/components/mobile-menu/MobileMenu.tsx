'use client';
import styles from './MobileMenu.module.css';
import { HamburgerIcon } from '../hamburger-icon/HamburgerIcon';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navLinks } from '@/data/navData';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';
import { LanguageSwitcher } from '../language-switcher/LanguagesSwitscher';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.menu} ref={menuRef}>
      <HamburgerIcon
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <div className={styles.switcher}>
          {' '}
          <LanguageSwitcher />
        </div>

        <ul className={styles.list}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.key}>
                <span>.</span>
                <Link
                  onClick={handleItemClick}
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
    </div>
  );
};
