
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Pengguna mencoba mengakses rute yang tidak ada:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pppi-lightgray px-4">
      <div className="text-center max-w-lg animate-fade-in">
        <div className="text-8xl font-bold text-gradient mb-6">404</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-pppi-darkblue">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! Halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center group">
          <ArrowLeft size={20} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
