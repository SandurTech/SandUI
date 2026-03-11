import React, { useId, useState } from 'react';
import styles from './CodeBlock.module.scss';

export interface CodeBlockProps {
  code: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <pre className={`${styles['sand-code-block']} ${className}`.trim()}>
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
};

export interface CodeTabsProps {
  tabs: { name: string; code: string }[];
  className?: string;
}

export const CodeTabs: React.FC<CodeTabsProps> = ({ tabs, className = '' }) => {
  const [activeTab, setActiveTab] = useState(0);
  const instanceId = useId();

  return (
    <div className={`${styles['sand-code-tabs']} ${className}`.trim()}>
      <div className={styles['sand-tab-headers']} role="tablist" aria-label="Code examples">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles['sand-tab-btn']} ${activeTab === index ? styles.active : ''}`}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`${instanceId}-code-panel-${index}`}
            id={`${instanceId}-code-tab-${index}`}
            onClick={() => setActiveTab(index)}
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
        <CodeBlock code={tabs[activeTab].code} />
      </div>
    </div>
  );
};
