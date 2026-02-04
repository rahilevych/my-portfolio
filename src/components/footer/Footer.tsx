import { Social } from '../socials/Social';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Social />
    </footer>
  );
};
