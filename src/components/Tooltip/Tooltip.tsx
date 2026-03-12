import { cloneElement, isValidElement, useId, useState, type FocusEvent, type MouseEvent, type ReactElement, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Tooltip.module.scss';

interface SandTooltipChildProps {
  'aria-describedby'?: string;
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLElement>) => void;
  onFocus?: (event: FocusEvent<HTMLElement>) => void;
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
}

export interface SandTooltipProps {
  content: ReactNode;
  children: ReactElement<SandTooltipChildProps>;
}

export function SandTooltip({ content, children }: SandTooltipProps) {
  const id = useId();
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  if (!isValidElement(children)) {
    return null;
  }

  const open = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 10,
      left: rect.left + rect.width / 2,
    });
  };

  const trigger = cloneElement(children, {
    'aria-describedby': id,
    onMouseEnter: (event: MouseEvent<HTMLElement>) => {
      open(event.currentTarget);
      children.props.onMouseEnter?.(event);
    },
    onMouseLeave: (event: MouseEvent<HTMLElement>) => {
      setPosition(null);
      children.props.onMouseLeave?.(event);
    },
    onFocus: (event: FocusEvent<HTMLElement>) => {
      open(event.currentTarget);
      children.props.onFocus?.(event);
    },
    onBlur: (event: FocusEvent<HTMLElement>) => {
      setPosition(null);
      children.props.onBlur?.(event);
    },
  });

  return (
    <>
      <span className={styles.trigger}>{trigger}</span>
      {position && typeof document !== 'undefined'
        ? createPortal(
            <div
              id={id}
              role="tooltip"
              className={styles.content}
              style={{ top: position.top, left: position.left, transform: 'translateX(-50%)' }}
            >
              {content}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
