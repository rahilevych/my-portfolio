import { ISkill } from '@/data/skillsData';
import styles from './SkillComponent.module.css';

export const SkillComponent = ({ skill }: { skill: ISkill }) => {
  return (
    <div className={styles.component}>
      <p>{skill.category}</p>
      <ul className={styles.list}>
        {skill.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
