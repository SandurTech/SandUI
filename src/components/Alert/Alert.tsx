import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { SandIcon } from '../Icon/Icon';
import { cn } from '../utils';
import styles from './Alert.module.scss';

type SandAlertStatus = 'info' | 'success' | 'warning' | 'error';

const statusMap = {
  info: {
    icon: 'info',
    color: 'var(--color-info)',
    soft: 'var(--color-info-soft)',
  },
  success: {
    icon: 'check_circle',
    color: 'var(--color-success)',
    soft: 'var(--color-success-soft)',
  },
  warning: {
    icon: 'warning',
    color: 'var(--color-warning)',
    soft: 'var(--color-warning-soft)',
  },
  error: {
    icon: 'error',
    color: 'var(--color-error)',
    soft: 'var(--color-error-soft)',
  },
} as const;

export interface SandAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  status?: SandAlertStatus;
  title?: ReactNode;
  description?: ReactNode;
}

export const SandAlert = forwardRef<HTMLDivElement, SandAlertProps>(function SandAlert(
  { status = 'info', title, description, className, style, children, ...props },
  ref,
) {
  const tone = statusMap[status];

  return (
    <div
      ref={ref}
      role="status"
      className={cn(styles.alert, className)}
      style={
        {
          '--sand-alert-border': tone.color,
          '--sand-alert-bg': `color-mix(in srgb, ${tone.soft} 74%, var(--theme-surface))`,
          '--sand-alert-soft': tone.soft,
          '--sand-alert-color': tone.color,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <span className={styles.icon}>
        <SandIcon icon={tone.icon} size={20} />
      </span>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {description && <div className={styles.description}>{description}</div>}
        {children}
      </div>
    </div>
  );
});

SandAlert.displayName = 'SandAlert';
