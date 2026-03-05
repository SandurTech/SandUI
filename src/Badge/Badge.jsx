import React from 'react';
import PropTypes from 'prop-types';
import styles from './Badge.module.scss';

/**
 * SandBadge - A small status label.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for overrides.
 * @param {string} [props.variant='default'] - Visual style: 'default', 'success', 'warning', or 'error'.
 * @param {React.ReactNode} props.children - Badge content.
 * @returns {React.ReactElement} The rendered badge component.
 *
 * @example
 * return (
 *   <SandBadge variant="success">New</SandBadge>
 * )
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
