'use client';
import '../../i18n/i18n';
import { Button } from '@/shared/logo/button/Button';
import { SectionTitle } from '../section-title/SectionTitle';
import styles from './About.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Photo } from '../photo/Photo';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export const About = ({ text }: { text: string }) => {
  const pathname = usePathname();
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
      className={` section ${styles.about}`}
    >
      <SectionTitle>{t('about.title')}</SectionTitle>
      <div className={styles.content}>
        <motion.div
          className={styles.img}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.8, ease: 'easeInOut' },
          }}
        >
          <Photo />
        </motion.div>

        <div className={styles.info}>
          <p className={styles.text}>{text}</p>
          {pathname !== '/about' ? (
            <Link href='/about' className={styles.btn}>
              {' '}
              <Button type='button'>{t('about.button')}</Button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </motion.section>
  );
};
