import React from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { navItems } from '../../app/navigation';
import { SandIcon } from '../../components';
import styles from './DocNavigation.module.scss';

export const DocNavigation: React.FC = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const currentIndex = navItems.findIndex((item) => item.to === pathname);

  if (currentIndex === -1) return null;

  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  if (!prevItem && !nextItem) return null;

  return (
    <nav className={styles.root} aria-label="Documentation navigation">
      {prevItem && (
        <Link to={prevItem.to} className={`${styles.link} ${styles.prev}`}>
          <span className={styles.label}>Previous</span>
          <div className={styles.title}>
            <span className={`${styles.arrowIcon} material-symbols-rounded`} aria-hidden="true">arrow_back</span>
            <SandIcon icon={prevItem.icon} className={styles.itemIcon} size={20} />
            <span className={styles.titleText}>{prevItem.label}</span>
          </div>
          <p className={styles.description}>{prevItem.description}</p>
        </Link>
      )}

      {nextItem && (
        <Link to={nextItem.to} className={`${styles.link} ${styles.next}`}>
          <span className={styles.label}>Next</span>
          <div className={styles.title}>
            <span className={styles.titleText}>{nextItem.label}</span>
            <SandIcon icon={nextItem.icon} className={styles.itemIcon} size={20} />
            <span className={`${styles.arrowIcon} material-symbols-rounded`} aria-hidden="true">arrow_forward</span>
          </div>
          <p className={styles.description}>{nextItem.description}</p>
        </Link>
      )}
    </nav>
  );
};
