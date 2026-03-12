import { forwardRef, useMemo, type ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.scss';
import { cn } from '../utils';

/**
 * Props for the SandButton component.
 */
export interface SandButtonProps extends ComponentPropsWithoutRef<'button'> {
  /** 
   * Visual treatment used to communicate button priority or intent.
   * - `primary`: Main call to action. High emphasis.
   * - `secondary`: Alternative action. Medium emphasis.
   * - `outline`: Low emphasis, tertiary action.
   * - `success`: Positive confirmation action.
   * - `failed`: Destructive or critical action.
   * 
   * @default 'primary' 
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'failed';
}

/**
 * @description
 * High-performance Accessible React Component for user actions and form submissions.
 * `SandButton` uses semantic `<button>` markup, forwards refs correctly, and supports 
 * native attributes like `disabled` and `type`. It includes built-in focus management 
 * and hover states tailored for modern SaaS applications.
 *
 * @example
 * ```tsx
 * import { SandButton } from '@sandurtech/sandui';
 * 
 * <SandButton variant="primary" onClick={handleSubmit}>
 *   Save Configuration
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
