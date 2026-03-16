import { useCallback, useEffect, useRef, type RefObject } from 'react';
import { getFocusableElements } from '../components/utils';

export interface UseFocusTrapOptions {
  enabled: boolean;
  initialFocusRef?: RefObject<HTMLElement | null>;
}

/**
 * Custom hook to trap focus within a container element.
 * Useful for modals, drawers, and other overlay components.
 */
export function useFocusTrap(containerRef: RefObject<HTMLElement | null>, options: UseFocusTrapOptions) {
  const { enabled, initialFocusRef } = options;
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled || !containerRef.current || event.key !== 'Tab') {
        return;
      }

      const focusableElements = getFocusableElements(containerRef.current);
      if (focusableElements.length === 0) {
        event.preventDefault();
        containerRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    },
    [enabled, containerRef],
  );

  useEffect(() => {
    if (!enabled) {
      if (lastActiveElementRef.current) {
        lastActiveElementRef.current.focus();
        lastActiveElementRef.current = null;
      }
      return;
    }

    lastActiveElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const focusInitial = () => {
      const focusTarget = initialFocusRef?.current || containerRef.current;
      if (focusTarget) {
        focusTarget.focus();
      }
    };

    // Use a small delay to ensure the DOM is ready for focus
    const timer = setTimeout(focusInitial, 16);

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [enabled, handleKeyDown, initialFocusRef, containerRef]);
}
