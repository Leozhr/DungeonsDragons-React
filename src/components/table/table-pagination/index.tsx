import type { MagicProps } from '../../../interfaces/magic-props';
import { useTableStore } from '../../../store/table-store';
import { Button } from '../../button';
import classNames from 'classnames';

import styles from './styles.module.css';
import { useEffect } from 'react';

interface PaginationProps {
  items: MagicProps[];
  itemsPerPage: number;
}

export function TablePagination({ items, itemsPerPage }: PaginationProps) {
  const { currentPage, setCurrentPage, search } = useTableStore();

  useEffect(() => {
    setCurrentPage(1);
  }, [search, setCurrentPage]);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const endItems = currentPage * itemsPerPage >= items.length

  return (
    <div className={styles.tablePagination}>
      <Button 
        onClick={handlePrevClick} 
        disabled={currentPage === 1}
        className={classNames(styles.button, { [styles.disabled]: currentPage === 1 })}
      >
        Prev
      </Button>
      <span>Page: {currentPage}</span>
      <Button 
        onClick={handleNextClick} 
        disabled={endItems}
        className={styles.button}
      >
        Next
      </Button>
    </div>
  );
}