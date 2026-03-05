import React from 'react';
import styles from './Navbar.module.scss';
import PropTypes from 'prop-types';

/**
 * SandNavbar - A top navigation bar component.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for external overrides.
 * @param {string} [props.title] - Navbar title text.
 * @param {string} [props.logo] - URL to the logo image.
 * @param {boolean} [props.fixed=false] - Fixes the navbar to the top of the viewport.
 * @param {React.ReactNode} [props.children] - Additional navbar content (e.g., links).
 * @returns {React.ReactElement} The rendered navbar component.
 *
 * @example
 * return (
 *   <SandNavbar title="SandUI" fixed={true}>
 *     <a href="/login">Login</a>
 *   </SandNavbar>
 * )
 */
const SandNavbar = React.forwardRef(({ 
  className, 
  title, 
  logo, 
  fixed = false, 
  children, 
  ...props 
}, ref) => {
  const classes = [
    styles.navbar,
    fixed ? styles.fixed : '',
    'sandui-globals',
    className || '',
  ].filter(Boolean).join(' ');

  return (
    <nav ref={ref} className={classes} {...props}>
      <div className={styles.logo}>
        {logo && <img src={logo} alt={`${title || 'SandUI'} logo`} />}
        {title && <h1>{title}</h1>}
      </div>
      <div>{children}</div>
    </nav>
  );
});

SandNavbar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.string,
  fixed: PropTypes.bool,
  children: PropTypes.node,
};

SandNavbar.displayName = 'SandNavbar';

export { SandNavbar };
export default SandNavbar;
