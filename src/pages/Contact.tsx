import React, { useState, FormEvent } from "react";
// Pastikan semua ikon yang relevan diimpor
import { Mail, Phone, Clock, Send, AlertCircle } from "lucide-react";
// CheckIcon mungkin tidak diperlukan lagi karena tidak ada pesan sukses

// --- Definisi Tipe untuk State Form ---
type FormData = {
  name: string;
  asalDaerah: string; // Mengganti email dengan asalDaerah
  subject: string;
  message: string;
};

// --- Definisi Tipe untuk Error Validasi ---
type ValidationErrors = {
  [key in keyof FormData]?: string; // Otomatis mengikuti keys dari FormData
};

const Contact = () => {
  // --- State untuk Data Formulir ---
  const [formData, setFormData] = useState<FormData>({
    name: "",
    asalDaerah: "", // State awal untuk asalDaerah
    subject: "",
    message: "",
  });

  // --- State untuk Pesan Error Validasi ---
  const [errors, setErrors] = useState<ValidationErrors>({});

  // --- State untuk Status Loading Tombol Submit ---
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // --- Handler untuk Perubahan Input ---
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Hapus error untuk field ini saat pengguna mulai mengetik
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  // --- Fungsi Validasi Formulir ---
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap wajib diisi";
      isValid = false;
    }

    // Validasi untuk Asal Daerah
    if (!formData.asalDaerah.trim()) {
      newErrors.asalDaerah = "Asal daerah wajib diisi";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subjek wajib diisi";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
      isValid = false;
    } else if (formData.message.length < 10) {
      // Anda bisa sesuaikan atau hapus validasi panjang pesan
      newErrors.message = "Pesan minimal 10 karakter";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // --- Handler untuk Submit Formulir ---
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Mencegah refresh halaman
    setIsSubmitting(true); // Mulai loading

    if (validateForm()) {
      // Jika data valid, siapkan redirect ke WhatsApp
      const { name, asalDaerah, subject, message } = formData;

      // --- PENTING: GANTI NOMOR INI DENGAN NOMOR ADMIN PPPI YANG BENAR ---
      // Format: KodeNegaraNomor (tanpa +, spasi, atau -). Contoh: 6281234567890
      const adminPhoneNumber = "6281110062255"; // <--- GANTI NOMOR INI!

      // Buat template pesan WhatsApp
      const waMessage = `Halo Admin Putera Puteri Pelajar Indonesia !\n\nPerkenalkan : \nSaya : ${name}, \nAsal :  ${asalDaerah}, \nIngin berdiskusi terkait : *${subject}*.\n\nPesan : \n${message}`;

      // Encode pesan agar aman dalam URL
      const encodedMessage = encodeURIComponent(waMessage);

      // Buat URL lengkap WhatsApp
      const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;
      // Alternatif: const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminPhoneNumber}&text=${encodedMessage}`;

      // Arahkan pengguna ke URL WhatsApp
      window.location.href = whatsappUrl;

      // Reset state submitting setelah jeda (jika redirect gagal)
      setTimeout(() => setIsSubmitting(false), 1500);
    } else {
      // Jika data tidak valid
      console.error("Validation Failed:", errors);
      setIsSubmitting(false); // Hentikan loading
    }
  };

  // --- Render Komponen ---
  return (
    <div className="bg-white min-h-screen">
      {/* Bagian Hero (TIDAK BERUBAH) */}
      <section className="py-16 md:py-24 px-4 text-center bg-pppi-lightgray">
        <div className="container mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-pppi-blue/10 text-pppi-blue rounded-full mb-3">
            Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pppi-darkblue">
            Kontak Kami
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan, masukan, atau ingin tahu lebih banyak tentang
            PPPI? Kami senang mendengar dari Anda.
          </p>
        </div>
      </section>

      {/* Informasi Kontak (TIDAK BERUBAH) */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Email */}
            <div className="glass-card p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-pppi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-pppi-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-pppi-darkblue">
                Email
              </h3>
              <a
                href="mailto:pp.pelajarindonesia@gmail.com"
                className="text-gray-700 hover:text-pppi-blue transition-colors"
              >
                pp.pelajarindonesia@gmail.com
              </a>
            </div>

            {/* Telepon */}
            <div className="glass-card p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-pppi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-pppi-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-pppi-darkblue">
                Telepon
              </h3>
              <a
                href="tel:+6281110062255"
                className="text-gray-700 hover:text-pppi-blue transition-colors"
              >
                +62 811-1006-2255
              </a>
            </div>

            {/* Jam Operasional */}
            <div className="glass-card p-6 text-center hover-scale">
              <div className="w-12 h-12 bg-pppi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-pppi-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-pppi-darkblue">
                Jam Operasional
              </h3>
              <p className="text-gray-700">
                Senin - Jumat
                <br />
                09:00 - 19:00 WIB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulir Kontak dan Peta/Gambar */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-lg">
            {/* Bagian Peta/Gambar (TIDAK BERUBAH) */}
            <div className="lg:w-1/2 h-1/2 bg-gray-200 relative">
              {/* Pastikan path gambar ini benar */}
              <img
                src="/images/logo/PPPI.png"
                alt="Putera Puteri Pelajar Indonesia"
                className="w-full h-full object-cover"
              />
            </div>

            {/* --- BAGIAN FORMULIR YANG DIPERBARUI --- */}
            <div className="lg:w-1/2 bg-white p-8 lg:p-12">
              <h2 className="text-2xl font-semibold mb-6 text-pppi-darkblue">
                Kirim Pesan Kepada Kami via WhatsApp
              </h2>

              {/* Formulir akan selalu tampil */}
              <form onSubmit={handleSubmit}>
                {/* Input Nama Lengkap */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Nama Lengkap*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-pppi-blue/50`}
                    placeholder="Masukkan nama Anda"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={14} className="mr-1" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Input Asal Daerah (Menggantikan Email) */}
                <div className="mb-6">
                  <label
                    htmlFor="asalDaerah"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Asal Daerah*
                  </label>
                  <input
                    type="text" // Type text, bukan email
                    id="asalDaerah"
                    name="asalDaerah" // Pastikan name="asalDaerah"
                    value={formData.asalDaerah}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.asalDaerah ? "border-red-500" : "border-gray-300" // Cek error asalDaerah
                    } focus:outline-none focus:ring-2 focus:ring-pppi-blue/50`}
                    placeholder="Masukkan kota/kabupaten asal Anda"
                  />
                  {errors.asalDaerah && ( // Tampilkan error asalDaerah
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={14} className="mr-1" />{" "}
                      {errors.asalDaerah}
                    </p>
                  )}
                </div>

                {/* Input Subjek */}
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subjek*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-pppi-blue/50`}
                    placeholder="Masukkan subjek pesan"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={14} className="mr-1" />{" "}
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Input Pesan */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Pesan*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-pppi-blue/50`}
                    placeholder="Ketik pesan Anda di sini..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={14} className="mr-1" />{" "}
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Tombol Submit (Arahkan ke WhatsApp) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    "Mengalihkan ke WhatsApp..." // Teks saat loading
                  ) : (
                    <>
                      Kirim via WhatsApp {/* Teks tombol */}
                      <Send size={16} className="ml-2" /> {/* Ikon Send */}
                    </>
                  )}
                </button>
              </form>
              {/* Tidak ada lagi bagian 'Pesan Sukses' */}
            </div>
          </div>
        </div>
      </section>

      {/* Media Sosial (TIDAK BERUBAH) */}
      <section className="pb-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6 text-pppi-darkblue">
            Terhubung Dengan Kami
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ikuti kami di media sosial untuk mendapatkan informasi terbaru
            tentang berita, acara, dan kesempatan.
          </p>

          <div className="flex justify-center space-x-6">
            {/* Ganti href="#" dengan link media sosial yang sebenarnya */}

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-pppi-blue flex items-center justify-center text-white hover-scale"
              aria-label="Tiktok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M219.6 79.7a66.4 66.4 0 0 1-40.1-13.2v70.3a80 80 0 1 1-88-79.6v32.1a47.8 47.8 0 1 0 47.8 47.8V24h32a66.3 66.3 0 0 0 48.3 55.7Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/pp.pelajarindonesia/"
              className="w-12 h-12 rounded-full bg-pppi-blue flex items-center justify-center text-white hover-scale"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@PutraPutriPelajarIndonesia"
              className="w-12 h-12 rounded-full bg-pppi-blue flex items-center justify-center text-white hover-scale"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; // Jangan lupa export komponen
