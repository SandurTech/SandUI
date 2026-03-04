import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kbd.module.scss';

const SandKbd = React.forwardRef(function SandKbd({ className, children, ...props }, ref) {
  return (
    <kbd
      ref={ref}
      className={`${styles.kbd} sandui-globals ${className || ''}`}
      {...props}
    >
      {children}
    </kbd>
  );
});

SandKbd.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

SandKbd.displayName = 'SandKbd';

export { SandKbd };
export default SandKbd;
