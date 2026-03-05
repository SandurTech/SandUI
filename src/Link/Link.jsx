import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

/**
 * SandLink - A styled anchor element.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for overrides.
 * @param {string} [props.href] - Destination URL.
 * @param {string} [props.variant='default'] - Visual style: 'default', 'muted', or 'accent'.
 * @param {boolean} [props.external=false] - Opens in new tab when true.
 * @param {React.ReactNode} props.children - Link text or content.
 * @returns {React.ReactElement} The rendered link component.
 *
 * @example
 * return (
 *   <SandLink href="https://example.com" external variant="accent">
 *     Visit Example
 *   </SandLink>
 * )
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
