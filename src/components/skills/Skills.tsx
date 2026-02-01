'use client';
import { skills } from '@/data/skillsData';
import { SectionTitle } from '../section-title/SectionTitle';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { SkillComponent } from '../skills-component/SkillComponent';

export const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.8, ease: 'easeInOut' },
      }}
    >
      <SectionTitle>Skills</SectionTitle>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <SkillComponent key={skill.category} skill={skill} />
        ))}
      </div>
    </motion.section>
  );
};
