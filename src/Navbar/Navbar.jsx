import React from 'react';
import styles from './Navbar.module.scss';
import PropTypes from 'prop-types';

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
