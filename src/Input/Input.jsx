import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

/**
 * SandInput - A controlled or uncontrolled text input component.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for external overrides.
 * @param {string} [props.label] - Label text displayed above the input.
 * @param {string} [props.error] - Error message displayed below the input.
 * @param {string} [props.placeholder] - Placeholder text for the input.
 * @param {string} [props.type='text'] - Type of the input element.
 * @param {boolean} [props.disabled=false] - Disables the input.
 * @returns {React.ReactElement} The rendered input component.
 *
 * @example
 * return (
 *   <SandInput
 *     label="Username"
 *     placeholder="Enter your username"
 *   />
 * )
 */
const SandInput = React.forwardRef(({ 
  className, 
  label, 
  error, 
  ...props 
}, ref) => {
  const inputId = React.useId();
  return (
    <div className={`${styles.wrapper} sandui-globals ${className || ''}`}>
      {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <input id={inputId} ref={ref} className={`${styles.input} ${error ? styles.error : ''}`} {...props} />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
});

SandInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

SandInput.displayName = 'SandInput';

export { SandInput };
export default SandInput;
