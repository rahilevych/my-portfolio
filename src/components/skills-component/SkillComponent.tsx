import { ISkill } from '@/data/skillsData';
import styles from './SkillComponent.module.css';

export const SkillComponent = ({ skill }: { skill: ISkill }) => {
  return (
    <div className={styles.component}>
      <ul className={styles.list}>
        <li>{skill.category}</li>
        {skill.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
