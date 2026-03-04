import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss';

const SandBox = React.forwardRef(function SandBox({ 
  as = 'div', 
  className, 
  children,
  p,
  m,
  style,
  ...props 
}, ref) {
  const Tag = as;
  
  // Calculate dynamic spacing from tokens (8px scale)
  const dynamicStyle = {
    ...(p !== undefined ? { padding: `${p * 8}px` } : {}),
    ...(m !== undefined ? { margin: `${m * 8}px` } : {}),
    ...style,
  };

  return (
    <Tag
      ref={ref}
      className={`${styles.box} sandui-globals ${className || ''}`}
      style={dynamicStyle}
      {...props}
    >
      {children}
    </Tag>
  );
});

SandBox.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  p: PropTypes.number,
  m: PropTypes.number,
  style: PropTypes.object,
};

SandBox.displayName = 'SandBox';

export { SandBox };
export default SandBox;
