import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import styles from './Kbd.module.scss';
import { cn } from '../utils';

export type SandKBDProps = ComponentPropsWithoutRef<'kbd'>;

export const SandKBD = forwardRef<HTMLElement, SandKBDProps>(function SandKBD(
  { className = '', ...props },
  ref,
) {
  return <kbd ref={ref} className={cn(styles['sand-kbd'], className)} {...props} />;
});
SandKBD.displayName = 'SandKBD';
