import { forwardRef, useMemo, type ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.scss';
import { cn } from '../utils';

/**
 * @description Props for `SandButton`, the primary action primitive in the SandUI TypeScript UI Library.
 *
 * @example
 * ```tsx
 * <SandButton variant="primary" onClick={handlePublish}>
 *   Publish
 * </SandButton>
 * ```
 */
export interface SandButtonProps extends ComponentPropsWithoutRef<'button'> {
  /** Visual treatment used to communicate button priority or intent. */
  /** @default 'primary' */
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'failed';
}

/**
 * @description `SandButton` is an Accessible React Component for primary actions, secondary controls, and stateful action buttons.
 * It uses semantic button markup, forwards refs, and preserves standard button attributes for integration into product UIs and design systems.
 *
 * @example
 * ```tsx
 * <SandButton variant="success" type="submit">
 *   Save changes
 * </SandButton>
 * ```
 */
export const SandButton = forwardRef<HTMLButtonElement, SandButtonProps>(function SandButton(
  { variant = 'primary', className = '', type = 'button', ...props },
  ref,
) {
  const variantClass = useMemo(() => styles[`sand-btn-${variant}`], [variant]);

  return (
    <button
      ref={ref}
      className={cn(styles['sand-btn'], variantClass, className)}
      type={type}
      {...props}
    />
  );
});
SandButton.displayName = 'SandButton';
