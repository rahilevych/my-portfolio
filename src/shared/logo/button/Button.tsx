import React from 'react';
import styles from './Button.module.css';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};
export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};
