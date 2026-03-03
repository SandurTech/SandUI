import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`${styles.button} sandui-globals ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.displayName = 'Button';

export default Button;
