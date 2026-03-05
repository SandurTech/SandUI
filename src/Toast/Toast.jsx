import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Toast.module.scss';
import SandIcon from '../Icon/Icon';

/**
 * SandToast - A temporary notification message.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class for overrides.
 * @param {string} [props.variant='info'] - Visual style: 'info', 'success', 'warning', or 'error'.
 * @param {string} props.message - Toast message text.
 * @param {number} [props.duration=4000] - Auto-dismiss time in ms (0 = sticky).
 * @param {boolean} [props.visible=true] - Controls visibility.
 * @param {function} [props.onClose] - Callback when toast is dismissed.
 * @returns {React.ReactElement|null} The rendered toast component or null if not visible.
 *
 * @example
 * return (
 *   <SandToast variant="success" message="Operation successful!" duration={3000} />
 * )
 */
const SandToast = ({ className, variant = 'info', message, duration = 4000, visible = true, onClose, ...props }) => {
  const [show, setShow] = useState(visible);

  useEffect(() => { setShow(visible); }, [visible]);

  const handleClose = useCallback(() => {
    setShow(false);
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(handleClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, handleClose]);

  if (!show) return null;

  const iconMap = { info: 'info', success: 'check_circle', warning: 'warning', error: 'error' };
  const classes = [styles.toast, styles[variant], className || ''].filter(Boolean).join(' ');

  return (
    <div className={classes} role="alert" {...props}>
      <SandIcon name={iconMap[variant]} size={18} />
      <span className={styles.message}>{message}</span>
      <button className={styles.close} onClick={handleClose} aria-label="Dismiss">
        <SandIcon name="close" size={16} />
      </button>
    </div>
  );
};

SandToast.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

SandToast.displayName = 'SandToast';
export { SandToast };
export default SandToast;
