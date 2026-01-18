import { useMemo } from 'react';

type ItemWithMetadata<T> = {
  metadata: T
  slug: string
  content: string
}

export const useCurrentItems = <T>(
  items: ItemWithMetadata<T>[],
  startIndex: number,
  itemsPerPage: number
): ItemWithMetadata<T>[] => {
  return useMemo(() => {
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, startIndex, itemsPerPage]);
};
