import React, { type HTMLAttributes } from 'react';
import styles from './Kbd.module.scss';

export const Kbd: React.FC<HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
  <kbd className={`${styles['sand-kbd']} ${className}`.trim()} {...props} />
);
