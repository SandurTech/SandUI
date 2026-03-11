import React, { type HTMLAttributes } from 'react';
import styles from './Card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  header,
  footer,
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`${styles['sand-card']} ${className}`.trim()} {...props}>
      {header && (
        <div className={styles['sand-card-header']}>{header}</div>
      )}
      <div className={styles['sand-card-body']}>{children}</div>
      {footer && (
        <div className={styles['sand-card-footer']}>{footer}</div>
      )}
    </div>
  );
};
