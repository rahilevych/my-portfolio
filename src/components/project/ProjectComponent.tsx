'use client';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';
import styles from './ProjectComponent.module.css';
import { Project } from '@/data/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/shared/logo/button/Button';

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
        <div className={styles.buttons}>
          <Link target='__blank' href={project.git}>
            <Button className={styles.btn}>
              <Image
                src='/icons/github.svg'
                alt='GitHub icon'
                width={24}
                height={24}
              />
            </Button>
          </Link>
          <Link target='__blank' href={project.link}>
            <Button className={styles.btn}>
              {' '}
              <Image
                src='/icons/live.svg'
                alt='live icon'
                width={24}
                height={24}
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
