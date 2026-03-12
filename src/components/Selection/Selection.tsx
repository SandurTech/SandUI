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

export interface SandChoiceGroupProps extends ComponentPropsWithoutRef<'div'> {
  /** Accessible name applied to the choice collection. */
  label?: ReactNode;
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
  { className = '', label, ...props },
  ref,
) {
  return <div ref={ref} role="group" aria-label={typeof label === 'string' ? label : undefined} className={cn(styles['sand-choice-group'], className)} {...props} />;
});
SandChoiceGroup.displayName = 'SandChoiceGroup';
