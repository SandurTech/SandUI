import React, { useId, type InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export interface FormGroupProps {
  label?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({ label, children, className = '', htmlFor }) => (
  <div className={`${styles['sand-form-group']} ${className}`.trim()}>
    {label && <label className={styles['sand-label']} htmlFor={htmlFor}>{label}</label>}
    {children}
  </div>
);

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`${styles['sand-input']} ${error ? styles['sand-input-error'] : ''} ${className}`.trim()}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export interface InputGroupProps extends InputProps {
  label: React.ReactNode;
  helperText?: React.ReactNode;
  groupClassName?: string;
}

export const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ label, helperText, error, groupClassName, ...props }, ref) => {
    const generatedId = useId();
    const inputId = props.id ?? generatedId;
    const helperTextId = helperText ? `${inputId}-help` : undefined;

    return (
      <FormGroup label={label} className={groupClassName} htmlFor={inputId}>
        <Input
          ref={ref}
          id={inputId}
          error={error}
          aria-invalid={error || undefined}
          aria-describedby={helperTextId}
          {...props}
        />
        {helperText && (
          <span id={helperTextId} className={error ? styles['sand-helper-text-error'] : ''}>
            {helperText}
          </span>
        )}
      </FormGroup>
    );
  }
);
InputGroup.displayName = 'InputGroup';
