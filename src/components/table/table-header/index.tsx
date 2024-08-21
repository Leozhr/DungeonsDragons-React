import { Search, LayoutGrid, StretchHorizontal } from 'lucide-react';
import { useTableStore } from '../../../store/table-store';
import classNames from 'classnames';

import styles from './styles.module.css';

export function TableHeader() {
  const { search, setSearch, layout, setLayout } = useTableStore();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLayoutGridClick = () => {
    setLayout(true);
  };

  const handleStretchHorizontalClick = () => {
    setLayout(false);
  };

  return (
    <div className={styles.tableNav}>
      <div className={styles.tableNavSearch}>
        <Search className='icon' />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className={styles.tableNavFilter}>
        <LayoutGrid
          className={classNames('icon', { [styles.active]: layout })}
          onClick={handleLayoutGridClick}
        />
        <StretchHorizontal
          className={classNames('icon', { [styles.active]: !layout })}
          onClick={handleStretchHorizontalClick}
        />
      </div>
    </div>
  );
}