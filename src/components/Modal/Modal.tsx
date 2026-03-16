import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type RefObject,
} from 'react';
import styles from './Modal.module.scss';
import { cn } from '../utils';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { SandButton } from '../Button/Button';
import { SandStack } from '../Stack/Stack';

interface SandModalContextValue {
  titleId: string;
  descriptionId: string;
}

const SandModalContext = createContext<SandModalContextValue | null>(null);

function useSandModalContext() {
  const context = useContext(SandModalContext);

  if (!context) {
    throw new Error('SandModal sub-components must be used within SandModal.');
  }

  return context;
}

export interface SandModalProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Controls whether the modal is rendered. */
  open?: boolean;
  /** Alias for open. */
  isOpen?: boolean;
  /** Called when the modal should close. */
  onClose: () => void;
  /** Optional title rendered inside the modal header. */
  title?: ReactNode;
  /** Optional description rendered under the title. */
  description?: ReactNode;
  /** Optional footer actions rendered in the modal footer region. */
  footer?: ReactNode;
  /** Determines whether clicking the backdrop closes the modal. */
  closeOnOverlay?: boolean;
  /** Element to focus when the modal opens. */
  initialFocusRef?: RefObject<HTMLElement | null>;
}

export type SandModalHeaderProps = ComponentPropsWithoutRef<'div'>;
export type SandModalBodyProps = ComponentPropsWithoutRef<'div'>;
export type SandModalFooterProps = ComponentPropsWithoutRef<'div'>;
export type SandModalTitleProps = ComponentPropsWithoutRef<'div'>;
export type SandModalDescriptionProps = ComponentPropsWithoutRef<'div'>;

const SandModalHeader = forwardRef<HTMLDivElement, SandModalHeaderProps>(function SandModalHeader(
  { className = '', ...props },
  ref,
) {
  return <div ref={ref} className={cn(styles['sand-modal-header'], className)} {...props} />;
});
SandModalHeader.displayName = 'SandModal.Header';

const SandModalBody = forwardRef<HTMLDivElement, SandModalBodyProps>(function SandModalBody(
  { className = '', ...props },
  ref,
) {
  return <div ref={ref} className={cn(styles['sand-modal-body'], className)} {...props} />;
});
SandModalBody.displayName = 'SandModal.Body';

const SandModalFooter = forwardRef<HTMLDivElement, SandModalFooterProps>(function SandModalFooter(
  { className = '', ...props },
  ref,
) {
  return <div ref={ref} className={cn(styles['sand-modal-footer'], className)} {...props} />;
});
SandModalFooter.displayName = 'SandModal.Footer';

const SandModalTitle = forwardRef<HTMLDivElement, SandModalTitleProps>(function SandModalTitle(
  { className = '', ...props },
  ref,
) {
  const { titleId } = useSandModalContext();
  return <div ref={ref} id={titleId} className={cn(styles['sand-modal-title'], className)} {...props} />;
});
SandModalTitle.displayName = 'SandModal.Title';

const SandModalDescription = forwardRef<HTMLDivElement, SandModalDescriptionProps>(function SandModalDescription(
  { className = '', ...props },
  ref,
) {
  const { descriptionId } = useSandModalContext();
  return <div ref={ref} id={descriptionId} className={cn(styles['sand-modal-description'], className)} {...props} />;
});
SandModalDescription.displayName = 'SandModal.Description';

const SandModalBase = forwardRef<HTMLDivElement, SandModalProps>(function SandModal(
  {
    open,
    isOpen,
    onClose,
    title,
    description,
    footer,
    closeOnOverlay = true,
    initialFocusRef,
    children,
    className = '',
    ...props
  },
  ref,
) {
  const resolvedOpen = open ?? isOpen ?? false;
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const modalContextValue = useMemo(
    () => ({ titleId, descriptionId }),
    [descriptionId, titleId],
  );

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      panelRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as any).current = node;
      }
    },
    [ref],
  );

  useFocusTrap(panelRef, { 
    enabled: resolvedOpen, 
    initialFocusRef: initialFocusRef || closeButtonRef 
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

  if (!resolvedOpen) {
    return null;
  }

  return (
    <div className={styles['sand-modal-root']} onKeyDown={handleKeyDown}>
      <button
        type="button"
        className={styles['sand-modal-backdrop']}
        aria-label="Close dialog"
        onClick={closeOnOverlay ? onClose : undefined}
      />
      <div
        ref={setRefs}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        className={cn(styles['sand-modal-panel'], className)}
        tabIndex={-1}
        {...props}
      >
        <SandModalContext.Provider value={modalContextValue}>
          {(title || description) && (
            <SandModalHeader>
              <div>
                {title && <SandModalTitle>{title}</SandModalTitle>}
                {description && <SandModalDescription>{description}</SandModalDescription>}
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles['sand-modal-close']}
                onClick={onClose}
                aria-label="Close dialog"
              >
                <span className="material-symbols-rounded" aria-hidden="true">close</span>
              </button>
            </SandModalHeader>
          )}
          <SandModalBody>{children}</SandModalBody>
          {footer && <SandModalFooter>{footer}</SandModalFooter>}
        </SandModalContext.Provider>
      </div>
    </div>
  );
});
SandModalBase.displayName = 'SandModal';

type SandModalComponent = typeof SandModalBase & {
  Header: typeof SandModalHeader;
  Body: typeof SandModalBody;
  Footer: typeof SandModalFooter;
  Title: typeof SandModalTitle;
  Description: typeof SandModalDescription;
};

export const SandModal = Object.assign(SandModalBase, {
  Header: SandModalHeader,
  Body: SandModalBody,
  Footer: SandModalFooter,
  Title: SandModalTitle,
  Description: SandModalDescription,
}) as SandModalComponent;

export interface SandDialogProps extends SandModalProps {
  /** Text for the confirmation button. */
  confirmLabel?: string;
  /** Text for the cancel button. */
  cancelLabel?: string;
  /** Called when the confirmation button is clicked. */
  onConfirm?: () => void;
  /** Visual variant of the confirmation button. */
  confirmVariant?: 'primary' | 'failed' | 'success';
}

/**
 * Specialized confirmation modal with built-in action buttons.
 */
export function SandDialog({ 
  onConfirm, 
  onClose, 
  confirmLabel = 'Confirm', 
  cancelLabel = 'Cancel', 
  confirmVariant = 'primary',
  footer,
  children,
  ...props 
}: SandDialogProps) {
  const dialogFooter = footer || (
    <SandStack direction="row" gap="sm" justify="flex-end">
      <SandButton variant="outline" onClick={onClose}>{cancelLabel}</SandButton>
      <SandButton variant={confirmVariant} onClick={onConfirm}>{confirmLabel}</SandButton>
    </SandStack>
  );

  return (
    <SandModal onClose={onClose} footer={dialogFooter} {...props}>
      {children}
    </SandModal>
  );
}
