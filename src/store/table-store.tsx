import { create } from 'zustand';

interface TableState {
  search: string;
  layout: boolean;
  currentPage: number;
  setSearch: (search: string) => void;
  setLayout: (layout: boolean) => void;
  setCurrentPage: (currentPage: number) => void;
}

export const useTableStore = create<TableState>((set) => ({
  search: '',
  layout: false,
  currentPage: 1,
  setSearch: (search: string) => set({ search }),
  setLayout: (layout: boolean) => set({ layout }),
  setCurrentPage: (currentPage: number) => set({ currentPage }),
}));