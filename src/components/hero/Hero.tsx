'use client';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { Social } from '../socials/Social';
export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.info}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <div className={styles.text}>
          <span>{t('hero.position')}</span>
          <h1>
            {t('hero.hello')}
            <br />
            <span>{t('hero.name')}</span>
          </h1>
          <p>{t('hero.about')}</p>
        </div>
        <div className={styles.socials}>
          <Social />
        </div>
      </motion.div>
    </section>
  );
};
