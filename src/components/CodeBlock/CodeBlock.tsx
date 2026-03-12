import {
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';
import styles from './CodeBlock.module.scss';
import { cn, handleHorizontalArrowNavigation } from '../utils';

export interface SandCodeBlockProps extends ComponentPropsWithoutRef<'pre'> {
  /** Source string rendered inside the code block. */
  code: string;
}

export const SandCodeBlock = forwardRef<HTMLPreElement, SandCodeBlockProps>(function SandCodeBlock(
  { code, className = '', ...props },
  ref,
) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <pre ref={ref} className={cn(styles['sand-code-block'], className)} {...props}>
      <button
        className={styles['sand-copy-btn']}
        onClick={handleCopy}
        type="button"
        aria-label={copied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <code>{code}</code>
    </pre>
  );
});
SandCodeBlock.displayName = 'SandCodeBlock';

export interface SandCodeTabsProps {
  /** Tab descriptors rendered in order within the tab list. */
  tabs: { name: string; code: string }[];
  /** Initially selected tab index. */
  defaultTab?: number;
  className?: string;
  /** Called whenever a new tab is selected. */
  onTabChange?: (index: number) => void;
}

export const SandCodeTabs = forwardRef<HTMLDivElement, SandCodeTabsProps>(function SandCodeTabs(
  { tabs, defaultTab = 0, className = '', onTabChange },
  ref,
) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const instanceId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectTab = useCallback(
    (index: number) => {
      setActiveTab(index);
      onTabChange?.(index);
      tabRefs.current[index]?.focus();
    },
    [onTabChange],
  );

  const activeCode = useMemo(() => tabs[activeTab]?.code ?? '', [activeTab, tabs]);

  return (
    <div ref={ref} className={cn(styles['sand-code-tabs'], className)}>
      <div className={styles['sand-tab-headers']} role="tablist" aria-label="Code examples">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            className={cn(styles['sand-tab-btn'], activeTab === index && styles.active)}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`${instanceId}-code-panel-${index}`}
            id={`${instanceId}-code-tab-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => selectTab(index)}
            onKeyDown={(event) =>
              handleHorizontalArrowNavigation(event, index, tabs.length, (nextIndex) => selectTab(nextIndex))
            }
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${instanceId}-code-panel-${activeTab}`}
        aria-labelledby={`${instanceId}-code-tab-${activeTab}`}
      >
        <SandCodeBlock code={activeCode} />
      </div>
    </div>
  );
});
SandCodeTabs.displayName = 'SandCodeTabs';
