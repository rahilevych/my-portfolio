'use client';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';
import styles from './ProjectComponent.module.css';
import { Project } from '@/data/projectsData';
import Image from 'next/image';

export const ProjectComponent = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.project}>
      <div className={styles.img}>
        <Image src={project.img} fill alt={project.title} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.info}>
        <h3>{project.title}</h3>
        <div>{t(project.descKey)}</div>
        <ul className={styles.tech}>
          <li>Tech: </li>
          {project.technologies.map((tech, index) => (
            <li key={index}>
              {tech}
              {index < project.technologies.length - 1 && ','}
            </li>
          ))}{' '}
        </ul>
      </div>
    </div>
  );
};
