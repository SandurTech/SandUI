import React, { type HTMLAttributes } from 'react';
import styles from './Divider.module.scss';

export const Divider: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
  <div className={`${styles['sand-divider']} ${className}`.trim()} {...props} />
);
