import styles from './SectionTitle.module.css';
export const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${styles.title} ${className}`}>
      <span>.</span>
      <h2>{children}</h2>
      <div></div>
    </div>
  );
};
