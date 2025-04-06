
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAnimations } from "@/hooks/useAnimations";
import { useIsMobile } from "@/hooks/use-mobile";

const LandingPage = () => {
  const [useStaticBackground, setUseStaticBackground] = useState(false);
  const isMobile = useIsMobile();

  useAnimations();

  const detectSlowConnection = () => {
    if (
      "connection" in navigator &&
      "effectiveType" in (navigator as any).connection
    ) {
      const connection = (navigator as any).connection;
      const connectionType = connection.effectiveType;
      return connectionType === "slow-2g" || connectionType === "2g";
    }
    return false;
  };

  useEffect(() => {
    const isSlowConnection = detectSlowConnection();
    if (isSlowConnection) {
      setUseStaticBackground(true);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {useStaticBackground && (
        <div className="absolute inset-0 z-10">
          <img
            src="/public/images/kegiatan/background.png.jpg"
            alt="Putera Puteri Pelajar Indonesia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      )}

      {!useStaticBackground && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 min-h-full min-w-full object-cover"
          poster="/images/kegiatan/background.png"
        >
          <img
            src="/images/kegiatan/background.png"
            alt="Putera Puteri Pelajar Indonesia"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </video>
      )}

      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/logo/logo.png"
            alt="Putera Puteri Pelajar Indonesia"
            className="
            w-[400px] sm:w-[400px] md:w-[450px] lg:w-[550px] xl:w-[600px] mx-auto 
            mb-[-65px] sm:mb-[-65px] md:mb-[-75px] lg:mb-[-100px] xl:mb-[-110px] 
            mt-[-80px] sm:mt-[-100px] md:mt-[-100px] lg:mt-[-100px] xl:mt-[-100px]
            animate__animated animate__fadeInDown"
          />
          <p className="mb-8 sm:mb-10 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
            Bergabunglah dengan kontes pelajar terbesar di Indonesia dan jadilah
            bagian dari sejarah dunia.<br /> <b>#IndonesiaMaju</b>
          </p>
          <Link
            to="/home"
            className="group inline-flex items-center gap-2 rounded-full bg-pppi-blue 
             bg-opacity-60 hover:bg-opacity-90 
             px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-sm sm:text-base md:text-md 
             font-medium text-white shadow-lg transition-all duration-2000 
             hover:scale-110 hover:-translate-y-1 animate__animated animate__fadeInUp animate__delay-2s"
          >
            Masuk ke Website
            <ArrowRight
              size={isMobile ? 16 : 20}
              className="transition-transform duration-400 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
