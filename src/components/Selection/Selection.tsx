import React, { useId, type InputHTMLAttributes } from 'react';
import styles from './Selection.module.scss';

interface ChoiceBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  description?: React.ReactNode;
}

const ChoiceContent: React.FC<{ label: React.ReactNode; description?: React.ReactNode }> = ({ label, description }) => (
  <span className={styles['sand-choice-content']}>
    <span className={styles['sand-choice-label']}>{label}</span>
    {description && <span className={styles['sand-choice-description']}>{description}</span>}
  </span>
);

export const Checkbox: React.FC<ChoiceBaseProps> = ({ label, description, id, className = '', ...props }) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label className={`${styles['sand-choice-row']} ${className}`.trim()} htmlFor={inputId}>
      <input id={inputId} type="checkbox" className={styles['sand-choice-input']} {...props} />
      <span className={`${styles['sand-choice-control']} ${styles['sand-checkbox']}`} aria-hidden="true">
        <span className={`${styles['sand-checkbox-icon']} material-symbols-rounded`}>check</span>
      </span>
      <ChoiceContent label={label} description={description} />
    </label>
  );
};

export const Radio: React.FC<ChoiceBaseProps> = ({ label, description, id, className = '', ...props }) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label className={`${styles['sand-choice-row']} ${className}`.trim()} htmlFor={inputId}>
      <input id={inputId} type="radio" className={styles['sand-choice-input']} {...props} />
      <span className={`${styles['sand-choice-control']} ${styles['sand-radio']}`} aria-hidden="true" />
      <ChoiceContent label={label} description={description} />
    </label>
  );
};

export const Switch: React.FC<ChoiceBaseProps> = ({ label, description, id, className = '', ...props }) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label className={`${styles['sand-choice-row']} ${className}`.trim()} htmlFor={inputId}>
      <input id={inputId} type="checkbox" role="switch" className={styles['sand-choice-input']} {...props} />
      <span className={`${styles['sand-choice-control']} ${styles['sand-switch']}`} aria-hidden="true" />
      <ChoiceContent label={label} description={description} />
    </label>
  );
};

export const ChoiceGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
  <div className={`${styles['sand-choice-group']} ${className}`.trim()} {...props} />
);
