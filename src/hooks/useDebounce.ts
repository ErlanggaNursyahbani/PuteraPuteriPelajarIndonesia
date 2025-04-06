
import { useState, useEffect } from 'react';

/**
 * Custom hook untuk debounce nilai
 * Berguna untuk mengurangi jumlah request API atau operasi mahal lainnya
 * 
 * @param value - Nilai yang akan di-debounce
 * @param delay - Waktu delay dalam milidetik
 * @returns Nilai yang sudah di-debounce
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Atur timer untuk menunggu sebelum memperbarui nilai yang di-debounce
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Bersihkan timer jika nilai berubah (atau komponen unmount)
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
