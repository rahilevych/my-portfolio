import React from 'react';
import styles from './ProjectComponent.module.css';
import { Project } from '@/data/projectsData';
import Image from 'next/image';

export const ProjectComponent = ({ project }: { project: Project }) => {
  return (
    <div className={styles.project}>
      <div className={styles.img}>
        <Image src={project.img} fill alt={project.title} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.info}>
        <h3>{project.title}</h3>
        <div>{project.desc}</div>
        <ul className={styles.tech}>
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
