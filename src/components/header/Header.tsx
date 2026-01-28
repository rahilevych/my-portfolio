import { Logo } from '@/shared/logo/Logo';
import Nav from '../nav/Nav';
import styles from './Header.module.css';
export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
};
