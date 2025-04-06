
import React from "react";
import { ArrowRight, Mail, Phone, ExternalLink } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const Registration = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 text-center bg-pppi-lightgray">
        <div className="container mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-pppi-blue/10 text-pppi-blue rounded-full mb-3">
            Pendaftaran
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pppi-darkblue">
            Daftar PPPI
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas pemimpin muda Indonesia
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Registration Info */}
          <GlassCard className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-pppi-darkblue">
              Informasi Pendaftaran
            </h2>
            <p className="text-gray-700 mb-6">
              Putera Puteri Pelajar Indonesia (PPPI) membuka kesempatan bagi para pelajar Indonesia untuk bergabung dalam program pengembangan kepemimpinan dan bakat.
            </p>
            
            <div className="bg-pppi-blue/5 p-6 rounded-lg border border-pppi-blue/20 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-pppi-darkblue">
                Ketentuan Pendaftaran
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <ArrowRight size={16} className="mt-1 mr-2 text-pppi-blue flex-shrink-0" />
                  <span>Terbuka untuk pelajar SMP dan SMA/sederajat seluruh Indonesia</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="mt-1 mr-2 text-pppi-blue flex-shrink-0" />
                  <span>Memiliki prestasi akademik/non-akademik</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="mt-1 mr-2 text-pppi-blue flex-shrink-0" />
                  <span>Aktif dalam kegiatan organisasi atau kemasyarakatan</span>
                </li>
              </ul>
            </div>
          </GlassCard>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4 text-pppi-darkblue">
                Kontak PPPI
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-pppi-blue mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a href="mailto:pp.pelajarindonesia@gmail.com" className="text-pppi-blue hover:underline">
                      pp.pelajarindonesia@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-pppi-blue mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Telepon</p>
                    <a href="tel:+6281110062255" className="text-gray-600">
                      +62 811-1006-2255
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            {/* Registration Link Card */}
            <GlassCard className="flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-pppi-darkblue">
                Link Pendaftaran
              </h3>
              <p className="text-gray-700 mb-6">
                Untuk mendaftar program PPPI, silakan kunjungi halaman pendaftaran resmi melalui tautan berikut:
              </p>
              <div className="mt-auto">
                <a 
                  href="https://linktr.ee/pp.pelajarindonesia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-pppi-blue text-white py-3 px-6 rounded-lg hover:bg-pppi-blue/90 transition-colors"
                >
                  Daftar Sekarang
                  <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
