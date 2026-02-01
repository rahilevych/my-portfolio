'use client';
import Image from 'next/image';
import styles from './Photo.module.css';
import { motion } from 'framer-motion';
export const Photo = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.8, ease: 'easeInOut' },
        }}
      >
        <div className={styles.img}>
          <Image src='/img/photo.png' priority quality={100} fill alt='photo' />
        </div>
        <motion.svg
          className={styles.svg}
          fill='transparent'
          viewBox='0 0 343 343'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='170'
            cy='170'
            r='170'
            stroke='#42e0d0'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
