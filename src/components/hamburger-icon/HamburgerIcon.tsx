'use client';

import styles from './HamburgerIcon.module.css';
interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerIcon = ({ isOpen, onClick }: HamburgerIconProps) => {
  return (
    <button className={styles.icon} onClick={onClick} aria-label='Menu'>
      <span className={isOpen ? styles.top : ''}></span>
      <span className={isOpen ? styles.middle : ''}></span>
      <span className={isOpen ? styles.bottom : ''}></span>
    </button>
  );
};
