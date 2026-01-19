import { useEffect, RefObject } from 'react';

export const useClickOutside = (
  targetRef: RefObject<HTMLElement | null>,
  excludeRef: RefObject<HTMLElement | null>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    const target = targetRef.current;

    if (!target) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!target?.contains(e.target as Node)) {
        if (excludeRef.current?.contains(e.target as Node)) return;
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [targetRef, excludeRef, onClickOutside]);
}
