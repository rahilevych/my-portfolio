'use client';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '../contact-form/ContactForm';
import styles from './ContactSection.module.css';
import { SectionTitle } from '../section-title/SectionTitle';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export const ContactSection = () => {
  const pathname = usePathname();
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

          <li>
            <div className={styles.icon}>
              <FaLinkedin />
            </div>
            <Link
              target='__blank'
              href='https://www.linkedin.com/in/alona-rahilevych/'
              className={styles.info}
            >
              <span>LinkedIn</span>
              <br />
              <p>/in/alona-rahilevych/</p>
            </Link>
          </li>
          <li>
            <div className={styles.icon}>
              <FaGithub />
            </div>
            <Link
              target='__blank'
              href='https://github.com/rahilevych'
              className={styles.info}
            >
              <span>GitHub</span>
              <br />
              <p>/github.com/rahilevych</p>
            </Link>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};
