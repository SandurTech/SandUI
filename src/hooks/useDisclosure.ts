import { useCallback, useState } from 'react';

export interface UseDisclosureProps {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onClose?(): void;
  onOpen?(): void;
}

/**
 * Custom hook to manage common open, close, or toggle scenarios.
 * Used for modals, drawers, tooltips, etc.
 */
export function useDisclosure(props: UseDisclosureProps = {}) {
  const { isOpen: isOpenProp, defaultIsOpen, onClose, onOpen } = props;
  const [isOpenState, setIsOpenState] = useState(defaultIsOpen || false);

  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? isOpenProp : isOpenState;

  const open = useCallback(() => {
    if (!isControlled) {
      setIsOpenState(true);
    }
    onOpen?.();
  }, [isControlled, onOpen]);

  const close = useCallback(() => {
    if (!isControlled) {
      setIsOpenState(false);
    }
    onClose?.();
  }, [isControlled, onClose]);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  return {
    isOpen,
    onOpen: open,
    onClose: close,
    onToggle: toggle,
    setIsOpen: setIsOpenState,
  };
}
