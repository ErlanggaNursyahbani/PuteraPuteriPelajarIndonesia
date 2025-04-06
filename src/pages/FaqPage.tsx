import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Pastikan path benar
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Pastikan path benar
import { useAnimations } from "@/hooks/useAnimations"; // Pastikan path benar
import { ArrowRight } from "lucide-react"; // HelpCircle dihapus karena tidak digunakan
import { Link } from "react-router-dom"; // Ditambahkan import Link

/**
 * Halaman Frequently Asked Questions (FAQ)
 * Menampilkan berbagai pertanyaan yang sering diajukan dalam kategori berbeda
 */
// Menggunakan definisi komponen standar tanpa React.FC
const FaqPage = () => {
  // Inisialisasi animasi
  useAnimations();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 md:py-24 px-4 text-center bg-pppi-lightgray">
        <div className="container mx-auto">
          <span
            className="inline-block px-3 py-1 text-sm font-medium bg-pppi-blue/10 text-pppi-blue rounded-full mb-3"
            data-aos="fade-up"
          >
            Informasi
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-pppi-darkblue"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Temukan jawaban untuk pertanyaan umum tentang PPPI, pendaftaran, dan
            detail program
          </p>
        </div>
      </section>

      {/* FAQ Content Section dengan tab dan accordion */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div
            className="max-w-4xl mx-auto glass-card p-8" // Asumsi 'glass-card' terdefinisi di CSS Anda
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Tabs defaultValue="umum" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-pppi-lightgray rounded-xl p-1">
                <TabsTrigger
                  value="umum"
                  className="rounded-lg text-sm md:text-base font-medium"
                >
                  Umum
                </TabsTrigger>
                <TabsTrigger
                  value="pendaftaran"
                  className="rounded-lg text-sm md:text-base font-medium"
                >
                  Pendaftaran
                </TabsTrigger>
                <TabsTrigger
                  value="kompetisi"
                  className="rounded-lg text-sm md:text-base font-medium"
                >
                  Kompetisi
                </TabsTrigger>
                <TabsTrigger
                  value="lainnya"
                  className="rounded-lg text-sm md:text-base font-medium"
                >
                  Lainnya
                </TabsTrigger>
              </TabsList>

              {/* Tab Umum */}
              <TabsContent value="umum" className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="item-1"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Apa itu PPPI (Putera Puteri Pelajar Indonesia)?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      PPPI adalah program nasional yang bertujuan untuk mencari
                      bakat muda berbakat dari seluruh Indonesia. Program ini
                      memberikan kesempatan kepada para pelajar untuk
                      mengembangkan potensi mereka dalam berbagai bidang seperti
                      kepemimpinan, akademik, dan pengembangan diri.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Siapa yang dapat berpartisipasi dalam PPPI?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Program PPPI terbuka untuk semua pelajar Indonesia dengan
                      rentang usia 12-19 tahun dan masih terdaftar sebagai siswa
                      aktif di institusi pendidikan. Kami mendorong partisipasi
                      dari berbagai latar belakang dan daerah di seluruh
                      Indonesia.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Apa manfaat mengikuti program PPPI?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Manfaat mengikuti PPPI sangat beragam, antara lain:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Pengembangan kemampuan kepemimpinan</li>
                        <li>
                          Jaringan dengan pelajar berbakat dari seluruh
                          Indonesia
                        </li>
                        <li>
                          Kesempatan untuk menjadi duta pelajar di tingkat
                          nasional
                        </li>
                        <li>
                          Program pengembangan diri dan pelatihan intensif
                        </li>
                        <li>Kesempatan beasiswa pendidikan</li>
                        <li>
                          Pengalaman yang berharga untuk masa depan akademik dan
                          karir
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Syarat apa saja untuk ikutan Putera Puteri Pelajar
                      Indonesia?{" "}
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          Peserta merupakan pelajar tingkat SMP Sederajat atau
                          SMA/K Sederajat dari seluruh Indonesia yang mewakili
                          daerah asalnya atau memiliki darah keturunan dari
                          daerah yang akan diwakili{" "}
                        </li>
                        <li>
                          Berusia 12-16 Tahun Tingkat SMP Sederajat atau lulus
                          di sekolah yang di wakilkan
                        </li>
                        <li>
                          Berusia 15-19 Tahun Tingkat SMA/K Sederajat atau lulus
                          di sekolah yang di wakilkan dan belum berstatus
                          mahasiswa{" "}
                        </li>
                        <li>
                          Jika siswa telah lulus dari kategori SMP dan SMA
                          sederajat, maka akan dilihat dari pendidikan
                          terakhirnya{" "}
                        </li>
                        <li>
                          Tinggi minimal 165cm untuk Putera dan 160cm untuk
                          Puteri (Optional)
                        </li>
                        <li>
                          Peserta dapat melakukan pendaftaran secara mandiri
                          atau melalui penanggungjawab daerah (PJ) yang
                          bekerjasama dengan panitia pusat
                        </li>
                        <li>
                          Peserta yang mendaftar mandiri melalui beberapa
                          tahapan sebagai berikut :
                          <p className="ml-4"> {/* Indentasi untuk sub-list */}
                            1. Mengisi formulir yang tertera pada bio instagram
                            @pp.pelajarindonesia
                          </p>
                          <p className="ml-4">2. Upload twibbon dan tag @pp.pelajarindonesia</p>
                          <p className="ml-4">3. Menunggu seleksi berkas </p>
                          <p className="ml-4">
                            4. Melakukan sesi wawancara daring jika sudah lulus
                            seleksi berkas
                          </p>
                          <p className="ml-4">
                            5. Dinyatakan lulus jika lulus seleksi wawancara dan
                            mengikuti aturan yang ditetapkan
                          </p>
                          <p className="ml-4">
                            6. Tidak sedang menjabat atau terikat dengan kontes
                            lain atau produk lainnya
                          </p>
                          <p className="ml-4">
                            7. Bersedia mengikuti aturan yang dan akan berlaku{" "}
                          </p>
                          <p className="ml-4">
                            8. Peserta yang melanggar aturan akan di
                            diskualifikasi
                          </p>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Siapa penyelenggara program PPPI?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Program PPPI diselenggarakan oleh PT. Askara Swastika
                      Karya bekerja sama dengan berbagai institusi pendidikan
                      dan pemerintah daerah di seluruh Indonesia.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Tab Pendaftaran */}
              <TabsContent value="pendaftaran" className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="daftar-1"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Bagaimana cara mendaftar program PPPI?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Pendaftaran dapat dilakukan melalui website resmi PPPI
                      dengan mengisi formulir pendaftaran online. Pastikan semua
                      dokumen yang diperlukan seperti identitas diri, foto
                      formal, dan surat rekomendasi dari sekolah telah
                      dipersiapkan.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="daftar-2"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Apakah ada biaya pendaftaran?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Biaya pendaftaran program PPPI bervariasi setiap tahunnya.
                      Namun, kami menyediakan beasiswa dan keringanan biaya bagi
                      peserta yang memenuhi kriteria tertentu. Silakan hubungi
                      panitia untuk informasi lebih lanjut mengenai biaya dan
                      bantuan keuangan.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="daftar-3"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Dokumen apa saja yang diperlukan untuk pendaftaran?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Dokumen yang diperlukan antara lain:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Kartu identitas (KTP/Kartu Pelajar)</li>
                        <li>Pas foto terbaru (formal, latar belakang putih)</li>
                        <li>Surat rekomendasi dari sekolah</li>
                        <li>Riwayat prestasi akademik dan non-akademik</li>
                        <li>Esai singkat tentang visi dan misi pribadi</li>
                        <li>Bukti pembayaran biaya pendaftaran (jika ada)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="daftar-4"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Kapan pendaftaran PPPI dibuka?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Pendaftaran PPPI biasanya dibuka pada awal tahun akademik
                      baru, sekitar bulan Januari - April. Namun, jadwal dapat
                      berubah setiap tahunnya. Silakan pantau website dan sosial
                      media resmi PPPI untuk informasi terkini.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="daftar-5"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Bagaimana jika saya mengalami kesulitan saat pendaftaran?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Jika Anda mengalami kesulitan saat proses pendaftaran,
                      silakan hubungi tim dukungan kami melalui email
                      pp.pelajarindonesia@gmail.com atau nomor yang tertera di
                      halaman Contact. Tim kami siap membantu menyelesaikan
                      masalah yang Anda hadapi.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Tab Kompetisi */}
              <TabsContent value="kompetisi" className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="kompetisi-1"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Apa saja tahapan seleksi dalam program PPPI?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Program PPPI memiliki beberapa tahapan seleksi:
                      <ol className="list-decimal pl-6 mt-2 space-y-1">
                        <li>Seleksi berkas dan administrasi</li>
                        <li>Tes tertulis (pengetahuan umum dan kepribadian)</li>
                        <li>Presentasi diri dan bakat</li>
                        <li>Wawancara dengan dewan juri</li>
                        <li>Pembekalan finalis</li>
                        <li>Grand final dan pengumuman pemenang</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="kompetisi-2"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Apa saja kriteria penilaian dalam PPPI?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Kriteria penilaian dalam PPPI meliputi:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Prestasi akademik dan non-akademik</li>
                        <li>Kepemimpinan dan aktivitas sosial</li>
                        <li>Pengetahuan umum dan wawasan kebangsaan</li>
                        <li>Kemampuan komunikasi dan presentasi</li>
                        <li>Kreativitas dan inovasi</li>
                        <li>Karakter dan integritas</li>
                        <li>Visi dan misi untuk Indonesia</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="kompetisi-3"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Berapa lama program PPPI berlangsung?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Program PPPI biasanya berlangsung selama 3-6 bulan, mulai
                      dari tahap pendaftaran hingga pengumuman pemenang. Setelah
                      terpilih, para finalis akan mengikuti program pengembangan
                      diri intensif selama 1 tahun masa jabatan mereka.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="kompetisi-4"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Apa saja hadiah yang diberikan kepada pemenang?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Pemenang PPPI akan mendapatkan:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          Gelar resmi sebagai Putera/Puteri Pelajar Indonesia
                        </li>
                        <li>Beasiswa pendidikan</li>
                        <li>
                          Program pengembangan diri dan pelatihan kepemimpinan
                        </li>
                        <li>
                          Kesempatan mewakili Indonesia di forum nasional dan
                          internasional
                        </li>
                        <li>
                          Jaringan dengan tokoh-tokoh pendidikan dan pemimpin
                          Indonesia
                        </li>
                        <li>Hadiah sponsor dari mitra PPPI</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="kompetisi-5"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Apa yang harus dipersiapkan untuk menghadapi kompetisi?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Untuk menghadapi kompetisi PPPI, peserta sebaiknya
                      mempersiapkan:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Pengetahuan umum dan isu-isu terkini</li>
                        <li>Kemampuan public speaking dan presentasi</li>
                        <li>
                          Pengembangan bakat khusus (seni, olahraga, akademik,
                          dll)
                        </li>
                        <li>Pengenalan diri dan cerita inspiratif personal</li>
                        <li>Rencana kontribusi untuk Indonesia</li>
                        <li>Kesehatan fisik dan mental yang baik</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Tab Lainnya */}
              <TabsContent value="lainnya" className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="lainnya-1"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Bagaimana aktivitas alumni PPPI?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Alumni PPPI tergabung dalam Ikatan Alumni PPPI yang secara
                      aktif terlibat dalam berbagai kegiatan sosial, pendidikan,
                      dan pengembangan komunitas. Mereka juga berperan sebagai
                      mentor bagi peserta PPPI berikutnya dan mengadakan
                      pertemuan rutin untuk berbagi pengalaman dan menjalin
                      jaringan.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="lainnya-2"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Apakah PPPI memiliki program internasional?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Ya, PPPI memiliki program pertukaran pelajar internasional
                      dan kesempatan untuk berpartisipasi dalam forum pemuda
                      internasional. Pemenang PPPI berkesempatan menjadi duta
                      Indonesia di berbagai acara international youth summit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="lainnya-3"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Bagaimana cara menjadi sponsor atau mitra PPPI?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Untuk informasi kemitraan dan sponsorship, silakan hubungi
                      tim kami melalui email pp.pelajarindonesia@gmail.com atau
                      nomor telepon yang tertera di halaman Contact. Tim kami
                      akan menyediakan proposal kerjasama sesuai dengan
                      kebutuhan Anda.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="lainnya-4"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Apakah ada program PPPI untuk tingkat yang berbeda?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Saat ini PPPI berfokus pada siswa SMA/sederajat dan SMP
                      Sederajat. Namun, Pantau terus pengumuman resmi kami untuk
                      informasi terbaru.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="lainnya-5"
                    className="border border-pppi-lightgray rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-5 py-4 hover:bg-pppi-lightgray/30 font-medium text-pppi-darkblue">
                      Bagaimana saya bisa mendapatkan informasi terbaru tentang
                      PPPI?
                    </AccordionTrigger>
                    <AccordionContent className="bg-pppi-lightgray/10 px-5 pb-4 text-gray-700 leading-relaxed">
                      Anda dapat mengikuti perkembangan terbaru PPPI melalui:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Website resmi: <a href="https://puteraputeripelajarindonesia.com" target="_blank" rel="noopener noreferrer" className="text-pppi-blue hover:underline">https://puteraputeripelajarindonesia.com</a></li> {/* Ditambahkan https:// dan dibuat link */}
                        <li>
                           Media sosial: Instagram (@pp.pelajarindonesia),
                           {/* Link YouTube asli terlihat rusak, dikomentari. Ganti dengan URL yang benar jika ada.
                           Youtube (https://www.youtube.com/@PutraPutriPelajarIndonesia),
                           */}
                           dan Whatsapp (<a href="https://wa.me/6281110062255" target="_blank" rel="noopener noreferrer" className="text-pppi-blue hover:underline">wa.me/6281110062255</a>) {/* Dibuat link */}
                         </li>
                        <li>Newsletter bulanan (daftar melalui website)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-pppi-lightgray">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="max-w-4xl mx-auto glass-card p-8"> {/* Asumsi 'glass-card' terdefinisi */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pppi-darkblue">
                  Masih punya pertanyaan?
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu
                  untuk menghubungi tim kami langsung
                </p>
                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center gap-2 group text-sm md:text-base" // Asumsi 'btn-primary' terdefinisi
                  >
                    Daftar Sekarang
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-pppi-darkblue">
                  Kontak Kami
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="rounded-full bg-pppi-blue/10 p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pppi-blue" > <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telepon</p>
                      <p className="font-medium">+62 811-1006-2255</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-pppi-blue/10 p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pppi-blue" > <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path> <polyline points="22,6 12,13 2,6"></polyline> </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href="mailto:pp.pelajarindonesia@gmail.com"
                        className="font-medium hover:text-pppi-blue transition-colors"
                      >
                        pp.pelajarindonesia@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;