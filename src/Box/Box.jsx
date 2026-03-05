import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss';

/**
 * SandBox - A fundamental layout building block.
 * Uses an 8px scale for padding and margin props.
 *
 * @component
 * @param {Object} props
 * @param {React.ElementType} [props.as='div'] - The HTML element to render.
 * @param {string} [props.className] - Additional CSS class for external overrides.
 * @param {React.ReactNode} [props.children] - Box content.
 * @param {number} [props.p] - Padding multiplier (x 8px).
 * @param {number} [props.m] - Margin multiplier (x 8px).
 * @param {Object} [props.style] - Additional inline styles.
 * @returns {React.ReactElement} The rendered box component.
 *
 * @example
 * return (
 *   <SandBox as="section" p={2} m={1}>
 *     Box Content
 *   </SandBox>
 * )
 */
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
