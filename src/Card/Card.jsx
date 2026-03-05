import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

/**
 * SandCard - A container component for grouping related content.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for external overrides.
 * @param {React.ReactNode} [props.children] - Card content.
 * @returns {React.ReactElement} The rendered card component.
 *
 * @example
 * return (
 *   <SandCard>
 *     <h3>Card Title</h3>
 *     <p>Card content goes here.</p>
 *   </SandCard>
 * )
 */
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
