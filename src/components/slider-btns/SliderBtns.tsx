'use client';
import { Button } from '@/shared/logo/button/Button';
import styles from './SliderBtns.module.css';
import { useSwiper } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const SliderBtns = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.container}>
      <Button
        type='button'
        className={styles.btn}
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowLeft className={styles.icon} />
      </Button>
      <Button
        type='button'
        className={styles.btn}
        onClick={() => swiper.slideNext()}
      >
        <FaArrowRight className={styles.icon} />
      </Button>
    </div>
  );
};
