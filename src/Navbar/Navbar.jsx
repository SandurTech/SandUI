import React from 'react';
import styles from './Navbar.module.scss';
import PropTypes from 'prop-types';

const Navbar = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <nav ref={ref} className={`${styles.navbar} sandui-globals ${className || ''}`} {...props}>
      {title && <h1>{title}</h1>}
      <div>{children}</div>
    </nav>
  );
});

Navbar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

Navbar.displayName = 'Navbar';

export default Navbar;
