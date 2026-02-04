'use client';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import styles from './ProjectDescription.module.css';
import { Project } from '@/data/projectsData';
import Link from 'next/link';
import { Button } from '@/shared/logo/button/Button';
import Image from 'next/image';
interface ProjectDescriptionProps {
  index: number;
  project: Project;
}

export const ProjectDescription = ({
  index,
  project,
}: ProjectDescriptionProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.project}>
      <p>{index < 10 ? '0' + index : index}</p>
      <h3>{project.title}</h3>
      <div className={styles.desc}>{t(project.descKey)}</div>
      <ul className={styles.list}>
        {project.technologies.map((tech, index) => (
          <li key={tech}>
            {tech}
            {index < project.technologies.length - 1 && ','}
          </li>
        ))}
      </ul>
      <div className={styles.line}></div>
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
  );
};
