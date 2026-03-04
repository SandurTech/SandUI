import React from 'react';
import PropTypes from 'prop-types';
import styles from './Badge.module.scss';

/**
 * SandBadge - A small status label.
 * @param {string} variant - 'default' | 'success' | 'warning' | 'error'.
 * @param {string} className - Additional CSS class for overrides.
 */
const SandBadge = React.forwardRef(({ className, variant = 'default', children, ...props }, ref) => {
  const classes = [styles.badge, styles[variant], className || ''].filter(Boolean).join(' ');
  return <span ref={ref} className={classes} {...props}>{children}</span>;
});

SandBadge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
  children: PropTypes.node.isRequired,
};

SandBadge.displayName = 'SandBadge';
export { SandBadge };
export default SandBadge;
