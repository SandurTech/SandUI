import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import styles from './Divider.module.scss';
import { cn } from '../utils';

export type SandDividerProps = ComponentPropsWithoutRef<'hr'>;

export const SandDivider = forwardRef<HTMLHRElement, SandDividerProps>(function SandDivider(
  { className = '', ...props },
  ref,
) {
  return <hr ref={ref} className={cn(styles['sand-divider'], className)} {...props} />;
});
SandDivider.displayName = 'SandDivider';
