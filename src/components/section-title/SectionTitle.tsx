import styles from './SectionTitle.module.css';
export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.title}>
      <span>.</span>
      <h2>{children}</h2>
      <div></div>
    </div>
  );
};
