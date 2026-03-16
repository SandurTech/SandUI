import { 
  forwardRef, 
  Children, 
  isValidElement, 
  useCallback, 
  useEffect, 
  useRef, 
  type ComponentPropsWithoutRef, 
  type ReactNode 
} from 'react';
import { SandIcon } from '../Icon/Icon';
import { cn } from '../utils';
import styles from './Navbar.module.scss';
import { useFocusTrap } from '../../hooks/useFocusTrap';

export interface SandNavbarItem {
  label: string;
  href: string;
  active?: boolean;
}

/**
 * SandNavbarItem component for declarative definition of navbar items.
 */
export const SandNavbarItem = () => null;
SandNavbarItem.displayName = 'SandNavbarItem';

export interface SandNavbarProps extends Omit<ComponentPropsWithoutRef<'nav'>, 'brand'> {
  brand?: ReactNode;
  items?: SandNavbarItem[];
  onMenuClick?: () => void;
}

export const SandNavbar = forwardRef<HTMLElement, SandNavbarProps>(function SandNavbar(
  { brand, items = [], onMenuClick, className, children, ...props },
  ref,
) {
  const resolvedItems = [...items];

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === SandNavbarItem) {
      resolvedItems.push(child.props as SandNavbarItem);
    }
  });

  return (
    <nav ref={ref} className={cn(styles.navbar, className)} {...props}>
      <div className={styles.container}>
        <div className={styles.brand}>{brand}</div>

        <div className={styles.links}>
          {resolvedItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(styles.link, item.active && styles.linkActive)}
            >
              {item.label}
            </a>
          ))}
          {Children.map(children, (child) => {
            if (isValidElement(child) && child.type === SandNavbarItem) return null;
            return child;
          })}
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
  open?: boolean;
  isOpen?: boolean;
  onClose: () => void;
  title?: ReactNode;
}

export const SandDrawer = forwardRef<HTMLDivElement, SandDrawerProps>(function SandDrawer(
  { open, isOpen, onClose, title, children, className, ...props },
  ref,
) {
  const resolvedOpen = open ?? isOpen ?? false;
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      (drawerRef as any).current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as any).current = node;
      }
    },
    [ref],
  );

  useFocusTrap(drawerRef, { 
    enabled: resolvedOpen,
    initialFocusRef: closeButtonRef
  });

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!resolvedOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [resolvedOpen]);

  return (
    <>
      <div
        className={cn(styles.overlay, resolvedOpen && styles.overlayVisible)}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={setRefs}
        className={cn(styles.drawer, resolvedOpen && styles.drawerOpen, className)}
        role="dialog"
        aria-modal="true"
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerTitle}>{title}</div>
          <button
            ref={closeButtonRef}
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
SandDrawer.displayName = 'SandDrawer';
