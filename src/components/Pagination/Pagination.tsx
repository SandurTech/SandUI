import { forwardRef, useCallback, useMemo, type ComponentPropsWithoutRef, type KeyboardEvent } from 'react';
import styles from './Pagination.module.scss';
import { cn, handleHorizontalArrowNavigation } from '../utils';

export interface SandPaginationProps extends ComponentPropsWithoutRef<'nav'> {
  /** Currently active page number, starting at 1. */
  currentPage: number;
  /** Total number of available pages. */
  totalPages: number;
  /** Called whenever the user requests a different page. */
  onPageChange?: (page: number) => void;
}

export const SandPagination = forwardRef<HTMLElement, SandPaginationProps>(function SandPagination(
  { currentPage, totalPages, onPageChange, className = '', ...props },
  ref,
) {
  const pages = useMemo(() => Array.from({ length: totalPages }, (_, index) => index + 1), [totalPages]);
  const setPage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages || page === currentPage) {
        return;
      }

      onPageChange?.(page);
    },
    [currentPage, onPageChange, totalPages],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      handleHorizontalArrowNavigation(event, currentPage - 1, totalPages, (index) => setPage(index + 1));
    },
    [currentPage, setPage, totalPages],
  );

  return (
    <nav
      ref={ref}
      aria-label="Pagination"
      className={cn(styles['sand-pagination'], className)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <button
        type="button"
        className={styles['sand-page-btn']}
        disabled={currentPage === 1}
        aria-label="Previous page"
        onClick={() => setPage(currentPage - 1)}
      >
        <span className="material-symbols-rounded" aria-hidden="true">chevron_left</span>
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-current={page === currentPage ? 'page' : undefined}
          aria-label={`Page ${page}`}
          className={cn(styles['sand-page-btn'], page === currentPage && styles['sand-page-btn-active'])}
          onClick={() => setPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={styles['sand-page-btn']}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        onClick={() => setPage(currentPage + 1)}
      >
        <span className="material-symbols-rounded" aria-hidden="true">chevron_right</span>
      </button>
    </nav>
  );
});
SandPagination.displayName = 'SandPagination';
