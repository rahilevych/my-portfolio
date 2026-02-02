'use client';
import styles from './ProjectSection.module.css';
import { SectionTitle } from '../section-title/SectionTitle';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { ProjectComponent } from '../project/ProjectComponent';
import { Project, projects } from '@/data/projectsData';
import Link from 'next/link';
export const ProjectSection = () => {
  return (
    <motion.section
      className='section'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={styles.title}>
        <SectionTitle>Projects</SectionTitle>
        <Link href='projects' className={styles.btn}>
          <span>View all </span>
          <FaArrowRightLong />
        </Link>
      </div>
      <div className={styles.projects}>
        {projects
          .filter((project: Project) => project.type === 'fullstack')
          .slice(0, 3)
          .map((project) => (
            <ProjectComponent key={project.title} project={project} />
          ))}
      </div>
    </motion.section>
  );
};
