
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that scrolls to the top of the page when the route changes
 * This ensures users always start at the top of the new page
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page with a smooth animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    
    // Untuk memastikan scroll to top benar-benar terjadi, bahkan jika smooth scroll tidak didukung
    setTimeout(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        window.scrollTo(0, 0);
      }
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
