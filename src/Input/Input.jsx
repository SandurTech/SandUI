import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const SandInput = React.forwardRef(({ 
  className, 
  label, 
  error, 
  ...props 
}, ref) => {
  return (
    <div className={`${styles.wrapper} sandui-globals ${className || ''}`}>
      {label && <label className={styles.label}>{label}</label>}
      <input ref={ref} className={`${styles.input} ${error ? styles.error : ''}`} {...props} />
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
