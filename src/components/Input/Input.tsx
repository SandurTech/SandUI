import { forwardRef, useMemo, useId, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import styles from './Input.module.scss';
import { cn } from '../utils';

export interface SandFormGroupProps extends ComponentPropsWithoutRef<'div'> {
  /** Accessible label content rendered above the field. */
  label?: ReactNode;
  /** Optional input id associated with the label element. */
  htmlFor?: string;
}

export const SandFormGroup = forwardRef<HTMLDivElement, SandFormGroupProps>(function SandFormGroup(
  { label, children, className = '', htmlFor, ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn(styles['sand-form-group'], className)} {...props}>
      {label && <label className={styles['sand-label']} htmlFor={htmlFor}>{label}</label>}
      {children}
    </div>
  );
});
SandFormGroup.displayName = 'SandFormGroup';

export interface SandInputProps extends ComponentPropsWithoutRef<'input'> {
  /** Toggles error styling and `aria-invalid`. */
  error?: boolean;
}

export const SandInput = forwardRef<HTMLInputElement, SandInputProps>(function SandInput(
  { error, className = '', ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(styles['sand-input'], error && styles['sand-input-error'], className)}
      aria-invalid={error || props['aria-invalid']}
      {...props}
    />
  );
});
SandInput.displayName = 'SandInput';

export interface SandInputGroupProps extends SandInputProps {
  /** Accessible field label rendered above the input. */
  label: ReactNode;
  /** Optional helper or validation message rendered below the input. */
  helperText?: ReactNode;
  /** Optional class applied to the outer group wrapper. */
  className?: string;
  groupClassName?: string;
}

export const SandInputGroup = forwardRef<HTMLInputElement, SandInputGroupProps>(function SandInputGroup(
  { label, helperText, error, groupClassName, className = '', 'aria-describedby': ariaDescribedBy, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = props.id ?? generatedId;
  const helperTextId = helperText ? `${inputId}-help` : undefined;
  const describedBy = useMemo(
    () => [ariaDescribedBy, helperTextId].filter(Boolean).join(' ') || undefined,
    [ariaDescribedBy, helperTextId],
  );

  return (
    <SandFormGroup label={label} className={groupClassName} htmlFor={inputId}>
      <SandInput
        ref={ref}
        id={inputId}
        error={error}
        className={className}
        aria-describedby={describedBy}
        {...props}
      />
      {helperText && (
        <span id={helperTextId} className={error ? styles['sand-helper-text-error'] : ''}>
          {helperText}
        </span>
      )}
    </SandFormGroup>
  );
});
SandInputGroup.displayName = 'SandInputGroup';
