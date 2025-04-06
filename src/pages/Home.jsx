import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Users,
  MapPin,
  Clock,
  Instagram,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAnimations } from "@/hooks/useAnimations";
import { Card } from "@/components/ui/card";
import StackedVideoCard from "@/components/gallery/StackedVideoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LazyImage from "@/components/common/LazyImage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GlassCard from "../components/ui/GlassCard"; // Sesuaikan path jika perlu

/**
 * Halaman Beranda (Home)
 * Menampilkan konten utama website dengan berbagai section
 */
const Home = () => {
  // Inisialisasi animasi
  useAnimations();
  // Contoh data video dengan YouTube URLs
  const videoItems = [
    {
      id: "TgEzyw6Y98A",
      // YouTube video ID
      videoUrl: "https://www.youtube.com/watch?v=TgEzyw6Y98A",
      title: "Video Promosi PPPI 2025",
      description:
        "Kontes pelajar terbesar di Indonesia hadir kembali! Kami melaju lebih cepat menuju Jakarta dan Bandung dengan 100 peserta dari seluruh Indonesia. Yuk daftarkan dirimu dan jadilah bagian dari sejarah #IndonesiaMaju",
      date: "25 Juni 2023",
      location: "Jakarta",
    },
    {
      id: "E_f2k5Q0t28",
      videoUrl: "https://youtu.be/E_f2k5Q0t28",
      title: "Recap Karantina Putera Puteri Pelajar 2024",
      description:
        "Kilas balik keseruan dan keramaian Karantina bersama  acara putera puteri pelajar 2024",
      date: "-",
      location: "-",
    },
    {
      id: "DPYrViHvrlM",
      videoUrl: "https://www.youtube.com/watch?v=DPYrViHvrlM",
      title: "Malam Grand Final Putera Puteri Pelajar 2024",
      description:
        "Malam puncak kemeriahan ajang putera puteri pelajar indonesia 2024",
      date: "-",
      location: "-",
    },
    // {
    //   id: "-",
    //   videoUrl: "placeholder.svg",
    //   title: "Coming Soon !",
    //   description:
    //     "Nantikan Video Menarik dari kami Selanjutnya !",
    //   date: "-",
    //   location: "-",
    // },
    
  ];

  // Data sponsor - akan diganti dengan gambar asli nanti
  const sponsorLogos = [
    {
      id: 1,
      name: "institut pariwisata trisakti",
      image: "/images/logo/1.png",
      link: "https://iptrisakti.ac.id/",
    },
    {
      id: 2,
      name: "schooters",
      image: "/images/logo/2.png",
      link: "https://www.schoters.com/",
    },
    {
      id: 3,
      name: "FEB UI",
      image: "/images/logo/3.png",
      link: "https://feb.ui.ac.id/",
    },
    {
      id: 4,
      name: "Jakarta Good Guide",
      image: "/images/logo/4.png",
      link: "https://jakartagoodguide.wordpress.com/author/jakartagoodguide/",
    },
    {
      id: 5,
      name: "Saybread",
      image: "/images/logo/5.png",
      link: "https://www.instagram.com/saybread/",
    },
    {
      id: 6,
      name: "Elise",
      image: "/images/logo/6.png",
      link: "https://www.instagram.com/elise_id/",
    },
    {
      id: 7,
      name: "Dapur tiwul",
      image: "/images/logo/7.png",
      link: "#",
    },
    {
      id: 8,
      name: "Victoria Square",
      image: "/images/logo/8.png",
      link: "https://victoriasquare.co.id/",
    },
    {
      id: 9,
      name: "Permata hijau",
      image: "/images/logo/9.png",
      link: "https://permatahijausuites.com/",
    },
    {
      id: 10,
      name: "Plaza Semanggi",
      image: "/images/logo/10.png",
      link: "https://www.instagram.com/explore/locations/241095916467422/plaza-semanggi/",
    },
    {
      id: 11,
      name: "Seohanna",
      image: "/images/logo/11.png",
      link: "http://www.soehannahall.com/",
    },
    {
      id: 12,
      name: "Kreen",
      image: "/images/logo/12.png",
      link: "https://kreenconnect.com/",
    },
    {
      id: 13,
      name: "Bunda Latinas",
      image: "/images/logo/13.png",
      link: "https://www.instagram.com/bunda.latinas/",
    },
    {
      id: 14,
      name: "Aruba",
      image: "/images/logo/14.png",
      link: "https://www.press.aruba.com/",
    },
    {
      id: 15,
      name: "oppal",
      image: "/images/logo/15.png",
      link: "https://oppal.co.id/",
    },
    {
      id: 16,
      name: "kompas",
      image: "/images/logo/16.png",
      link: "https://www.kompasgramedia.com/",
    },
    {
      id: 17,
      name: "whoosh",
      image: "/images/logo/17.png",
      link: "https://ticket.kcic.co.id/",
    },
    {
      id: 18,
      name: "enjoy",
      image: "/images/logo/18.png",
      link: "https://jakarta-tourism.go.id/",
    },
    {
      id: 19,
      name: "jakarta creative",
      image: "/images/logo/19.png",
      link: "https://jakartacreativehub.jakarta.go.id/",
    },
    {
      id: 20,
      name: "dkpkp",
      image: "/images/logo/20.png",
      link: "https://dkpkp.jakarta.go.id/",
    },
    {
      id: 21,
      name: "askara",
      image: "/images/logo/21.png",
      link: "https://www.instagram.com/askara.swastikarya",
    },
    {
      id: 22,
      name: "dispubpar kota bandung",
      image: "/images/logo/22.png",
      link: "https://disparbud.jabarprov.go.id/",
    },
    {
      id: 23,
      name: "mustika ratu",
      image: "/images/logo/23.png",
      link: "https://mustika-ratu.co.id/",
    },
    {
      id: 24,
      name: "yayasan puteri indonesia",
      image: "/images/logo/24.png",
      link: "https://www.puteri-indonesia.com/",
    },
    {
      id: 25,
      name: "Caldare champ",
      image: "/images/logo/25.png",
      link: "https://www.instagram.com/caldarechamp/",
    },
  ];

  // State untuk hero carousel
  const [activeSlide, setActiveSlide] = useState(0);

  // Data hero images - mudah diedit
  const heroImages = [
    {
      src: "/images/kegiatan/final3.jpg",
      alt: "Malam Final PPPI",
      title: "",
    },
    {
      src: "/images/kegiatan/materi1.jpg",
      alt: "Pemberian Materi PPPI",
      title: "",
    },
    {
      src: "/images/kegiatan/tour-jkt2.JPG",
      alt: "Tour Jakarta",
      title: "",
    },
  ];
  const totalSlides = heroImages.length;

  // Hero Section dengan Image Carousel yang lebih responsif
  const heroSection = () => (
    <section className="relative bg-pppi-lightgray overflow-hidden py-12 md:py-16 lg:py-24 px-4 md:px-6 mb-24">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-pppi-blue/10 text-pppi-blue rounded-full mb-3">
          Selamat Datang !
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pppi-darkblue">
          Putera Puteri Pelajar Indonesia
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          Bergabunglah dengan kontes pelajar terbesar di Indonesia dan jadilah
          bagian dari sejarah dunia.
        </p>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Konten Teks */}
        <div
          className="w-full lg:w-1/2 order-2 lg:order-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-pppi-darkblue mb-3 leading-tight lg:text-5xl"
          >
            Ayo bangkit
            <br />
            <span className="text-pppi-blue">Generasi Unggul ! </span>
          </h1>
          <p
            className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Mengembangkan potensi pelajar Indonesia melalui ajang pemilihan
            putera puteri pelajar yang mengedepankan kecerdasan, sikap, dan
            kontribusi sosial.
          </p>
          <div
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link
              to="/registration"
              className="btn-primary inline-flex items-center gap-2 group text-sm md:text-base"
            >
              Daftar Sekarang
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 md:px-5 md:py-2.5 border-2 border-pppi-blue text-pppi-blue rounded-full font-medium hover:bg-pppi-blue hover:text-white transition-colors duration-300 text-sm md:text-base"
            >
              Pelajari Selengkapnya
            </Link>
          </div>
        </div>

        {/* Enhanced Responsive Image Carousel */}
        <div
          className="w-full lg:w-1/2 order-1 lg:order-1"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Link to="/gallery-news" className="block w-full">
            <div className="relative rounded-xl overflow-hidden shadow-lg border-4 sm:border-8 border-white aspect-video w-full max-w-lg mx-auto group">
              {/* Main carousel */}
              <div className="relative w-full h-full overflow-hidden">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                      index === activeSlide
                        ? "opacity-100 translate-x-0"
                        : index < activeSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full"
                      objectFit="cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-4 transition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                      <h3 className="text-white font-medium text-sm sm:text-base">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex justify-center space-x-2 z-10">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSlide(index);
                    }}
                    className={`w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? "bg-white scale-125"
                        : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Custom navigation arrows - visible on mobile too with smaller size */}
              <button
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/30 text-white rounded-full opacity-70 hover:opacity-100 transition-opacity hover:bg-black/50 z-10"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSlide(
                    (prev) => (prev - 1 + totalSlides) % totalSlides
                  );
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
              </button>
              <button
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/30 text-white rounded-full opacity-70 hover:opacity-100 transition-opacity hover:bg-black/50 z-10"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSlide((prev) => (prev + 1) % totalSlides);
                }}
                aria-label="Next slide"
              >
                <ChevronRight size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );

  // Mengatur otomatis carousel hero
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  // Video Section dengan jarak yang diperbaiki untuk navigasi
  const videoSection = () => {
    return (
      <section className="py-16 bg-pppi-lightgray md:py-[91px]">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="container mx-auto px-[33px]"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-pppi-blue/10 text-pppi-blue rounded-full mb-3">
              Dokumentasi Video
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pppi-darkblue">
              Video Kegiatan
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tonton kembali momen-momen berharga dari berbagai kegiatan kami.
              Klik pada video untuk memutar konten lengkapnya.
            </p>
          </div>
            {/* Improved Video Gallery Component with better spacing */}
            <div className="px-5 sm:px-8 md:px-12 relative py-5 rounded-lg ">
              <StackedVideoCard items={videoItems} />
            </div>

          <div
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="/gallery-news"
              className="inline-flex items-center gap-2 text-pppi-blue font-medium hover:underline"
            >
              Lihat Semua Video <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    );
  };

  // About Section
  const aboutSection = () => (
    <section className="py-16 md:py-24 bg-pppi-lightgray">
      <div className="container mx-auto px-8 ">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="inline-block px-6 py-1 text-sm font-medium bg-pppi-blue/10 text-pppi-blue rounded-full mb-3">
            Tentang PPPI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pppi-darkblue">
            Apa Itu Putera Puteri Pelajar Indonesia
          </h2>
          {/* <p className="text-gray-600 max-w-3xl mx-auto">
            Putera Puteri Pelajar Indonesia (PPPI) adalah ajang prestisius untuk
            mengembangkan potensi pelajar Indonesia
           </p> */}
        </div>

        <div
          className="flex flex-col md:flex-row gap-8 items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg ">
              {/* Video Tentang PPPI */}
              <img
                src="/images/logo/blacklogo2.png"
                alt="PT. Askara Swastika Karya"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-2xl font-semibold mb-4 text-pppi-darkblue">
              Tentang Program
            </h3>
            <p className="text-gray-700 mb-4">
              Putera Puteri Pelajar Indonesia (PPPI) hadir sebagai wadah
              pengembangan potensi pelajar. Indonesia akan memasuki usia 100
              tahun pada 2045 dan puncak bonus demografi pada 2030, yang
              memerlukan persiapan generasi penerus dengan keterampilan unggul
              dan jiwa sosial tinggi.
            </p>
            <p className="text-gray-700">
              PT. Askara Swastika Karya menciptakan wadah bagi pelajar untuk
              menjadi duta sekolah yang menyebarkan pentingnya pendidikan
              berkualitas. Berbeda dengan kontes lainnya, Putera Puteri Pelajar
              Indonesia menekankan kecerdasan, sikap, dan kontribusi sosial,
              bukan sekadar penampilan fisik.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              number: "500+",
              label: "Pendaftar",
              delay: 200,
            },
            {
              number: "200+",
              label: "Finalis",
              delay: 300,
            },
            {
              number: "34",
              label: "Provinsi",
              delay: 400,
            },
            {
              number: "50+",
              label: "Sekolah",
              delay: 500,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={stat.delay}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-pppi-blue mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Sponsors Section dengan gambar logo asli
  const sponsorsSection = () => {
    return (
      <section className="py-16 md:py-20 bg-pppi-lightgray">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-pppi-blue/10 text-pppi-blue rounded-full mb-3">
            Sponsor & Mitra
          </span>
          <h2 className="text-3xl font-bold mb-6 text-pppi-darkblue">
            Didukung Oleh
          </h2>

          {/* Wrapper untuk animasi */}
          <div className="overflow-hidden relative group">
            <div className="flex items-center gap-16 whitespace-nowrap animate-marquee group-hover:paused ">
              {/* Logo Sponsor */}
              {[...sponsorLogos, ...sponsorLogos].map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-500 hover:scale-110 "
                  aria-label={`Sponsor ${sponsor.name}`}
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    onError={(e) => {
                      e.target.src = "/placeholder.svg";
                    }}
                    loading="lazy"
                    className="h-20 lg:h-24 md:h-24 lg:w-auto grayscale hover:grayscale-0 grayscale-100 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CSS untuk animasi */}
        <style>{`
          @keyframes scrollMarquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            display: flex;
            animation: scrollMarquee 850s linear infinite; /* Durasi lebih lama (40s) */
            width: 1100%; /* Perhatikan ini mungkin perlu disesuaikan tergantung jumlah logo */
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    );
  };

  // Testimonials Section
  const testimonialsSection = () => (
    <section className="py-16 md:py-24 bg-pppi-lightgray">
      <div
        className="container mx-auto px-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-pppi-blue/10 text-pppi-blue rounded-full mb-3">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pppi-darkblue">
            Apa Kata Mereka
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pengalaman dari para finalis dan alumni Putera Puteri Pelajar
            Indonesia
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {[
              {
                name: "Ahmad Nurdin",
                role: "Finalis PPPI 2023",
                instagram: "",
                quote:
                  "Ini adalah pengalaman luar biasa bagi saya apalagi ini ajang pertama yang saya ikuti dan perdana diselenggarakan dan saya berhasil membawa nama Kalimantan Selatan dikancah nasional tentunya juga itu ga mudah karena teman-teman pelajar dari seluruh Indonesia juga luar biasa sekali. Tapi saya tetap semangat untuk memberikan yang terbaik,",
              },
              {
                name: "Jennifer Cung",
                role: "Puteri Pelajar Kalimantan Barat 2025",
                instagram: "",
                quote:
                  "belajar itu tidak hanya dari buku, tapi bisa menggunakan teknologi yang ada seperti Quis is misalnya, sehingga belajar juga jadi menyenangkan tidak membosankan,",
              },
              {
                name: "Rafka",
                role: "Putra Pelajar Impacful 2024.",
                instagram: "",
                quote:
                  "Sebuah kehormatan dan kebanggan karena bisa mendapatkan gelar ini, karena semua gelar sama sama bisa menginspirasi dan berdampak bagi generasi muda agar bisa terus mengembangkan minat bakat karya mereka dalam dunia pendidikan,",
              },
              {
                name: "Jelita",
                role: "Putri Pelajar Best Catwalk 2024",
                instagram: "",
                quote:
                  "Sebuah Pengalaman yang sangat istimewa, mendebarkan dan luar biasa. Dimana banyak sekali manfaat dan upgrade skill untuk saya dalam proses mengikuti acara ini.",
              },
            ].map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/1 p-4"
              >
                <div
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src="/images/finalis/contoh.png"
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-pppi-darkblue">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-pppi-blue">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://instagram.com/${testimonial.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
                      aria-label={`Instagram ${testimonial.name}`}
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
            <CarouselNext className="relative static right-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );

  // Render halaman
  return (
    <div className="bg-white">
      {heroSection()}
      {videoSection()}
      {aboutSection()}
      {sponsorsSection()}
      {testimonialsSection()}
    </div>
  );
};
export default Home;
