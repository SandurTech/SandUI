import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

/**
 * SandButton - The primary interactive element in SandUI.
 *
 * Supports three visual variants and an active press animation (scale 0.98).
 * All buttons use the Inter font and follow the 8px spacing grid.
 *
 * @param {string} variant - Visual style: 'primary' (orange), 'secondary' (charcoal), or 'ghost' (transparent).
 * @param {boolean} disabled - Disables interaction and reduces opacity.
 * @param {string} className - Additional CSS class for external overrides.
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
