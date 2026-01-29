'use client';
import { AnimatePresence } from 'framer-motion';
import styles from './StairTransition.module.css';
import { usePathname } from 'next/navigation';
import { Stairs } from '../stairs/Stairs';

export const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <div className={styles.transition}>
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};
