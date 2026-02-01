'use client';
import { Button } from '@/shared/logo/button/Button';
import { SectionTitle } from '../section-title/SectionTitle';
import styles from './About.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.8, ease: 'easeInOut' },
      }}
      className={styles.about}
    >
      <SectionTitle>About</SectionTitle>
      <div className={styles.content}>
        <div className={styles.graphic}>
          <div className={`${styles.dots} ${styles.one}`}></div>
          <div className={`${styles.dots} ${styles.two}`}></div>
          <div className={`${styles.square} ${styles.one}`}></div>
          <div className={`${styles.square} ${styles.two}`}></div>
          <div className={`${styles.square} ${styles.three}`}></div>
        </div>
        <div className={styles.info}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            voluptates laboriosam quo repudiandae facere doloremque ratione
            ducimus exercitationem recusandae provident sit, accusamus, nobis
            officia quasi quam enim? Eum, at magnam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Praesentium ut odio voluptates atque
            eaque ipsam, enim hic, aperiam voluptas reprehenderit tempore, modi
            unde? Neque magnam illo, deserunt iste temporibus fugiat. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsum?
            Rerum eveniet eum nisi repudiandae molestiae, commodi aliquam
            dignissimos blanditiis velit fugit, exercitationem expedita eligendi
            facilis saepe! Ad, ducimus nobis?
          </p>
          <Link href='/about' className={styles.btn}>
            {' '}
            <Button type='button'>Read more</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
