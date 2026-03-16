import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../utils';
import styles from './Avatar.module.scss';

export interface SandAvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** Image source URL. */
  src?: string;
  /** Fallback initials if image is missing or fails. */
  initials?: string;
  /** Name for alt text and initials extraction. */
  name?: string;
  /** Size of the avatar. */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Shape of the avatar. */
  variant?: 'circle' | 'rounded' | 'square';
}

/**
 * Visual representation of a user or entity.
 */
export const SandAvatar = forwardRef<HTMLDivElement, SandAvatarProps>(function SandAvatar(
  { src, initials, name, size = 'md', variant = 'circle', className = '', style, ...props },
  ref,
) {
  const sizeStyle = typeof size === 'number' ? {
    width: size,
    height: size,
    fontSize: size * 0.4
  } : undefined;

  const resolvedInitials = initials ?? name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div
      ref={ref}
      className={cn(
        styles.avatar,
        typeof size === 'string' && styles[`size-${size}`],
        styles[`variant-${variant}`],
        className
      )}
      style={{ ...sizeStyle, ...style }}
      {...props}
    >
      {src ? (
        <img src={src} alt={name} className={styles.image} />
      ) : (
        <span className={styles.initials}>{resolvedInitials}</span>
      )}
    </div>
  );
});

SandAvatar.displayName = 'SandAvatar';

export interface SandAvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show before truncating. */
  max?: number;
  /** Size of all avatars in the group. */
  size?: SandAvatarProps['size'];
}

/**
 * Stacked collection of avatars.
 */
export const SandAvatarGroup = forwardRef<HTMLDivElement, SandAvatarGroupProps>(function SandAvatarGroup(
  { children, max, size = 'md', className = '', ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn(styles.group, className)} {...props}>
      {children}
    </div>
  );
});

SandAvatarGroup.displayName = 'SandAvatarGroup';
