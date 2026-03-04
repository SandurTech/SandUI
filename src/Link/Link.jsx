import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

/**
 * SandLink - A styled anchor element.
 * @param {string} href - Destination URL.
 * @param {string} variant - 'default' | 'muted' | 'accent'.
 * @param {boolean} external - Opens in new tab when true.
 * @param {string} className - Additional CSS class for overrides.
 */
const SandLink = React.forwardRef(({
  className,
  variant = 'default',
  external = false,
  children,
  ...props
}, ref) => {
  const classes = [styles.link, styles[variant], className || ''].filter(Boolean).join(' ');
  const extProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a ref={ref} className={classes} {...extProps} {...props}>
      {children}
    </a>
  );
});

SandLink.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'muted', 'accent']),
  external: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SandLink.displayName = 'SandLink';

export { SandLink };
export default SandLink;
