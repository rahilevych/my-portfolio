'use client';
import { Logo } from '@/shared/logo/Logo';
import Nav from '../nav/Nav';
import styles from './Header.module.css';
import { MobileMenu } from '../mobile-menu/MobileMenu';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <div className={styles.menu}>
        {' '}
        <MobileMenu />
      </div>
    </header>
  );
};
