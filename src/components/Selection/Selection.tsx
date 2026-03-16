import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import styles from './Selection.module.scss';
import { cn, handleHorizontalArrowNavigation } from '../utils';

export interface SandChoiceBaseProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
  /** Primary control label rendered next to the selection affordance. */
  label: ReactNode;
  /** Optional supporting description for the control. */
  description?: ReactNode;
}

export interface SandChoiceOption {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
}

export interface SandChoiceGroupProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Accessible name applied to the choice collection. */
  label?: ReactNode;
  /** Ordered list of choice options to render. */
  options?: SandChoiceOption[];
  /** The selection type for all options in the group. */
  type?: 'checkbox' | 'radio' | 'switch';
  /** The name attribute applied to all inputs in the group (required for radio groups). */
  name?: string;
  /** Value of the selected option(s). */
  value?: string | string[];
  /** Called when any option selection state changes. */
  onChange?: (value: string | string[]) => void;
}

const SandChoiceContent = ({ label, description }: { label: ReactNode; description?: ReactNode }) => (
  <span className={styles['sand-choice-content']}>
    <span className={styles['sand-choice-label']}>{label}</span>
    {description && <span className={styles['sand-choice-description']}>{description}</span>}
  </span>
);

export const SandCheckbox = forwardRef<HTMLInputElement, SandChoiceBaseProps>(function SandCheckbox(
  { label, description, id, className = '', ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label className={cn(styles['sand-choice-row'], className)} htmlFor={inputId}>
      <input ref={ref} id={inputId} type="checkbox" className={styles['sand-choice-input']} {...props} />
      <span className={cn(styles['sand-choice-control'], styles['sand-checkbox'])} aria-hidden="true">
        <span className={cn(styles['sand-checkbox-icon'], 'material-symbols-rounded')}>check</span>
      </span>
      <SandChoiceContent label={label} description={description} />
    </label>
  );
});
SandCheckbox.displayName = 'SandCheckbox';

export const SandRadio = forwardRef<HTMLInputElement, SandChoiceBaseProps>(function SandRadio(
  { label, description, id, className = '', onKeyDown, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.defaultPrevented || !props.name) {
      return;
    }

    const radioGroup = Array.from(
      document.querySelectorAll<HTMLInputElement>(`input[type="radio"][name="${props.name}"]`),
    );
    const currentIndex = radioGroup.findIndex((radio) => radio.id === inputId);

    handleHorizontalArrowNavigation(event, currentIndex, radioGroup.length, (nextIndex) => {
      radioGroup[nextIndex]?.focus();
      radioGroup[nextIndex]?.click();
    });
  };

  return (
    <label className={cn(styles['sand-choice-row'], className)} htmlFor={inputId}>
      <input ref={ref} id={inputId} type="radio" className={styles['sand-choice-input']} onKeyDown={handleKeyDown} {...props} />
      <span className={cn(styles['sand-choice-control'], styles['sand-radio'])} aria-hidden="true" />
      <SandChoiceContent label={label} description={description} />
    </label>
  );
});
SandRadio.displayName = 'SandRadio';

export const SandSwitch = forwardRef<HTMLInputElement, SandChoiceBaseProps>(function SandSwitch(
  { label, description, id, className = '', ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label className={cn(styles['sand-choice-row'], className)} htmlFor={inputId}>
      <input ref={ref} id={inputId} type="checkbox" role="switch" className={styles['sand-choice-input']} {...props} />
      <span className={cn(styles['sand-choice-control'], styles['sand-switch'])} aria-hidden="true" />
      <SandChoiceContent label={label} description={description} />
    </label>
  );
});
SandSwitch.displayName = 'SandSwitch';

export const SandChoiceGroup = forwardRef<HTMLDivElement, SandChoiceGroupProps>(function SandChoiceGroup(
  { className = '', label, options = [], type = 'radio', name, value, onChange, children, ...props },
  ref,
) {
  const groupName = useId();
  const resolvedName = name ?? groupName;

  const handleChange = (optionValue: string) => {
    if (type === 'checkbox' || type === 'switch') {
      const currentValues = Array.isArray(value) ? value : [];
      const nextValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];
      onChange?.(nextValues);
    } else {
      onChange?.(optionValue);
    }
  };

  return (
    <div ref={ref} role="group" aria-label={typeof label === 'string' ? label : undefined} className={cn(styles['sand-choice-group'], className)} {...props}>
      {label && <div className={styles['sand-choice-group-label']}>{label}</div>}
      <div className={styles['sand-choice-group-content']}>
        {options.map((option) => {
          const isChecked = Array.isArray(value) ? value.includes(option.value) : value === option.value;
          const commonProps = {
            key: option.value,
            name: resolvedName,
            label: option.label,
            description: option.description,
            disabled: option.disabled,
            checked: isChecked,
            onChange: () => handleChange(option.value),
          };

          if (type === 'checkbox') return <SandCheckbox {...commonProps} />;
          if (type === 'switch') return <SandSwitch {...commonProps} />;
          return <SandRadio {...commonProps} />;
        })}
        {children}
      </div>
    </div>
  );
});
SandChoiceGroup.displayName = 'SandChoiceGroup';
