import { useCurrentItems, useFilteredItems } from "../../hooks/table-hooks";
import type { MagicProps } from "../../interfaces/magic-props";
import { useTableStore } from "../../store/table-store";
import { TableContent } from "./table-content";
import { TableHeader } from "./table-header";
import { TablePagination } from "./table-pagination";

import styles from './styles.module.css';
import classNames from "classnames";

interface TableProps {
  items: MagicProps[];
  itemsPerPage: number;
  loading: boolean;
}

export function Table({ items: allItems, itemsPerPage, loading }: TableProps) {
  const { search, currentPage } = useTableStore();

  const filteredItems = useFilteredItems(allItems, search);
  const currentItems = useCurrentItems(filteredItems, currentPage, itemsPerPage);

  return (
    <div className={classNames('container', styles.table)}>
      <TableHeader />
      <TableContent 
        items={currentItems} 
        loading={loading} 
      />
      <TablePagination
        items={filteredItems}
        itemsPerPage={itemsPerPage} 
      />
    </div>
  );
}