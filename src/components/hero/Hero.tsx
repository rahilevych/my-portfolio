'use client';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' },
          }}
        >
          <span>Software Developer</span>
          <h1>
            Hello I&apos;m <br />
            <span>Alona Rahilevych</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            libero vitae architecto delectus obcaecati voluptatum. Natus
            expedita dolore facere temporibus culpa rerum molestias assumenda
            dignissimos consequuntur quidem, similique numquam. Ad?
          </p>
        </motion.div>
      </div>
    </section>
  );
};
