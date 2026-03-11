import React from 'react';
import styles from './Pagination.module.scss';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, className = '', ...props }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className={`${styles['sand-pagination']} ${className}`.trim()} {...props}>
      <button type="button" className={styles['sand-page-btn']} disabled={currentPage === 1} aria-label="Previous page">
        <span className="material-symbols-rounded" aria-hidden="true">chevron_left</span>
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-current={page === currentPage ? 'page' : undefined}
          className={`${styles['sand-page-btn']} ${page === currentPage ? styles['sand-page-btn-active'] : ''}`.trim()}
        >
          {page}
        </button>
      ))}
      <button type="button" className={styles['sand-page-btn']} disabled={currentPage === totalPages} aria-label="Next page">
        <span className="material-symbols-rounded" aria-hidden="true">chevron_right</span>
      </button>
    </nav>
  );
};
