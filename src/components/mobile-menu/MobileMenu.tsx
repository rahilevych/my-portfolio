'use client';
import styles from './MobileMenu.module.css';
import { HamburgerIcon } from '../hamburger-icon/HamburgerIcon';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavLink, navLinks } from '@/data/navData';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const lang = 'en';
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
                    onClick={handleItemClick}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};
