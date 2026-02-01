import Link from 'next/link';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <Link className={styles.logo} href='/'>
      <div>
        Alona Rahilevych <span>.</span>
      </div>
    </Link>
  );
};
