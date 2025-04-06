
import { useState, useEffect } from 'react';

/**
 * Komponen LazyImage untuk memuat gambar secara lazy
 * dengan loading state dan fallback
 * 
 * @param {string} src - URL gambar
 * @param {string} alt - Teks alternatif untuk gambar
 * @param {string} className - Kelas tambahan untuk gambar
 * @param {string} placeholderSrc - URL placeholder saat gambar belum dimuat
 */
const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholderSrc = '',
  objectFit = 'cover',
  quality = 'auto',
  width,
  height,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Menggunakan Intersection Observer untuk lazy loading yang lebih efisien
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const elementId = `lazy-img-${src?.split('/').pop()?.replace(/[^a-zA-Z0-9]/g, '') || Math.random().toString(36).substring(2, 8)}`;
    const currentElement = document.getElementById(elementId);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [src]);

  useEffect(() => {
    // If no image source provided, don't try to load anything
    if (!src) {
      setHasError(true);
      setImageLoaded(true);
      return;
    }
    
    // Hanya muat gambar jika dalam viewport
    if (!isInView) return;
    
    // Reset status loading jika sumber gambar berubah
    if (src !== imageSrc) {
      setImageLoaded(false);
      setHasError(false);
      setImageSrc(placeholderSrc);
    }
    
    // Membuat objek Image baru untuk memuat gambar
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      // Saat gambar telah dimuat
      setTimeout(() => {
        setImageSrc(src);
        setImageLoaded(true);
      }, 200); // Tambahkan sedikit delay untuk transisi yang lebih halus
    };
    
    img.onerror = () => {
      // Jika terjadi error, tetap gunakan placeholder
      console.warn(`Failed to load image: ${src}`);
      setHasError(true);
      setImageLoaded(true);
    };
    
    return () => {
      // Cleanup
      img.onload = null;
      img.onerror = null;
    };
  }, [src, placeholderSrc, imageSrc, isInView]);

  // Generate a unique ID based on the src or use a random one
  const elementId = `lazy-img-${src?.split('/').pop()?.replace(/[^a-zA-Z0-9]/g, '') || Math.random().toString(36).substring(2, 8)}`;

  return (
    <div 
      id={elementId}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder blur-up */}
      {!imageLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            transform: 'scale(1.05)'
          }}
        />
      )}

      <img
        src={hasError ? placeholderSrc || '/placeholder.svg' : imageSrc}
        alt={alt}
        className={`w-full h-full transition-all duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectFit }}
        loading="lazy"
        {...props}
      />
      
      {/* Loading indicator */}
      {!imageLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-20">
          <div className="w-8 h-8 border-4 border-pppi-blue/30 border-t-pppi-blue rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
