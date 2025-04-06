
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const About = () => {
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    mission: useRef<HTMLDivElement>(null),
    vision: useRef<HTMLDivElement>(null),
    values: useRef<HTMLDivElement>(null),
    team: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
  };

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    // Intersection Observer untuk animasi scroll
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe semua section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Peduli",
      description:
        "Menunjukkan rasa tanggung jawab dan perhatian terhadap lingkungan sekitar, baik itu teman, keluarga, maupun masyarakat. Dan memiliki empati dan keinginan untuk membantu sesama",
    },
    {
      title: "Etiket",
      description:
        "Menerapkan tata krama dan sopan santun dalam berinteraksi dengan orang lain Dan Menghormati norma-norma sosial yang berlaku.",
    },
    {
      title: "Luwes",
      description:
        "Mampu beradaptasi dengan berbagai situasi dan kondisi. Serta memiliki kemampuan komunikasi yang baik dan efektif. Dan fleksibel dalam menghadapi perubahan.",
    },
    {
      title: "Aktif",
      description:
        "Terlibat dalam kegiatan positif, baik di sekolah maupun di luar sekolah, memiliki inisiatif dan semangat untuk berkontribusi, gemar belajar dan mengembangkan diri.",
    },
    {
      title: "Jujur",
      description:
        "Memiliki integritas dan kejujuran dalam perkataan dan perbuatan, dapat dipercaya dan bertanggung jawab, menjunjung tinggi nilai-nilai kebenaran.",
    },
    {
      title: "Adil",
      description:
        "Adil, memiliki sikap yang tidak memihak, dan mampu menempatkan sesuatu pada tempatnya, mampu mengambil keputusan yang bijak, mampu bersikap objektif dan tidak membeda-bedakan.",
    },
    {
      title: "Ramah",
      description:
        "Memiliki sikap yang hangat, bersahabat, dan mudah bergaul, menunjukkan kepedulian dan empati, mampu menciptakan suasana yang positif.",
    },
  ];

  interface TeamMember {
    name: string;
    position: string;
    image: string;
    bio?: string;
    social?: {
      instagram?: string;
      twitter?: string;
      linkedin?: string;
      github?: string;
    };
  }

  const teamMembers: TeamMember[] = [
    {
      name: "Zulian Fatha Nurizal",
      position: "Pendiri Putera Puteri Pelajar Indonesia",
      image: "/images/juri/Zulian.png",
      bio: "Zulian telah memimpin PPPI sejak 2024. Ia memiliki latar belakang dalam Kepemimpinan Pendidikan dan bersemangat mengembangkan pemimpin masa depan.",
      social: {
        instagram: "https://instagram.com/zulianfatha_",
      },
    },
  ];

  // Data testimonial
  const testimonials = [
    {
      id : 1,
      name: "Ahmad Nurdin",
      role: "Finalis PPPI 2023",
      image: "/images/finalis/contoh.png",
      quote:
        "Ini adalah pengalaman luar biasa bagi saya apalagi ini ajang pertama yang saya ikuti dan perdana diselenggarakan dan saya berhasil membawa nama Kalimantan Selatan dikancah nasional tentunya juga itu ga mudah karena teman-teman pelajar dari seluruh Indonesia juga luar biasa sekali. Tapi saya tetap semangat untuk memberikan yang terbaik,",
    },
    {
      id : 2,
      name: "Jennifer Cung",
      role: "Puteri Pelajar Kalimantan Barat 2025",
      image: "/images/finalis/contoh.png",
      quote:
        "belajar itu tidak hanya dari buku, tapi bisa menggunakan teknologi yang ada seperti Quis is misalnya, sehingga belajar juga jadi menyenangkan tidak membosankan,",
    },
    {
      id : 3,
      name: "Rafka",
      role: "Putra Pelajar Impacful 2024.",
      image: "/images/finalis/contoh.png",
      quote:
        "Sebuah kehormatan dan kebanggan karena bisa mendapatkan gelar ini, karena semua gelar sama sama bisa menginspirasi dan berdampak bagi generasi muda agar bisa terus mengembangkan minat bakat karya mereka dalam dunia pendidikan,",
    },
    {
      id : 4,
      name: "Jelita",
      role: "Putri Pelajar Best Catwalk 2024",
      image: "/images/finalis/contoh.png",
      quote:
        "Sebuah Pengalaman yang sangat istimewa, mendebarkan dan luar biasa. Dimana banyak sekali manfaat dan upgrade skill untuk saya dalam proses mengikuti acara ini.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Bagian Hero */}
      <section
        ref={sectionRefs.hero}
        className="section-container opacity-0"
        style={{ animationDelay: "0ms" }}
      >
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-pppi-blue/10 text-pppi-blue rounded-full mb-3">
            Tentang Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pppi-darkblue">
            Putera Puteri Pelajar Indonesia
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Memberdayakan Generasi Muda untuk Masa Depan Indonesia
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/logo/PPPI.png"
                alt="Foto Grup PPPI"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-pppi-darkblue">
              Tentang Kami
            </h2>
            <p className="text-gray-700 mb-4">
              Indonesia akan memasuki usia ke 100 tahun pada 2045 dan mencapai
              puncak bonus demografi pada awal 2030. Untuk menuju ke sana kita
              semua harus mempersiapkan generasi penerus untuk memiliki
              keterampilan yang baik dan berjiwa sosial tinggi.
            </p>
            <p className="text-gray-700 mb-4">
              Keprihatinan berbagai isu yang terjadi di dunia pendidikan membua
              PT. Askara Swastika Karya tergugah untuk membuat ajang ini, di
              mana nantinya para pelajar akan menjadi duta sekolah di setiap
              daerah yang akan menyebarkan pentingnya pendidikan dan
              pemberdayaan pelajar di seluruh Indonesia. Dibuatnya kontes ini
              ingin menyadarkan masyarakat bahwa kontes bukan hanya terlihat
              dari fisik saja namun juga kecerdasan dan sikap anak muda yang
              akan menjadi contoh bagi generasi mendatang.{" "}
            </p>
            <p className="text-gray-700 mb-4">
              Dengan nilai yang kami bawa ini menjadikan edisi pertama kami di
              2024 sukses diikuti 60 peserta dari seluruh Indonesia, menjadikan
              kami kontes pelajar terbesar di Indonesia saat ini. Di tahun 2025
              ini kami berhasil menjaring 100 peserta dari total 547 pendaftar.
              Semua kepercayaan publik kepada kami menjadi sebuah semangat untuk
              membuat kontes yang baik bagi anak anak Indonesia.
            </p>
            <p className="text-gray-700">
              Pemenang Putera Puteri Pelajar Indonesia dinilai oleh Puteri
              Indonesia, Lmen, Praktisi dan Pakar di bidang pendidikan dan
              profesional. Hal itu menjadikan kami didukung oleh beberapa
              kementrian, dinas, dan pihak terkait. Selain itu Putera Puteri
              Pelajar Indonesia berkolaborasi dengan banyak UMKM untuk
              menggerakkan ekonomi masyarakat. Maka dengan sinergi yang baik,
              kami yakin kedepannya kegiatan ini akan berhasil dalam
              memberdayakan anak muda dan juga ekonomi rakyat.{" "}
            </p>
          </div>
        </div>

        {/* PT. Askara section - now with reversed layout */}
        <div className="mt-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 lg:order-2 md:order-1 sm:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/logo/ASKARA.png"
                alt="PT. Askara Swastika Karya"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-1">
            <h2 className="text-2xl font-semibold mb-4 text-pppi-darkblue">
              Tentang PT. Askara Swastika Karya
            </h2>
            <p className="text-gray-700 mb-4">
              Keterangann PT Askara: Askara Swastika Karya merupakan perusahaan
              yang bergerak dibidang Event Organizer yang berfokus pada
              pemilihan kontes dengan SK KEMENKUMHAM Nomer :
              AHU-0035726.AH.01.01.Tahun 2024. Event pertama kami yaitu Putera
              Puteri Pelajar Indonesia 2024 telah berhasil menjaring 60 siswa
              siswi berbakat dari seluruh Indonesia, menjadikan kontes kami
              menjadi kontes terbesar di Indonesia saat ini.{" "}
            </p>
            <p className="text-gray-700 mb-4">
              Kontes ini kami buat dalam rangka membuat wadah yang positif bagi
              generasi muda untuk menyadarkan masyarakat bahwa kontes bukan
              hanya terlihat dari fisik saja namun juga kecerdasan dan sikap
              anak muda yang akan menjadi contoh bagi generasi mendatang.
            </p>
            <p className="text-gray-700">
              Kesuksesan Putera Puteri Pelajar Indonesia 2024 juga merambah ke
              event yang kami buat selanjutnya, yaitu Duta Urban Farming Jakarta
              bekerjasama dengan Dinas ketahanan Pangan Kelautan dan Pertanian
              Provinsi DKI Jakarta. Kegiatan ini sukses mendatangkan 5.000 orang
              dalam malam final di Taman Ismail Marzuki.
            </p>
            <p className="text-gray-700">
              Dengan smeua keberhasilan yang kami dapatkan, kami membuka
              kolaborasi kepada seluruh pihak untuk saling bertumbuh dan
              berinovasi untuk menciptakan iklim kontes Indonesia yang sehat dan
              berintegritas.
            </p>
          </div>
        </div>
      </section>

      {/* Misi & Visi */}
      <section className="bg-pppi-lightgray py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misi */}
            <div
              ref={sectionRefs.mission}
              className="glass-card p-8 opacity-0"
              style={{ animationDelay: "100ms" }}
            >
              <div className="bg-pppi-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="bg-pppi-blue w-8 h-8 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-pppi-darkblue">
                Misi Kami
              </h2>
              <p className="text-gray-700">
                Menciptakan tren positif dalam bidang pendidikan melalui kontes
                (Pageant)
              </p>
            </div>

            {/* Visi */}
            <div
              ref={sectionRefs.vision}
              className="glass-card p-8 opacity-0"
              style={{ animationDelay: "200ms" }}
            >
              <div className="bg-pppi-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="bg-pppi-gold w-8 h-8 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-pppi-darkblue">
                Visi Kami
              </h2>
              <p className="text-gray-700">
                Menjadi pelopor kontes remaja Indonesia yang berfokus pada
                pengembangan pelajar demi mewujudkan Indonesia Emas 2045
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-nilai sebagai Carousel */}
      <section
        ref={sectionRefs.values}
        className="section-container opacity-0"
        style={{ animationDelay: "300ms" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-pppi-darkblue">
            Kekuatan yang Membentuk Kami
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Prinsip-prinsip yang memandu organisasi kami dan membentuk budaya
            kami
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {values.map((value, index) => (
              <CarouselItem
                key={value.title}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card
                    className="glass-card hover-scale cursor-pointer opacity-0 animate-fade-in"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <h3 className="text-xl font-semibold mb-3 text-pppi-blue">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 text-center">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
            <CarouselNext className="relative static right-0 translate-y-0" />
          </div>
        </Carousel>
      </section>

      {/* Tim Kepemimpinan dengan Kartu yang Dapat Diklik */}
      <section
        ref={sectionRefs.team}
        className="bg-pppi-lightgray py-16 md:py-24 opacity-0 mx-auto"
        style={{ animationDelay: "500ms" }}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-pppi-darkblue">
              Tim Kami
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              " Kami bukan hanya bekerja bersama, kami tumbuh dan berkembang
              bersama. "
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="text-center opacity-0 animate-fade-in cursor-pointer transition-all duration-400 hover:scale-105"
                style={{ animationDelay: `${600 + index * 100}ms` }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md hover:shadow-lg transition-shadow duration-400">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-pppi-darkblue">
                  {member.name}
                </h3>
                <p className="text-pppi-blue">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section
        ref={sectionRefs.testimonials}
        className="section-container opacity-0 py-16"
        style={{ animationDelay: "700ms" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-pppi-darkblue">
            Apa Kata Mereka
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Pengalaman dan cerita dari para alumni Putera Puteri Pelajar
            Indonesia
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3 p-2"
                >
                  <Card className="h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="mb-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-pppi-darkblue">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-pppi-blue">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <div className="text-pppi-gold">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.017 10.957C14.017 8.9 14.9 7.9 16.667 7.9V4.933C13.9 4.933 11.7 6.5 11.7 10.9V19.1H16.667V10.957H14.017ZM5.983 10.957C5.983 8.9 6.867 7.9 8.633 7.9V4.933C5.867 4.933 3.667 6.5 3.667 10.9V19.1H8.633V10.957H5.983Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-700 italic flex-grow">
                        {testimonial.quote}
                      </p>
                      <div className="flex mt-4 text-pppi-gold">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
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

      {/* Dialog Anggota Tim */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={(open) => !open && setSelectedMember(null)}
      >
        {selectedMember && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-pppi-blue">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <DialogTitle className="text-xl text-pppi-darkblue">
                  {selectedMember.name}
                </DialogTitle>
                <DialogDescription className="text-pppi-blue">
                  {selectedMember.position}
                </DialogDescription>
              </div>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-gray-700">{selectedMember.bio}</p>

              {selectedMember.social && (
                <div className="flex justify-center space-x-4 pt-2">
                  {selectedMember.social.twitter && (
                    <a
                      href={selectedMember.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pppi-blue transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {selectedMember.social.linkedin && (
                    <a
                      href={selectedMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pppi-blue transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {selectedMember.social.github && (
                    <a
                      href={selectedMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pppi-blue transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {selectedMember.social.instagram && (
                    <a
                      href={selectedMember.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pppi-blue transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default About;
