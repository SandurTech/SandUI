import React from 'react';
import styles from './Feedback.module.scss';

type FeedbackVariant = 'info' | 'success' | 'failed';

interface FeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode;
  message: React.ReactNode;
  action?: React.ReactNode;
  variant?: FeedbackVariant;
}

const icons: Record<FeedbackVariant, string> = {
  info: 'info',
  success: 'check_circle',
  failed: 'error',
};

const FeedbackBody: React.FC<FeedbackProps & { mode: 'toast' | 'snackbar' }> = ({
  heading,
  message,
  action,
  variant = 'info',
  className = '',
  mode,
  ...props
}) => (
  <div
    role="status"
    aria-live="polite"
    className={[
      styles['sand-feedback'],
      styles[`sand-feedback-${mode}`],
      styles[`sand-feedback-${variant}`],
      className,
    ].join(' ').trim()}
    {...props}
  >
    <div className={styles['sand-feedback-row']}>
      <span className={`${styles['sand-feedback-icon']} material-symbols-rounded`} aria-hidden="true">{icons[variant]}</span>
      <div className={styles['sand-feedback-content']}>
        {heading && <span className={styles['sand-feedback-title']}>{heading}</span>}
        <span className={styles['sand-feedback-message']}>{message}</span>
      </div>
      {action && <div className={styles['sand-feedback-action']}>{action}</div>}
    </div>
  </div>
);

export const Toast: React.FC<FeedbackProps> = (props) => <FeedbackBody mode="toast" {...props} />;
export const Snackbar: React.FC<FeedbackProps> = (props) => <FeedbackBody mode="snackbar" {...props} />;
