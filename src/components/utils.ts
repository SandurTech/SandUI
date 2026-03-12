import type { KeyboardEvent as ReactKeyboardEvent } from 'react';

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(','),
    ),
  ).filter((element) => !element.hasAttribute('disabled') && !element.getAttribute('aria-hidden'));
}

export function handleHorizontalArrowNavigation(
  event: ReactKeyboardEvent<HTMLElement>,
  currentIndex: number,
  itemCount: number,
  onNavigate: (index: number) => void,
) {
  if (itemCount === 0) {
    return;
  }

  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault();
      onNavigate((currentIndex + 1) % itemCount);
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault();
      onNavigate((currentIndex - 1 + itemCount) % itemCount);
      break;
    case 'Home':
      event.preventDefault();
      onNavigate(0);
      break;
    case 'End':
      event.preventDefault();
      onNavigate(itemCount - 1);
      break;
    default:
      break;
  }
}
