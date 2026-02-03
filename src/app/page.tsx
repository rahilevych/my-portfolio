'use client';
import '../i18n/i18n';
import styles from './page.module.css';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { ContactSection } from '@/components/contact-section/ContactSection';
import { ProjectSection } from '@/components/project-section/ProjectSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <div className='wrapper'>
        <div className='container'>
          <main className={`'main' ${styles.main}`}>
            <Hero />
            <About text={t('about.textShort')} />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <ProjectSection />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Skills />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <ContactSection />
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
