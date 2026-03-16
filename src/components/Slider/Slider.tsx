import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cn } from '../utils';
import { SandFormGroup } from '../Input/Input';
import styles from './Slider.module.scss';

export interface SandSliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label for the slider */
  label?: string;
  /** Helper text displayed below the slider */
  helperText?: string;
  /** Error state flag */
  error?: boolean;
}

/**
 * Numeric range selector component.
 */
export const SandSlider = forwardRef<HTMLInputElement, SandSliderProps>(function SandSlider(
  { label, helperText, error, className = '', ...props },
  ref,
) {
  const generatedId = useId();
  const sliderId = props.id ?? generatedId;
  const helperTextId = helperText ? `${sliderId}-help` : undefined;

  return (
    <SandFormGroup label={label} htmlFor={sliderId}>
      <div className={styles.container}>
        <input
          ref={ref}
          id={sliderId}
          type="range"
          className={cn(styles.slider, error && styles.error, className)}
          aria-invalid={error || undefined}
          aria-describedby={helperTextId}
          {...props}
        />
        {props.value !== undefined && (
          <span className={styles.valueDisplay}>{props.value}</span>
        )}
      </div>
      {helperText && (
        <span id={helperTextId} className={cn(styles.helper, error && styles['helper-error'])}>
          {helperText}
        </span>
      )}
    </SandFormGroup>
  );
});

SandSlider.displayName = 'SandSlider';
