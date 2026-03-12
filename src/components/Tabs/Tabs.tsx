import { useId, useMemo, useState, type HTMLAttributes, type ReactNode } from 'react';
import { handleHorizontalArrowNavigation, cn } from '../utils';
import styles from './Tabs.module.scss';

export interface SandTabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
}

export interface SandTabsProps extends HTMLAttributes<HTMLDivElement> {
  items: SandTabItem[];
  defaultValue?: string;
}

export function SandTabs({ items, defaultValue, className, ...props }: SandTabsProps) {
  const generatedId = useId();
  const [activeId, setActiveId] = useState(defaultValue ?? items[0]?.id);
  const activeIndex = Math.max(items.findIndex((item) => item.id === activeId), 0);
  const activeItem = items[activeIndex];
  const indicatorStyle = useMemo(
    () => ({
      '--sand-tabs-left': `calc(4px + ${activeIndex} * (100% - 8px) / ${Math.max(items.length, 1)})`,
      '--sand-tabs-width': `calc((100% - 8px) / ${Math.max(items.length, 1)})`,
    }),
    [activeIndex, items.length],
  );

  return (
    <div className={cn(styles.root, className)} {...props}>
      <div role="tablist" aria-label="Tabs" className={styles.list} style={indicatorStyle as React.CSSProperties}>
        <span aria-hidden="true" className={styles.indicator} />
        {items.map((item, index) => {
          const tabId = `${generatedId}-tab-${item.id}`;
          const panelId = `${generatedId}-panel-${item.id}`;
          const active = item.id === activeId;

          return (
            <button
              key={item.id}
              id={tabId}
              role="tab"
              type="button"
              tabIndex={active ? 0 : -1}
              aria-selected={active}
              aria-controls={panelId}
              className={cn(styles.trigger, active && styles.active)}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) =>
                handleHorizontalArrowNavigation(event, index, items.length, (nextIndex) => setActiveId(items[nextIndex].id))
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {activeItem && (
        <div
          id={`${generatedId}-panel-${activeItem.id}`}
          role="tabpanel"
          aria-labelledby={`${generatedId}-tab-${activeItem.id}`}
          className={styles.panel}
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
}
