import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

/**
 * SandButton - The primary interactive element in SandUI.
 *
 * Supports three visual variants and an active press animation (scale 0.98).
 * All buttons use the Inter font and follow the 8px spacing grid.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for external overrides.
 * @param {string} [props.variant='primary'] - Visual style: 'primary', 'secondary', or 'ghost'.
 * @param {React.ReactNode} props.children - Button content.
 * @param {boolean} [props.disabled=false] - Disables interaction and reduces opacity.
 * @returns {React.ReactElement} The rendered button component.
 *
 * @example
 * return (
 *   <SandButton variant="primary" disabled={false}>
 *     Click Me
 *   </SandButton>
 * )
 */
const SandButton = React.forwardRef(({
  className,
  variant = 'primary',
  children,
  ...props
}, ref) => {
  const classes = [
    styles.button,
    styles[variant],
    'sandui-globals',
    className || '',
  ].filter(Boolean).join(' ');

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});

SandButton.propTypes = {
  /** Additional CSS class for external overrides */
  className: PropTypes.string,
  /** Visual style variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  /** Button content */
  children: PropTypes.node.isRequired,
  /** Disables the button */
  disabled: PropTypes.bool,
};

SandButton.displayName = 'SandButton';

export { SandButton };
export default SandButton;
