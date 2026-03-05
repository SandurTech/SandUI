import React from 'react';
import PropTypes from 'prop-types';

/**
 * SandIcon - Renders a Google Material Symbols Rounded icon.
 *
 * @component
 * @param {Object} props
 * @param {string} props.name - Material icon name (e.g. 'settings', 'dark_mode').
 * @param {number} [props.size=20] - Icon size in px.
 * @param {boolean} [props.filled=true] - Use filled variant.
 * @param {string} [props.className] - Additional CSS class for overrides.
 * @param {Object} [props.style] - Additional inline styles.
 * @returns {React.ReactElement} The rendered icon component.
 *
 * @example
 * return (
 *   <SandIcon name="settings" size={24} filled={false} />
 * )
 */
const SandIcon = React.forwardRef(({ name, size = 20, filled = true, className, style, ...props }, ref) => (
  <span
    ref={ref}
    className={`material-symbols-rounded ${className || ''}`}
    style={{
      fontSize: size,
      fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
      verticalAlign: 'middle',
      lineHeight: 1,
      ...style,
    }}
    {...props}
  >
    {name}
  </span>
));

SandIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  filled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

SandIcon.displayName = 'SandIcon';
export { SandIcon };
export default SandIcon;
