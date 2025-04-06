import { useState, useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { ChevronUp, ChevronDown, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"; // Pastikan path ini benar
import { useAnimations } from "@/hooks/useAnimations"; // Pastikan path ini benar
import Footer from "@/components/layout/Footer"; // Pastikan path ini benar

// Helper function untuk kelas link navigasi desktop - DIMODIFIKASI
const getNavLinkClasses = (path, currentPath, scrolled) => {
  // Ditambahkan 'relative' untuk potensi styling di masa depan dan 'pb-1' untuk ruang garis bawah
  // Dihapus rounded-md agar border bawah bisa lurus (atau gunakan rounded-t-md jika perlu)
  const baseClasses = "relative px-3 pt-2 pb-1 text-md font-medium transition-all duration-300";
  let textClasses = "";
  let borderClasses = ""; // Kelas untuk border bawah aktif
  let hoverClasses = ""; // Kelas untuk efek hover (dipisah agar tidak bentrok dengan active state)

  if (scrolled) {
    // State TERSCROLL (Background Biru Transparan)
    textClasses = "text-white"; // Teks dasar putih
    hoverClasses = "hover:text-blue-200"; // Efek hover teks untuk non-aktif

    if (currentPath === path) {
      // Link Aktif saat di-scroll
      textClasses = "text-white font-semibold"; // Tetap putih dan tebal
      borderClasses = "border-b-2 border-white";  // Garis bawah putih
      hoverClasses = ""; // Tidak perlu efek hover tambahan pada link aktif
    }
  } else {
    // State AWAL (Background Transparan)
    textClasses = "text-gray-800"; // Teks dasar gelap
    hoverClasses = "hover:text-pppi-blue"; // Efek hover teks untuk non-aktif

    if (currentPath === path) {
      // Link Aktif saat tidak di-scroll
      textClasses = "text-pppi-blue font-semibold"; // Teks pppi-blue dan tebal
      borderClasses = "border-b-2 border-pppi-blue"; // Garis bawah pppi-blue
      hoverClasses = ""; // Tidak perlu efek hover tambahan pada link aktif
    }
  }

  // Gabungkan semua kelas
  return `${baseClasses} ${textClasses} ${hoverClasses} ${borderClasses}`;
};


const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Initialize animations
  useAnimations();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-pppi-lightgray">
      {/* Header/Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate__animated animate__fadeInDown ${
          scrolled
            ? "bg-pppi-blue/85 backdrop-blur-sm shadow-md py-3" // Warna pppi-blue saat scroll
            : "bg-transparent py-5" // Transparan saat awal
        }`}
      >
        <div className="container mx-auto px-4 mt-[-10px] flex justify-between items-center">
          {/* Logo */}
          <Link to="/home" className="flex items-center">
            <img
              src="/images/logo/blacklogo.png"
              alt="Logo"
              className="w-[100px] sm:w-[120px] md:w-[130px] mx-auto transition-filter duration-300 pt-3"
              style={scrolled ? { filter: 'brightness(0) invert(1)' } : {}}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Nav Item: Beranda */}
                <NavigationMenuItem>
                  <Link
                    to="/home"
                    className={getNavLinkClasses("/home", location.pathname, scrolled)}
                  >
                    Beranda
                  </Link>
                </NavigationMenuItem>

                {/* Nav Item: Tentang Kami (Dropdown) */}
                <NavigationMenuItem>
                   {/* Trigger TIDAK diubah, masih pakai style lama. Ubah jika perlu efek underline juga */}
                  <NavigationMenuTrigger
                    className={`px-5 py-2 rounded-md text-md font-medium transition-all duration-300 bg-transparent focus:outline-none ${
                      scrolled
                        ? 'text-white hover:text-blue-200 hover:bg-blue-600/50 data-[active]:bg-blue-800/60 data-[state=open]:bg-blue-800/60'
                        : 'text-gray-800 hover:text-pppi-blue data-[active]:text-pppi-blue data-[state=open]:text-pppi-blue'
                    }`}
                  >
                    Tentang Kami
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-2 bg-white shadow-md rounded-md">
                      <li><NavigationMenuLink asChild><Link to="/about" className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-pppi-blue rounded-md text-md">Tentang PPPI</Link></NavigationMenuLink></li>
                      <li><NavigationMenuLink asChild><Link to="/jury" className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-pppi-blue rounded-md text-md">Dewan Juri</Link></NavigationMenuLink></li>
                      <li><NavigationMenuLink asChild><Link to="/finalists" className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-pppi-blue rounded-md text-md">Finalis</Link></NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                 {/* Nav Item: Berita & Gallery */}
                 <NavigationMenuItem>
                  <Link
                    to="/gallery-news"
                    className={getNavLinkClasses("/gallery-news", location.pathname, scrolled)}
                  >
                    Berita & Gallery
                  </Link>
                </NavigationMenuItem>

                 {/* Nav Item: FAQ */}
                <NavigationMenuItem>
                  <Link
                    to="/faq"
                    className={getNavLinkClasses("/faq", location.pathname, scrolled)}
                  >
                    FAQ
                  </Link>
                </NavigationMenuItem>

                 {/* Nav Item: Kontak */}
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={getNavLinkClasses("/contact", location.pathname, scrolled)}
                  >
                    Kontak
                  </Link>
                </NavigationMenuItem>

                 {/* Nav Item: Pendaftaran */}
                <NavigationMenuItem>
                  <Link
                    to="/registration"
                    className={getNavLinkClasses("/registration", location.pathname, scrolled)}
                  >
                    Pendaftaran
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden focus:outline-none flex items-center justify-center w-10 h-10 relative z-50 transition-colors duration-300 ${
              scrolled ? 'text-white' : 'text-gray-800'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-white/80 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
          style={{ top: "60px" }} // Sesuaikan jika perlu
        >
           {/* Navigasi Mobile tidak diubah */}
          <nav className="container backdrop-blur-md mx-auto px-4 py-5 flex flex-col max-h-[calc(100vh-60px)] overflow-y-auto bg-white">
            {/* ... (Konten navigasi mobile seperti sebelumnya) ... */}
             <Link to="/home" className={`bg-white py-3 px-4 text-center font-medium border-b border-gray-200 ${location.pathname === "/home" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"} animate-fade-in`} style={{ animationDelay: "0ms" }}> Beranda </Link>
              {/* Tentang Kami mobile */}
              <div className="border-b border-gray-200"> <button className="w-full py-3 px-4 text-center font-medium flex justify-center items-center gap-2 text-gray-700 hover:text-blue-600" onClick={(e) => { const content=e.currentTarget.nextElementSibling; const icon=e.currentTarget.querySelector("svg"); content?.classList.toggle("hidden"); content?.classList.toggle("animate-fade-in-down"); icon?.classList.toggle("rotate-180"); }}> <span>Tentang Kami</span> <ChevronDown size={16} className="transition-transform duration-300" /> </button> <div className="bg-gray-50 py-2 hidden"> <Link to="/about" className="py-2 px-4 text-center font-medium block text-gray-600 hover:text-blue-600 transition-colors duration-200"> Tentang PPPI </Link> <Link to="/jury" className="py-2 px-4 text-center font-medium block text-gray-600 hover:text-blue-600 transition-colors duration-200"> Juri </Link> <Link to="/finalists" className="py-2 px-4 text-center font-medium block text-gray-600 hover:text-blue-600 transition-colors duration-200"> Finalis </Link> </div> </div>
              <Link to="/gallery-news" className={`py-3 px-4 text-center font-medium border-b border-gray-200 ${location.pathname === "/gallery-news" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"} animate-fade-in`} style={{ animationDelay: "100ms" }}> Berita & Gallery </Link>
              <Link to="/faq" className={`py-3 px-4 text-center font-medium border-b border-gray-200 ${location.pathname === "/faq" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"} animate-fade-in`} style={{ animationDelay: "150ms" }}> FAQ </Link>
              <Link to="/contact" className={`py-3 px-4 text-center font-medium border-b border-gray-200 ${location.pathname === "/contact" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"} animate-fade-in`} style={{ animationDelay: "200ms" }}> Kontak </Link>
              <Link to="/registration" className={`py-3 px-4 text-center font-medium border-b border-gray-200 ${location.pathname === "/registration" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"} animate-fade-in`} style={{ animationDelay: "300ms" }}> Pendaftaran </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 md:pt-28"> {/* Sesuaikan padding atas */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default Layout;