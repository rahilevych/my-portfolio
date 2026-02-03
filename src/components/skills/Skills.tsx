'use client';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { skills } from '@/data/skillsData';
import { SectionTitle } from '../section-title/SectionTitle';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { SkillComponent } from '../skills-component/SkillComponent';

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.8, ease: 'easeInOut' },
      }}
      className={`section ${styles.section}`}
    >
      <SectionTitle>{t('skills.title')}</SectionTitle>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <SkillComponent key={skill.category} skill={skill} />
        ))}
      </div>
    </motion.section>
  );
};
