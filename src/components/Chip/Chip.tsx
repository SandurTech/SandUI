import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../utils';
import { SandIcon } from '../Icon/Icon';
import styles from './Chip.module.scss';

export interface SandChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual variant of the chip. */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  /** Optional icon to display before the label. */
  icon?: string;
  /** Optional click handler for a close/remove button. */
  onClose?: () => void;
  /** Whether the chip is interactive (clickable). */
  clickable?: boolean;
}

/**
 * Small, interactive element representing an attribute, status, or tag.
 */
export const SandChip = forwardRef<HTMLSpanElement, SandChipProps>(function SandChip(
  { variant = 'primary', icon, onClose, clickable, children, className = '', ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(
        styles.chip,
        styles[`variant-${variant}`],
        clickable && styles.clickable,
        className
      )}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {icon && (
        <SandIcon icon={icon} size={16} className={styles.startIcon} />
      )}
      <span className={styles.label}>{children}</span>
      {onClose && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Remove"
        >
          <SandIcon icon="close" size={14} />
        </button>
      )}
    </span>
  );
});

SandChip.displayName = 'SandChip';

/**
 * SandTag is an alias for SandChip.
 */
export const SandTag = SandChip;
