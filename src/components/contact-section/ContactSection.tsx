'use client';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '../contact-form/ContactForm';
import styles from './ContactSection.module.css';
import { SectionTitle } from '../section-title/SectionTitle';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
export const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      className={`section ${styles.contact}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.8, ease: 'easeInOut' },
      }}
    >
      <SectionTitle>{t('contact.title')}</SectionTitle>
      <div className={styles.content}>
        <ContactForm />
        <ul className={styles.list}>
          <li>
            <div className={styles.icon}>
              <FaEnvelope />
            </div>
            <div className={styles.info}>
              <span>Email</span>
              <br />
              <p>alona.rahilevych@gmail.com</p>
            </div>
          </li>
          <li>
            <div className={styles.icon}>
              <FaMapLocation />
            </div>
            <div className={styles.info}>
              <span>{t('contact.location')}</span>
              <br />
              <p>{t('contact.address')}</p>
            </div>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};
