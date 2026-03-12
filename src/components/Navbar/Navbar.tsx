import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { SandIcon } from '../Icon/Icon';
import { cn } from '../utils';
import styles from './Navbar.module.scss';

export interface SandNavbarItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface SandNavbarProps extends ComponentPropsWithoutRef<'nav'> {
  brand?: ReactNode;
  items?: SandNavbarItem[];
  onMenuClick?: () => void;
}

export const SandNavbar = forwardRef<HTMLElement, SandNavbarProps>(function SandNavbar(
  { brand, items = [], onMenuClick, className, children, ...props },
  ref,
) {
  return (
    <nav ref={ref} className={cn(styles.navbar, className)} {...props}>
      <div className={styles.container}>
        <div className={styles.brand}>{brand}</div>

        <div className={styles.links}>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(styles.link, item.active && styles.linkActive)}
            >
              {item.label}
            </a>
          ))}
          {children}
        </div>

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <SandIcon icon="menu" size={24} />
        </button>
      </div>
    </nav>
  );
});

export interface SandDrawerProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
}

export const SandDrawer = forwardRef<HTMLDivElement, SandDrawerProps>(function SandDrawer(
  { open, onClose, title, children, className, ...props },
  ref,
) {
  return (
    <>
      <div
        className={cn(styles.overlay, open && styles.overlayVisible)}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={ref}
        className={cn(styles.drawer, open && styles.drawerOpen, className)}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerTitle}>{title}</div>
          <button
            type="button"
            className={styles.drawerClose}
            onClick={onClose}
            aria-label="Close menu"
          >
            <SandIcon icon="close" size={24} />
          </button>
        </div>
        <div className={styles.drawerContent}>{children}</div>
      </div>
    </>
  );
});
