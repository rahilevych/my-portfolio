import Image from 'next/image';
import styles from './Photo.module.css';

export const Photo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src='/img/photo.png' priority quality={100} fill alt='photo' />
      </div>
    </div>
  );
};
