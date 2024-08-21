import { Frown } from 'lucide-react';
import type { MagicProps } from '../../../interfaces/magic-props';
import { useNavigate } from 'react-router-dom';
import { useTableStore } from '../../../store/table-store';
import classNames from 'classnames';

import styles from './styles.module.css';

interface TableContentProps {
  items: MagicProps[];
  loading: boolean;
}

export function TableContent({ items, loading }: TableContentProps) {
  const { layout } = useTableStore();
  const navigate = useNavigate();

  const handleItemClick = (index: string) => {
    navigate(`/item/${index}`);
  };

  return (
    <div className={classNames(styles.tableContent, { [styles.grid]: layout })}>
      {items.length > 0 ? (
        items.map((magic) => (
          <div
            key={magic.index}
            onClick={() => handleItemClick(magic.index)}
            className={classNames(styles.tableContentItem, { [styles.gridItem]: layout })}
          >
            <h3>{magic.name}</h3>
            {!layout && <span>Magic Item</span>}
          </div>
        ))
      ) : (
        <div className={styles.tableContentItemEmpty}>
          {!loading && <Frown />}
          <span>{loading ? 'Loading...' : 'Ops... Nothing found for your search'}</span>
        </div>
      )}
    </div>
  );
}