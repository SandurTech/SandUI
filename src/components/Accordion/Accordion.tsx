import { forwardRef, useState, useId, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { SandIcon } from '../Icon/Icon';
import { cn } from '../utils';
import styles from './Accordion.module.scss';

/**
 * Represents a single item within the SandAccordion component.
 */
export interface SandAccordionItem {
  /** 
   * Unique identifier for the item. Used for tracking open state.
   * @example "section-1"
   */
  id: string;
  /** 
   * Header title text or node displayed on the trigger.
   * @example "Advanced Settings"
   */
  title: ReactNode;
  /** 
   * Optional subtitle or description text displayed below the title.
   * @example "Configure webhook endpoints"
   */
  description?: string;
  /** 
   * Optional Material Symbol icon name to display before the title.
   * @example "settings"
   */
  icon?: string;
  /** 
   * Expandable panel content that is revealed when the item is opened.
   */
  content: ReactNode;
}

/**
 * Props for the SandAccordion component.
 */
export interface SandAccordionProps extends ComponentPropsWithoutRef<'div'> {
  /** 
   * Array of accordion item descriptors to render.
   */
  items: SandAccordionItem[];
  /** 
   * The ID of the item that should be initially expanded.
   * @default undefined
   */
  defaultOpen?: string;
  /** 
   * Whether to allow multiple items to be open concurrently.
   * @default false
   */
  allowMultiple?: boolean;
}

/**
 * @description
 * High-performance Accessible React Component for rendering collapsible content sections.
 * The `SandAccordion` supports progressive disclosure of information, semantic HTML, and WAI-ARIA 
 * compliant keyboard navigation.
 * 
 * @example
 * ```tsx
 * <SandAccordion 
 *   defaultOpen="1"
 *   items={[
 *     { id: '1', title: 'Settings', description: 'App config', icon: 'settings', content: <SettingsForm /> }
 *   ]} 
 * />
 * ```
 */
export const SandAccordion = forwardRef<HTMLDivElement, SandAccordionProps>(function SandAccordion(
  { items, defaultOpen, className, ...props },
  ref,
) {
  const [openItem, setOpenItem] = useState<string | undefined>(defaultOpen);
  const baseId = useId();

  return (
    <div ref={ref} className={cn(styles.accordion, className)} {...props}>
      {items.map((item) => {
        const isOpen = openItem === item.id;
        const triggerId = `${baseId}-trigger-${item.id}`;
        const contentId = `${baseId}-content-${item.id}`;

        return (
          <div key={item.id} className={styles.item} data-state={isOpen ? 'open' : 'closed'}>
            <button
              id={triggerId}
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenItem((current) => (current === item.id ? undefined : item.id))}
            >
              <div className={styles.triggerMain}>
                {item.icon && (
                  <SandIcon icon={item.icon} className={styles.itemIcon} size={24} aria-hidden="true" />
                )}
                <div className={styles.triggerText}>
                  <span className={styles.title}>{item.title}</span>
                  {item.description && (
                    <span className={styles.description}>{item.description}</span>
                  )}
                </div>
              </div>
              <SandIcon
                icon="expand_more"
                className={cn(styles.chevron, isOpen && styles.chevronOpen)}
                size={20}
                aria-hidden="true"
              />
            </button>
            <div 
              id={contentId}
              aria-labelledby={triggerId}
              className={cn(styles.content, isOpen && styles.contentOpen)} 
              role="region"
            >
              <div className={styles.contentInner}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

SandAccordion.displayName = 'SandAccordion';
