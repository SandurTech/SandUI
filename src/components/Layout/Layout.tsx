import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import styles from './Layout.module.scss';
import { cn } from '../utils';

export type SandContainerProps = ComponentPropsWithoutRef<'div'>;

export const SandContainer = forwardRef<HTMLDivElement, SandContainerProps>(function SandContainer(
  { className = '', ...props },
  ref,
) {
  return <div ref={ref} className={cn(styles['sand-container'], className)} {...props} />;
});
SandContainer.displayName = 'SandContainer';

export type SandHeaderProps = ComponentPropsWithoutRef<'header'>;

export const SandHeader = forwardRef<HTMLElement, SandHeaderProps>(function SandHeader(
  { className = '', ...props },
  ref,
) {
  return <header ref={ref} className={cn(styles['sand-header'], className)} {...props} />;
});
SandHeader.displayName = 'SandHeader';

export type SandToolLayoutProps = ComponentPropsWithoutRef<'div'>;

export const SandToolLayout = forwardRef<HTMLDivElement, SandToolLayoutProps>(function SandToolLayout(
  { className = '', ...props },
  ref,
) {
  return <div ref={ref} className={cn(styles['sand-tool-layout'], className)} {...props} />;
});
SandToolLayout.displayName = 'SandToolLayout';

export type SandToolPanelProps = ComponentPropsWithoutRef<'aside'>;

export const SandToolPanel = forwardRef<HTMLElement, SandToolPanelProps>(function SandToolPanel(
  { className = '', ...props },
  ref,
) {
  return <aside ref={ref} className={cn(styles['sand-tool-panel'], className)} {...props} />;
});
SandToolPanel.displayName = 'SandToolPanel';

export type SandResultPanelProps = ComponentPropsWithoutRef<'main'>;

export const SandResultPanel = forwardRef<HTMLElement, SandResultPanelProps>(function SandResultPanel(
  { className = '', ...props },
  ref,
) {
  return <main ref={ref} className={cn(styles['sand-result-panel'], className)} {...props} />;
});
SandResultPanel.displayName = 'SandResultPanel';
