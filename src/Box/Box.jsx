import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss';
import '../styles/_global.scss';

const Box = React.forwardRef(function Box({ as = 'div', className, children, ...props }, ref) {
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`${styles.box} sandui-globals ${className || ''}`}
      {...props}
    >
      {children}
    </Tag>
  );
});

Box.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
};

Box.displayName = 'Box';

export default Box;
