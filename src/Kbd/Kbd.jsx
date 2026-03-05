import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kbd.module.scss';

/**
 * SandKbd - Represents user input from a keyboard.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for external overrides.
 * @param {React.ReactNode} [props.children] - Keyboard input content.
 * @returns {React.ReactElement} The rendered kbd component.
 *
 * @example
 * return (
 *   <SandKbd>Ctrl + C</SandKbd>
 * )
 */
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
