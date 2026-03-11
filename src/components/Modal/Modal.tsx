import React, { useEffect, useId, useRef } from 'react';
import styles from './Modal.module.scss';

export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  closeOnOverlay?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  description,
  footer,
  closeOnOverlay = true,
  children,
  className = '',
  ...props
}) => {
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className={styles['sand-modal-root']}>
      <button
        type="button"
        className={styles['sand-modal-backdrop']}
        aria-label="Close dialog"
        onClick={closeOnOverlay ? onClose : undefined}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        className={`${styles['sand-modal-panel']} ${className}`.trim()}
        {...props}
      >
        <div className={styles['sand-modal-header']}>
          <div>
            <div id={titleId} className={styles['sand-modal-title']}>{title}</div>
            {description && <div id={descriptionId} className={styles['sand-modal-description']}>{description}</div>}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles['sand-modal-close']}
            onClick={onClose}
            aria-label="Close dialog"
          >
            <span className="material-symbols-rounded" aria-hidden="true">close</span>
          </button>
        </div>
        <div className={styles['sand-modal-body']}>{children}</div>
        {footer && <div className={styles['sand-modal-footer']}>{footer}</div>}
      </div>
    </div>
  );
};
