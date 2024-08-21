import { useMemo } from 'react';
import type { MagicProps } from '../interfaces/magic-props';

export function useFilteredItems(data: MagicProps[], search: string) {
  return useMemo(() => {
    return data.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ) || [];
  }, [data, search]);
}

export function useCurrentItems(filteredItems: MagicProps[], currentPage: number, itemsPerPage: number) {
  return useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredItems, currentPage, itemsPerPage]);
}