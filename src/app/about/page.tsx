'use client';
import '../../i18n/i18n';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div>
      <div className='wrapper'>
        <div className='container'>
          <main className='main'>
            <About text={t('about.textLong')} />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.7, duration: 0.8, ease: 'easeOut' }}
            >
              <Skills />
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
