
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

/**
 * Hook untuk inisialisasi animasi
 * Menggunakan AOS (Animate On Scroll) untuk animasi saat scroll
 * dan Animate.css untuk animasi lainnya
 */
const useAnimations = () => {
  useEffect(() => {
    // Inisialisasi AOS dengan delay dan durasi yang kecil untuk performa yang lebih baik
    AOS.init({
      duration: 1000,            // Durasi animasi dalam ms
      once: true,               // Animasi hanya dijalankan sekali
      mirror: false,            // Tidak mengulangi animasi saat scroll ke atas
      offset: 50,               // Offset (dalam px) dari trigger point
      easing: 'ease-out-cubic', // Easing function
      delay: 100,               // Delay default       // Nonaktifkan pada perangkat mobile untuk performa
      startEvent: 'DOMContentLoaded', // Mulai inisialisasi setelah DOM selesai loading
    });

    // Refresh AOS jika ada perubahan DOM yang signifikan
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);
};

export { useAnimations };
