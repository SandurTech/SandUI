import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.scss';
import SandIcon from '../Icon/Icon';

/**
 * SandSidebar - A vertical navigation organism.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for overrides.
 * @param {Array<{icon?: string, label: string, href?: string, active?: boolean}>} [props.items=[]] - Array of sidebar items.
 * @param {React.ReactNode} [props.children] - Additional sidebar content.
 * @returns {React.ReactElement} The rendered sidebar component.
 *
 * @example
 * return (
 *   <SandSidebar
 *     items={[
 *       { label: 'Dashboard', icon: 'dashboard', active: true },
 *       { label: 'Settings', icon: 'settings' }
 *     ]}
 *   />
 * )
 */
const SandSidebar = React.forwardRef(({ className, items = [], children, ...props }, ref) => (
  <aside ref={ref} className={`${styles.sidebar} sandui-globals ${className || ''}`} {...props}>
    <nav>
      {items.map((item, i) => (
        <a key={i} href={item.href || '#'} className={`${styles.item} ${item.active ? styles.active : ''}`}>
          {item.icon && <SandIcon name={item.icon} size={18} />}
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
    {children}
  </aside>
));

SandSidebar.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    active: PropTypes.bool,
  })),
  children: PropTypes.node,
};

SandSidebar.displayName = 'SandSidebar';
export { SandSidebar };
export default SandSidebar;
