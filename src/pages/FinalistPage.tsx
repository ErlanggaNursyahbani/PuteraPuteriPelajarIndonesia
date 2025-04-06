
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from "@/components/ui/pagination";
import FinalistFilter from "@/components/finalists/FinalistFilter";
import FinalistCard, { Finalist } from "@/components/finalists/FinalistCard";
import FinalistDetailDialog from "@/components/finalists/FinalistDetailDialog";
import { Award, GraduationCap, MapPin, School } from "lucide-react";

// Contoh data finalis dengan jenjang pendidikan
const mockFinalists: Finalist[] = [
  {
    "id": 1,
    "name": "Hafidh Devantio Fiqri",
    "photo": "/images/finalis/1.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Kalimantan Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMP"
  },
  {
    "id": 2,
    "name": "Hifni Sahillah Rizky",
    "photo": "/images/finalis/2.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Juara 3 Putera Pelajar Indonesia Tingkat SMP Sederajat",
    "gender": "male",
    "level": "SMP"
  },
  {
    "id": 3,
    "name": "Jason Arvin",
    "photo": "/images/finalis/3.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Sumatera Selatan",
    "year": "2024",
    "achievements": "Juara 2 Putera Pelajar Indonesia Tingkat SMP Sederajat",
    "gender": "male",
    "level": "SMP"
  },
  {
    "id": 4,
    "name": "Muhammad Dafa Pratama",
    "photo": "/images/finalis/4.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Kalimantan Timur",
    "year": "2024",
    "achievements": "Juara 1 Putera Pelajar Indonesia Tingkat SMP Sederajat",
    "gender": "male",
    "level": "SMP"
  },
  {
    "id": 6,
    "name": "Rafka Alkhalis",
    "photo": "/images/finalis/6.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Riau",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMP"
  },
  {
    "id": 7,
    "name": "Rasya Putra Wijaya",
    "photo": "/images/finalis/7.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMP"
  },
  {
    "id": 8,
    "name": "Rezqy Aditya Pratama",
    "photo": "/images/finalis/8.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMP"
  },
  {
    "id": 9,
    "name": "Afilza Mukmin",
    "photo": "/images/finalis/9.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 10,
    "name": "Angel Zefanya N.P",
    "photo": "/images/finalis/10.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Bengkulu",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 12,
    "name": "Aqila Ayu Nareswari",
    "photo": "/images/finalis/12.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Tengah",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 13,
    "name": "Arletta Atsara Raihani Novianti",
    "photo": "/images/finalis/13.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Tengah",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 14,
    "name": "Ayyuba Nur Alan Nur Ilmas",
    "photo": "/images/finalis/14.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 15,
    "name": "Callist Blyth Aspiro",
    "photo": "/images/finalis/15.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Sumatera Selatan",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 16,
    "name": "Crysantya Azzara Mozza Pranata",
    "photo": "/images/finalis/16.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Barat",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 17,
    "name": "Gabriella Josiana Nungraha",
    "photo": "/images/finalis/17.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Tengah",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 18,
    "name": "Iftahayyunurul Qolbi",
    "photo": "/images/finalis/18.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Tengah",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 19,
    "name": "Keisha Clarabella",
    "photo": "/images/finalis/19.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Barat",
    "year": "2024",
    "achievements": "Juara 3 Puteri Pelajar Indonesia Tingkat SMP Sederajat",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 20,
    "name": "Naeva Zahirah",
    "photo": "/images/finalis/20.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Kalimantan Timur",
    "year": "2024",
    "achievements": "Juara 2 Puteri Pelajar Indonesia Tingkat SMP Sederajat",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 21,
    "name": "Pelita Sari Pangaribuan",
    "photo": "/images/finalis/21.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Barat",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 22,
    "name": "Queensha Kayyasah Fakhira",
    "photo": "/images/finalis/22.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Barat",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 23,
    "name": "Sofiana Nur Afifah",
    "photo": "/images/finalis/23.png",
    "school": "Sekolah Menengah Pertama",
    "region": "Jawa Tengah",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMP"
  },
  {
    "id": 24,
    "name": "Achmad Nouval Raychan",
    "photo": "/images/finalis/24.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 25,
    "name": "Ahmad Nurdin Ryzkyandi",
    "photo": "/images/finalis/25.png",
    "school": "Sekolah Menengah Atas",
    "region": "Kalimantan Selatan",
    "year": "2024",
    "achievements": "Juara 1 Putera Pelajar Indonesia Tingkat SMA/K Sederajat",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 26,
    "name": "Ammar A Athallah",
    "photo": "/images/finalis/26.png",
    "school": "Sekolah Menengah Atas",
    "region": "Lampung",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 27,
    "name": "Daffa Trian Jaya",
    "photo": "/images/finalis/27.png",
    "school": "Sekolah Menengah Atas",
    "region": "Sumatera Selatan",
    "year": "2024",
    "achievements": "Juara 2 Putera Pelajar Indonesia Tingkat SMA/K Sederajat",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 28,
    "name": "Daniel A Tambunan",
    "photo": "/images/finalis/28.png",
    "school": "Sekolah Menengah Atas",
    "region": "Sumatera Utara",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 29,
    "name": "Daviq Rizieq",
    "photo": "/images/finalis/29.png",
    "school": "Sekolah Menengah Atas",
    "region": "Riau",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 30,
    "name": "Delo Rivialdo",
    "photo": "/images/finalis/30.png",
    "school": "Sekolah Menengah Atas",
    "region": "Sumatera Barat",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 31,
    "name": "Fajar Septyandi Fadillah",
    "photo": "/images/finalis/31.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Barat",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 32,
    "name": "Fathurachman Firas",
    "photo": "/images/finalis/32.png",
    "school": "Sekolah Menengah Atas",
    "region": "DKI Jakarta",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 33,
    "name": "M Alfin Muzakki",
    "photo": "/images/finalis/33.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 34,
    "name": "M. Sultan D.R",
    "photo": "/images/finalis/34.png",
    "school": "Sekolah Menengah Atas",
    "region": "Sumatera Selatan",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 35,
    "name": "Marfil Lumembang",
    "photo": "/images/finalis/35.png",
    "school": "Sekolah Menengah Atas",
    "region": "Sulawesi Tenggara",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 39,
    "name": "Saputra",
    "photo": "/images/finalis/36.png",
    "school": "Sekolah Menengah Atas",
    "region": "Kalimantan Barat",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 40,
    "name": "Satria Revanditho",
    "photo": "/images/finalis/37.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Tengah",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 41,
    "name": "Supebry Purnama",
    "photo": "/images/finalis/38.png",
    "school": "Sekolah Menengah Atas",
    "region": "Bangka Belitung",
    "year": "2024",
    "achievements": "Juara 3 Putera Pelajar Indonesia Tingkat SMA/K Sederajat",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 42,
    "name": "Tri Yatmojo",
    "photo": "/images/finalis/39.png",
    "school": "Sekolah Menengah Atas",
    "region": "Sumatera Selatan",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "male",
    "level": "SMA"
  },
  {
    "id": 43,
    "name": "Anggun Puspa Rani",
    "photo": "/images/finalis/40.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 44,
    "name": "Annisa Bunga Safira",
    "photo": "/images/finalis/41.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Tengah",
    "year": "2024",
    "achievements": "Juara 3 Puteri Pelajar Indonesia Tingkat SMA/K Sederajat",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 45,
    "name": "Astin Dwi E",
    "photo": "/images/finalis/42.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 46,
    "name": "Aufan Nafila",
    "photo": "/images/finalis/43.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 47,
    "name": "Aulya Zakira",
    "photo": "/images/finalis/44.png",
    "school": "Sekolah Menengah Atas",
    "region": "Lampung",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 48,
    "name": "Ayu Keysa S.",
    "photo": "/images/finalis/45.png",
    "school": "Sekolah Menengah Atas",
    "region": "Lampung",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 49,
    "name": "Azizah Shofura Ramadhani",
    "photo": "/images/finalis/46.png",
    "school": "Sekolah Menengah Atas",
    "region": "Lampung",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 50,
    "name": "Chelsea Suci Tayomi",
    "photo": "/images/finalis/47.png",
    "school": "Sekolah Menengah Atas",
    "region": "Riau",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 51,
    "name": "Emily Jane Martanegara",
    "photo": "/images/finalis/48.png",
    "school": "Sekolah Menengah Atas",
    "region": "DKI Jakarta",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 52,
    "name": "Jacqueline Surya Alim",
    "photo": "/images/finalis/49.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Barat",
    "year": "2024",
    "achievements": "Juara 1 Puteri Pelajar Indonesia Tingkat SMA/K Sederajat",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 53,
    "name": "Keisha Faiha Ariawan",
    "photo": "/images/finalis/50.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Timur",
    "year": "2024",
    "achievements": "Juara 2 Puteri Pelajar Indonesia Tingkat SMA/K Sederajat",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 54,
    "name": "Keisha Nabilla Khansa",
    "photo": "/images/finalis/51.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Barat",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 55,
    "name": "Petty Fazriati",
    "photo": "/images/finalis/52.png",
    "school": "Sekolah Menengah Atas",
    "region": "Kalimantan Selatan",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 56,
    "name": "Putri Nabila Amanda",
    "photo": "/images/finalis/53.png",
    "school": "Sekolah Menengah Atas",
    "region": "DKI Jakarta",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 57,
    "name": "Safina Tunnajah",
    "photo": "/images/finalis/54.png",
    "school": "Sekolah Menengah Atas",
    "region": "Lampung",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 58,
    "name": "Sumayyah Rahmadanti Jacub",
    "photo": "/images/finalis/55.png",
    "school": "Sekolah Menengah Atas",
    "region": "Jawa Barat",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
  {
    "id": 59,
    "name": "Triasa Intan Prahiba",
    "photo": "/images/finalis/56.png",
    "school": "Sekolah Menengah Atas",
    "region": "Bengkulu",
    "year": "2024",
    "achievements": "Finalis",
    "gender": "female",
    "level": "SMA"
  },
];

const FinalistPage = () => {
  const [filters, setFilters] = useState({
    year: "all",
    region: "all",
    search: "",
    level: "all"
  });
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState("all");
  const [selectedFinalist, setSelectedFinalist] = useState<Finalist | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleViewProfile = (id: number) => {
    const finalist = mockFinalists.find(f => f.id === id);
    if (finalist) {
      setSelectedFinalist(finalist);
      setOpenDialog(true);
    }
  };

  const filteredFinalists = mockFinalists.filter(finalist => {
    const matchesYear = filters.year === "all" || finalist.year === filters.year;
    const matchesRegion = filters.region === "all" || finalist.region.toLowerCase() === filters.region;
    const matchesSearch = filters.search === "" || 
      finalist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      finalist.school.toLowerCase().includes(filters.search.toLowerCase());
    const matchesGender = tab === "all" || 
      (tab === "male" && finalist.gender === "male") || 
      (tab === "female" && finalist.gender === "female");
    const matchesLevel = filters.level === "all" || finalist.level === filters.level;
    
    return matchesYear && matchesRegion && matchesSearch && matchesGender && matchesLevel;
  });

  // Pagination
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredFinalists.length / itemsPerPage);
  const paginatedFinalists = filteredFinalists.slice(
    (page - 1) * itemsPerPage, 
    page * itemsPerPage
  );

  return (
    <div className="section-container">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-pppi-darkblue mb-2">
          Finalis Putera Puteri Pelajar Indonesia
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Kenali para finalis Putera Puteri Pelajar Indonesia tingkat SMA/K Sederajat dan SMP 
          yang telah menunjukkan prestasi luar biasa dalam akademik, kepemimpinan, dan kontribusi sosial.
        </p>
      </div>

      <FinalistFilter onFilterChange={setFilters} />

      <Tabs defaultValue="all" className="mb-8" onValueChange={setTab}>
        <TabsList className="w-full md:w-auto grid grid-cols-3 mb-6">
          <TabsTrigger value="all">Semua Finalis</TabsTrigger>
          <TabsTrigger value="male">Putera</TabsTrigger>
          <TabsTrigger value="female">Puteri</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedFinalists.length > 0 ? (
              paginatedFinalists.map(finalist => (
                <FinalistCard 
                  key={finalist.id} 
                  finalist={finalist} 
                  onViewProfile={handleViewProfile} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">Tidak ada finalis yang ditemukan sesuai filter.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="male" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedFinalists.length > 0 ? (
              paginatedFinalists.map(finalist => (
                <FinalistCard 
                  key={finalist.id} 
                  finalist={finalist} 
                  onViewProfile={handleViewProfile} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">Tidak ada finalis putera yang ditemukan sesuai filter.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="female" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedFinalists.length > 0 ? (
              paginatedFinalists.map(finalist => (
                <FinalistCard 
                  key={finalist.id} 
                  finalist={finalist} 
                  onViewProfile={handleViewProfile} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">Tidak ada finalis puteri yang ditemukan sesuai filter.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setPage(prev => Math.max(prev - 1, 1))} 
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
                size="default"
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink 
                  isActive={page === i + 1} 
                  onClick={() => setPage(i + 1)}
                  size="default"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} 
                className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                size="default"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <FinalistDetailDialog 
        finalist={selectedFinalist} 
        open={openDialog} 
        onOpenChange={setOpenDialog}
      />
    </div>
  );
};

export default FinalistPage;
