import { useState } from 'react';

export const usePagination = (itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const startIndex = currentPage * itemsPerPage;

  return { currentPage, handlePageChange, startIndex };
};
