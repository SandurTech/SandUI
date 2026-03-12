import { forwardRef, useMemo, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import styles from './Feedback.module.scss';
import { cn } from '../utils';

type SandFeedbackVariant = 'info' | 'success' | 'failed';

export interface SandFeedbackProps extends ComponentPropsWithoutRef<'div'> {
  /** Optional heading rendered before the message body. */
  heading?: ReactNode;
  /** Main feedback content announced to assistive technologies. */
  message: ReactNode;
  /** Optional trailing action rendered after the message content. */
  action?: ReactNode;
  /** Visual and semantic state represented by the feedback message. */
  variant?: SandFeedbackVariant;
}

const icons: Record<SandFeedbackVariant, string> = {
  info: 'info',
  success: 'check_circle',
  failed: 'error',
};

type SandFeedbackBodyProps = SandFeedbackProps & {
  mode: 'toast' | 'snackbar';
};

const SandFeedbackBody = forwardRef<HTMLDivElement, SandFeedbackBodyProps>(function SandFeedbackBody(
  { heading, message, action, variant = 'info', className = '', mode, ...props },
  ref,
) {
  const icon = useMemo(() => icons[variant], [variant]);
  const role = variant === 'failed' ? 'alert' : 'status';

  return (
    <div
      ref={ref}
      role={role}
      aria-live={variant === 'failed' ? 'assertive' : 'polite'}
      className={cn(
        styles['sand-feedback'],
        styles[`sand-feedback-${mode}`],
        styles[`sand-feedback-${variant}`],
        className,
      )}
      {...props}
    >
      <div className={styles['sand-feedback-row']}>
        <span className={cn(styles['sand-feedback-icon'], 'material-symbols-rounded')} aria-hidden="true">{icon}</span>
        <div className={styles['sand-feedback-content']}>
          {heading && <span className={styles['sand-feedback-title']}>{heading}</span>}
          <span className={styles['sand-feedback-message']}>{message}</span>
        </div>
        {action && <div className={styles['sand-feedback-action']}>{action}</div>}
      </div>
    </div>
  );
});

export const SandToast = forwardRef<HTMLDivElement, SandFeedbackProps>(function SandToast(props, ref) {
  return <SandFeedbackBody ref={ref} mode="toast" {...props} />;
});
SandToast.displayName = 'SandToast';

export const SandSnackbar = forwardRef<HTMLDivElement, SandFeedbackProps>(function SandSnackbar(props, ref) {
  return <SandFeedbackBody ref={ref} mode="snackbar" {...props} />;
});
SandSnackbar.displayName = 'SandSnackbar';
