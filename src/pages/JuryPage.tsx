
import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import JuryCard, { Jury } from "@/components/jury/JuryCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Contoh data juri dengan level sekolah
const mockJury: Jury[] = [
  {
    id: 1,
    name: "Zulian Fatha Nurizal",
    photo: "/images/juri/Zulian.png",
    position: "Penanggungjawab Nasional & Pendiri Putera Puteri Pelajar Indonesia, CEO PT. Askara Swastika Karya, Journalist, Activist, Pageant Analist",
    organization: "PT. Askara Swastika Karya",
    bio: "-",
    level: "SMP"
  },
  {
    id: 2,
    name: "Farhana Nariswari",
    photo: "/images/juri/Farhana.png",
    position: "Puteri Indonesia 2023, Miss International Indonesia 2023",
    organization: "Miss International Indonesia",
    bio: "-",
    level: "SMP"
  },
  {
    id: 3,
    name: "Jeremy Gregory Samatara",
    photo: "/images/juri/Jeremy.png",
    position: "1st RU Lmen Of The Year 2023, Mister International Indonesia 2023",
    organization: "Mister International Indonesia",
    bio: "-",
    level: "SMP"
  },
  {
    id: 4,
    name: "Indra Diwangkara",
    photo: "/images/juri/Indra.png",
    position: "Ketua Himpunan Pramuwisata Indonesia provinsi DKI Jakarta",
    organization: "Pramuwisata Indonesia",
    bio: "-",
    level: "SMP"
  },
  {
    id: 5,
    name: "Iqbal Darmawan",
    photo: "/images/juri/Iqbal.png",
    position: "Duta Muda Asean Indonesia, Dosen Ilmu Komunikasi LSPR Jakarta",
    organization: "LSPR Jakarta",
    bio: "-",
    level: "SMP"
  },
  {
    id: 6,
    name: "Melati Tedja",
    photo: "/images/juri/Melati.png",
    position: "Puteri Indonesia Pendidikan & Kebudayaan 2024, Miss Charm Indonesia 2024",
    organization: "Miss Charm Indonesia",
    bio: "-",
    level: "SMP"
  },
  {
    id: 7,
    name: "Nathanael Yoga",
    photo: "/images/juri/Nathanael.png",
    position: "2. Winner Lmen Of The Year 2023, Mister World Indonesia 2024",
    organization: "Mister World Indonesia",
    bio: "-",
    level: "SMP"
  },
  {
    id: 8,
    name: "Zulian Fatha Nurizal",
    photo: "/images/juri/Zulian.png",
    position: "Penanggungjawab Nasional & Pendiri Putera Puteri Pelajar Indonesia, CEO PT. Askara Swastika Karya, Journalist, Activist, Pageant Analist",
    organization: "PT. Askara Swastika Karya",
    bio: "-",
    level: "SMA"
  },
  {
    id: 9,
    name: "Iqbal Darmawan",
    photo: "/images/juri/Iqbal.png",
    position: "Duta Muda Asean Indonesia, Dosen Ilmu Komunikasi LSPR Jakarta",
    organization: "LSPR Jakarta",
    bio: "-",
    level: "SMA"
  },
  {
    id: 10,
    name: "Ruby Herman",
    photo: "/images/juri/Ruby.png",
    position: "Pengusaha & Property Expert",
    organization: "Independen",
    bio: "-",
    level: "SMA"
  }
];

const JuryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [positionFilter, setPositionFilter] = useState("all");
  
  // Filter juri berdasarkan pencarian, tab, dan posisi
  const filteredJury = mockJury.filter(jury => {
    const matchesSearch = 
      jury.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      jury.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      jury.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      jury.bio.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = 
      activeTab === "all" || 
      (activeTab === "SMA" && jury.level === "SMA") || 
      (activeTab === "SMP" && jury.level === "SMP");
    
    const matchesPosition = 
      positionFilter === "all" || 
      jury.position.toLowerCase().includes(positionFilter.toLowerCase());
    
    return matchesSearch && matchesTab && matchesPosition;
  });

  // Dapatkan daftar posisi unik untuk filter dropdown
  const uniquePositions = Array.from(
    new Set(mockJury.map(jury => jury.position.split(" ")[jury.position.split(" ").length - 1]))
  );

  return (
    <div className="section-container">
      <div className="text-center mb-8" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold text-pppi-darkblue mb-2">
          Dewan Juri
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Kenali para tokoh terkemuka yang menjadi Dewan Juri dalam pemilihan Putera Puteri Pelajar Indonesia
          untuk tingkat SMA dan SMP.
        </p>
      </div>

      {/* Filter dan Search Section */}
      <div className="bg-white rounded-lg p-6 mb-8 shadow-sm" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-end justify-between">
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-medium text-pppi-darkblue mb-2">Filter Juri</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              
              <div className="relative w-full sm:w-[320px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Cari juri berdasarkan nama, posisi, atau organisasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 py-2 w-[300px] md:w-[420px] lg:w-[450px]"
                />
              </div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="text-pppi-blue border-pppi-blue hover:bg-pppi-blue hover:text-white"
            onClick={() => {
              setSearchQuery("");
              setPositionFilter("all");
            }}
          >
            Reset Filter
          </Button>
        </div>
      </div>

      {/* Tabs untuk jenjang pendidikan */}
      <Tabs defaultValue="all" className="mb-8" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full md:w-auto grid grid-cols-3 mb-6">
          <TabsTrigger value="all">Semua Juri</TabsTrigger>
          <TabsTrigger value="SMA">Juri SMA</TabsTrigger>
          <TabsTrigger value="SMP">Juri SMP</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredJury.length > 0 ? (
              filteredJury.map((jury, index) => (
                <div
                  key={jury.id}
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 100)}
                  className="transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <JuryCard jury={jury} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8" data-aos="fade-up">
                <p className="text-gray-500 text-lg">Tidak ada juri yang sesuai dengan pencarian Anda.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="SMA" className="mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredJury.length > 0 ? (
              filteredJury.map((jury, index) => (
                <div
                  key={jury.id}
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 100)}
                  className="transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <JuryCard jury={jury} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8" data-aos="fade-up">
                <p className="text-gray-500 text-lg">Tidak ada juri SMA yang sesuai dengan pencarian Anda.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="SMP" className="mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredJury.length > 0 ? (
              filteredJury.map((jury, index) => (
                <div
                  key={jury.id}
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 100)}
                  className="transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <JuryCard jury={jury} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8" data-aos="fade-up">
                <p className="text-gray-500 text-lg">Tidak ada juri SMP yang sesuai dengan pencarian Anda.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-pppi-lightgray p-8 rounded-xl mt-12" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-2xl font-bold text-pppi-darkblue mb-4">Proses Penilaian</h2>
        <p className="text-gray-700 mb-6">
          Dewan Juri Putera Puteri Pelajar Indonesia menilai para kandidat berdasarkan beberapa aspek penting, meliputi:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="400">
            <div className="w-10 h-10 bg-pppi-blue/10 rounded-full flex items-center justify-center mb-3">
              <GraduationCap className="text-pppi-blue" />
            </div>
            <h3 className="text-lg font-medium text-pppi-darkblue mb-2">Prestasi Akademik</h3>
            <p className="text-gray-600 text-sm">
              Pencapaian di bidang akademik, termasuk nilai, olimpiade, dan penghargaan akademis lainnya.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="500">
            <div className="w-10 h-10 bg-pppi-blue/10 rounded-full flex items-center justify-center mb-3">
              <Users className="text-pppi-blue" />
            </div>
            <h3 className="text-lg font-medium text-pppi-darkblue mb-2">Kepemimpinan</h3>
            <p className="text-gray-600 text-sm">
              Kemampuan memimpin, mengorganisir, dan memberikan pengaruh positif dalam lingkungan sekitar.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="600">
            <div className="w-10 h-10 bg-pppi-blue/10 rounded-full flex items-center justify-center mb-3">
              <HeartHandshake className="text-pppi-blue" />
            </div>
            <h3 className="text-lg font-medium text-pppi-darkblue mb-2">Kontribusi Sosial</h3>
            <p className="text-gray-600 text-sm">
              Partisipasi dalam kegiatan sosial dan kontribusi untuk masyarakat sekitar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import { GraduationCap, Users, HeartHandshake } from "lucide-react";

export default JuryPage;
