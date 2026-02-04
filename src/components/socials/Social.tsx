import Link from 'next/link';
import styles from './Social.module.css';
import { Button } from '@/shared/logo/button/Button';
import Image from 'next/image';

export const Social = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.icons} ${className}`}>
      <Link href='https://github.com/rahilevych' target='_blank'>
        <Button className={styles.btn}>
          <Image
            src='/icons/github.svg'
            alt='GitHub icon'
            width={18}
            height={18}
          />
        </Button>
      </Link>
      <Link href='https://www.linkedin.com/in/alona-rahilevych' target='_blank'>
        <Button className={styles.btn}>
          {' '}
          <Image
            src='/icons/linkedin.svg'
            alt='linkedin icon'
            width={18}
            height={18}
          />
        </Button>
      </Link>
    </div>
  );
};
