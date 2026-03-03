import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import '../styles/_global.scss'; // Ensures inherit typings

const Card = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.card} sandui-globals ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.displayName = 'Card';

export default Card;
