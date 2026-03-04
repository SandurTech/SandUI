import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const SandCard = React.forwardRef(({ className, children, ...props }, ref) => {
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

SandCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

SandCard.displayName = 'SandCard';

export { SandCard };
export default SandCard;
