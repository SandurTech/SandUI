import { 
  forwardRef, 
  useId, 
  useRef, 
  useEffect,
  createContext,
  useContext,
  useMemo,
  type HTMLAttributes, 
  type ReactNode,
  type ReactElement,
  cloneElement,
  isValidElement
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils';
import { useDisclosure } from '../../hooks/useDisclosure';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import styles from './Popover.module.scss';

interface PopoverContextValue {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  popoverId: string;
}

const PopoverContext = createContext<PopoverContextValue | null>(null);

const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error('Popover components must be used within SandPopover');
  return context;
};

export interface SandPopoverProps {
  children: ReactNode;
  /** Initially open state. */
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  /** Called when open state changes. */
  onOpenChange?: (open: boolean) => void;
}

/**
 * An anchored, non-modal overlay that displays content when a trigger is clicked.
 */
export function SandPopover({ children, defaultOpen, open: openProp, onOpenChange }: SandPopoverProps) {
  const popoverId = useId();
  const triggerRef = useRef<HTMLElement>(null);
  
  const { isOpen, onClose, onToggle } = useDisclosure({
    isOpen: openProp,
    defaultIsOpen: defaultOpen,
    onClose: () => onOpenChange?.(false),
    onOpen: () => onOpenChange?.(true),
  });

  const contextValue = useMemo(() => ({
    isOpen,
    onClose,
    onToggle,
    triggerRef,
    popoverId
  }), [isOpen, onClose, onToggle, popoverId]);

  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  );
}

export interface SandPopoverTriggerProps {
  children: ReactElement<any>;
}

export function SandPopoverTrigger({ children }: SandPopoverTriggerProps) {
  const { onToggle, isOpen, triggerRef, popoverId } = usePopoverContext();

  if (!isValidElement(children)) return children;

  return cloneElement(children as ReactElement, {
    ref: triggerRef as React.Ref<any>,
    onClick: (e: React.MouseEvent) => {
      (children.props as any).onClick?.(e);
      onToggle();
    },
    'aria-haspopup': 'dialog',
    'aria-expanded': isOpen,
    'aria-controls': popoverId,
  });
}

export interface SandPopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Width of the popover content. */
  width?: number | string;
}

export const SandPopoverContent = forwardRef<HTMLDivElement, SandPopoverContentProps>(function SandPopoverContent(
  { children, width, className = '', style, ...props },
  ref,
) {
  const { isOpen, onClose, triggerRef, popoverId } = usePopoverContext();
  const contentRef = useRef<HTMLDivElement>(null);

  useFocusTrap(contentRef, { enabled: isOpen });

  // Close on click outside or Escape
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEvents = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent && event.key === 'Escape') {
        onClose();
        triggerRef.current?.focus();
      }
      if (event instanceof MouseEvent) {
        if (
          contentRef.current && !contentRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      }
    };

    document.addEventListener('mousedown', handleEvents);
    document.addEventListener('keydown', handleEvents);
    return () => {
      document.removeEventListener('mousedown', handleEvents);
      document.removeEventListener('keydown', handleEvents);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={(node) => {
        (contentRef as any).current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as any).current = node;
      }}
      id={popoverId}
      role="dialog"
      className={cn(styles.content, className)}
      style={{
        width,
        ...style
      }}
      {...props}
    >
      {children}
    </div>,
    document.body
  );
});

SandPopover.Trigger = SandPopoverTrigger;
SandPopover.Content = SandPopoverContent;
SandPopover.displayName = 'SandPopover';
