import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import { cn } from '../utils';
import { SandFormGroup } from '../Input/Input';
import styles from './Textarea.module.scss';

export interface SandTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label for the textarea */
  label?: string;
  /** Helper text displayed below the textarea */
  helperText?: string;
  /** Error state flag */
  error?: boolean;
  /** Resize mode */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

/**
 * Multi-line text input component.
 */
export const SandTextarea = forwardRef<HTMLTextAreaElement, SandTextareaProps>(function SandTextarea(
  { label, helperText, error, resize = 'vertical', className = '', ...props },
  ref,
) {
  const generatedId = useId();
  const textareaId = props.id ?? generatedId;
  const helperTextId = helperText ? `${textareaId}-help` : undefined;

  return (
    <SandFormGroup label={label} htmlFor={textareaId}>
      <textarea
        ref={ref}
        id={textareaId}
        className={cn(
          styles.textarea,
          error && styles.error,
          styles[`resize-${resize}`],
          className,
        )}
        aria-invalid={error || undefined}
        aria-describedby={helperTextId}
        {...props}
      />
      {helperText && (
        <span id={helperTextId} className={cn(styles.helper, error && styles['helper-error'])}>
          {helperText}
        </span>
      )}
    </SandFormGroup>
  );
});

SandTextarea.displayName = 'SandTextarea';
