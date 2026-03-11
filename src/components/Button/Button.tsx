import React, { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'failed';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  const variantClass = styles[`sand-btn-${variant}`];

  return (
    <button
      className={`${styles['sand-btn']} ${variantClass} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
