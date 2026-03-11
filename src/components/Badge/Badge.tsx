import React, { type HTMLAttributes } from 'react';
import styles from './Badge.module.scss';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const variantClass = styles[`sand-badge-${variant}`];

  return (
    <span
      className={`${styles['sand-badge']} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
};
