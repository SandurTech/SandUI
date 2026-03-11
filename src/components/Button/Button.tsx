import React, { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const variantClass = styles[`sand-btn-${variant}`];

  return (
    <button
      className={`${styles['sand-btn']} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};
