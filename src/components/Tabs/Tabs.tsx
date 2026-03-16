import { 
  useId, 
  useMemo, 
  useState, 
  useCallback,
  Children, 
  isValidElement, 
  createContext, 
  useContext, 
  type HTMLAttributes, 
  type ReactNode,
  type ButtonHTMLAttributes
} from 'react';
import { handleHorizontalArrowNavigation, cn } from '../utils';
import styles from './Tabs.module.scss';

export interface SandTabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
}

/**
 * SandTabItem component for declarative definition of tab items.
 * @deprecated Use Tabs.List, Tabs.Trigger and Tabs.Panel for better composition.
 */
export const SandTabItem = () => null;
SandTabItem.displayName = 'SandTabItem';

interface TabsContextValue {
  activeId: string | undefined;
  setActiveId: (id: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a SandTabs component');
  }
  return context;
}

export interface SandTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  /** Ordered list of tab items. Deprecated: use composition instead. */
  items?: SandTabItem[];
  /** The value of the tab that should be active by default. */
  defaultValue?: string;
  /** The value of the currently active tab (for controlled mode). */
  value?: string;
  /** Called when the active tab changes. */
  onChange?: (value: string) => void;
  children?: ReactNode;
}

export function SandTabs({ items = [], defaultValue, value, onChange, className, children, ...props }: SandTabsProps) {
  const generatedId = useId();
  
  const resolvedItems = useMemo(() => {
    const allItems = [...items];
    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type === SandTabItem) {
        allItems.push(child.props as SandTabItem);
      }
    });
    return allItems;
  }, [items, children]);

  const [activeIdState, setActiveIdState] = useState(defaultValue ?? resolvedItems[0]?.id);
  const activeId = value ?? activeIdState;

  const setActiveId = useCallback((id: string) => {
    setActiveIdState(id);
    onChange?.(id);
  }, [onChange]);

  const contextValue = useMemo(() => ({
    activeId,
    setActiveId,
    baseId: generatedId
  }), [activeId, setActiveId, generatedId]);

  const activeIndex = Math.max(resolvedItems.findIndex((item) => item.id === activeId), 0);
  
  const indicatorStyle = useMemo(
    () => ({
      '--sand-tabs-left': `calc(4px + ${activeIndex} * (100% - 8px) / ${Math.max(resolvedItems.length, 1)})`,
      '--sand-tabs-width': `calc((100% - 8px) / ${Math.max(resolvedItems.length, 1)})`,
    }),
    [activeIndex, resolvedItems.length],
  );

  const hasLegacyItems = resolvedItems.length > 0;

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn(styles.root, className)} {...props}>
        {hasLegacyItems ? (
          <>
            <div role="tablist" aria-label="Tabs" className={styles.list} style={indicatorStyle as React.CSSProperties}>
              <span aria-hidden="true" className={styles.indicator} />
              {resolvedItems.map((item, index) => {
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
                      handleHorizontalArrowNavigation(event, index, resolvedItems.length, (nextIndex) => setActiveId(resolvedItems[nextIndex].id))
                    }
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            {resolvedItems[activeIndex] && (
              <div
                id={`${generatedId}-panel-${resolvedItems[activeIndex].id}`}
                role="tabpanel"
                aria-labelledby={`${generatedId}-tab-${resolvedItems[activeIndex].id}`}
                className={styles.panel}
              >
                {resolvedItems[activeIndex].content}
              </div>
            )}
          </>
        ) : (
          children
        )}
      </div>
    </TabsContext.Provider>
  );
}

export const SandTabsList = ({ children, className, style, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div role="tablist" className={cn(styles.list, className)} style={style} {...props}>
      {children}
    </div>
  );
};
SandTabsList.displayName = 'SandTabs.List';

export interface SandTabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const SandTabsTrigger = ({ value, children, className, ...props }: SandTabsTriggerProps) => {
  const { activeId, setActiveId, baseId } = useTabsContext();
  const active = activeId === value;

  return (
    <button
      role="tab"
      type="button"
      id={`${baseId}-tab-${value}`}
      aria-selected={active}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={active ? 0 : -1}
      className={cn(styles.trigger, active && styles.active, className)}
      onClick={() => setActiveId(value)}
      {...props}
    >
      {children}
    </button>
  );
};
SandTabsTrigger.displayName = 'SandTabs.Trigger';

export interface SandTabsPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const SandTabsPanel = ({ value, children, className, ...props }: SandTabsPanelProps) => {
  const { activeId, baseId } = useTabsContext();
  const active = activeId === value;

  if (!active) return null;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      className={cn(styles.panel, className)}
      {...props}
    >
      {children}
    </div>
  );
};
SandTabsPanel.displayName = 'SandTabs.Panel';

SandTabs.List = SandTabsList;
SandTabs.Trigger = SandTabsTrigger;
SandTabs.Panel = SandTabsPanel;
SandTabs.Item = SandTabItem;
