
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimations } from "@/hooks/useAnimations";
import { 
  ArrowRight, Calendar, User, Tag, Search, 
  Bookmark, TrendingUp, ChevronRight, Image as ImageIcon,
  X, PlayCircle, Video
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import StackedVideoCard from "@/components/gallery/StackedVideoCard";
import LazyImage from "@/components/common/LazyImage";

// Gallery item type
interface GalleryItem {
  id: number;
  image?: string;
  videoUrl?: string;
  title: string;
  description: string;
  date: string;
  category: string;
  year: number;
  isHighlighted?: boolean;
  type?: 'image' | 'video';
}

// News article type
interface Article {
  id: number;
  title: string;
  excerpt: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  website: string;
  author: string;
  date: string;
  image?: string;
  videoUrl?: string;
  category: string;
  tags: string[];
  isHighlighted?: boolean;
  year: number;
  type?: 'image' | 'video';
}

// Year card type for both gallery and news
interface YearCard {
  year: number;
  title: string;
  description: string;
  thumbnailImage: string;
  count: number;
}

const NewsAndGallery = () => {
  // Initialize animations
  useAnimations();

  // Tab state
  const [activeTab, setActiveTab] = useState<"gallery" | "news">("gallery");
  
  // States for both sections
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchFocused, setSearchFocused] = useState(false);
  
  // Gallery items
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  // News articles
  const [articles, setArticles] = useState<Article[]>([]);

  // Load sample data
  useEffect(() => {
    // Sample gallery data
    const galleryData: GalleryItem[] = [
      {
        id: 1,
        image: "/images/kegiatan/final3.jpg",
        title: "Grand Final PPPI 2024",
        description: "Malam puncak pemilihan Putera Puteri Pelajar Indonesia tahun 2024",
        date: "27 Juni 2024",
        category: "Grand Final",
        year: 2024,
        type: 'image'
      },
      {
        id: 2,
        image: "/images/kegiatan/final1.jpg",
        title: "Foto Bersama Juara 1 dan Dewan Juri PPPI 2024",
        description: "Dewan Juri dan Pemenang Juara 1 Putera Puteri Pelajar Indonesia 2024",
        date: "27 Juni 2024",
        category: "Grand Final",
        year: 2024,
        type: 'image'
      },
      {
        id: 3,
        videoUrl: "https://www.youtube.com/watch?v=Uw1SQ2a3NNI",
        title: "Video Grand Final PPPI 2024",
        description: "Rekaman acara grand final Putera Puteri Pelajar Indonesia 2024",
        date: "27 Juni 2024",
        category: "Grand Final",
        year: 2024,
        type: 'video',
        isHighlighted: true
      },
      {
        id: 4,
        image: "/images/kegiatan/final5.jpg",
        title: "Foto Bersama Finalis PPPI 2024 pada malam Grand Final",
        description: "Seluruh finalis berfoto bersama pada malam Grandfinal Putera Puteri Pelajar Indonesia",
        date: "27 Juni 2024",
        category: "Grand Final",
        year: 2024,
        type: 'image'
      },
      {
        id: 5,
        image: "/images/kegiatan/tour-pertanian1.JPG",
        title: "Pengenalan Tanaman Ketahanan Pangan",
        description: "Tour belajar Tour belajar pertanian perkotaan bersama Dinas Ketahanan Pangan Kelautan dan Pertanian Provinsi DKI Jakarta perkotaan bersama Dinas Ketahanan Pangan Kelautan dan Pertanian Provinsi DKI Jakarta",
        date: "24 Juni 2024",
        category: "Tour Pertanian",
        year: 2024,
        type: 'image'
      },
      {
        id: 6,
        image: "/images/kegiatan/tour-pertanian2.JPG",
        title: "Finalis berkeliling pertanian",
        description: "Finalis berkeliling pertanian dibantu petugas dengan menaiki traktor",
        date: "24 Juni 2024",
        category: "Tour Pertanian",
        year: 2024,
        type: 'image'
      },
      {
        id: 7,
        image: "/images/kegiatan/tour-pertanian3.JPG",
        title: "Finalis Workshop Ketahanan Pangan",
        description: "Workshop materi tentang ketahanan pangan yang diberikan oleh ahli Dinas DKPKP",
        date: "24 Juni 2024",
        category: "Tour Pertanian",
        year: 2024,
        type: 'image'
      },
      {
        id: 8,
        image: "/images/kegiatan/tour-pertanian4.JPG",
        title: "Foto Bersama Dinas DKPKP",
        description: "Foto Bersama Finalis dan Dinasa DKPKP After Touring Workshop",
        date: "24 Juni 2024",
        category: "Tour Pertanian",
        year: 2024,
        type: 'image'
      },
      {
        id: 9,
        videoUrl: "https://www.youtube.com/watch?v=xCaEtl7sMZ4",
        title: "Dokumentasi Tour Pertanian PPPI 2024",
        description: "Rekaman kegiatan Tour pertanian Putera Puteri Pelajar Indonesia 2024",
        date: "24 Juni 2024",
        category: "Tour Pertanian",
        year: 2024,
        type: 'video'
      },
      {
        id: 10,
        image: "/images/kegiatan/tour-jkt3.JPG",
        title: "Foto bersama All Finalis",
        description: "Para finalis melakukan foto bersama saat sampai dijakarta",
        date: "28 Juni 2024",
        category: "Tour Jakarta",
        year: 2024,
        type: 'image'
      },
      {
        id: 11,
        image: "/images/kegiatan/tour-jkt2.JPG",
        title: "Sambutan Hangat Pemerintah Provinsi DKI Jakarta",
        description: "Para finalis disambut dengan baik oleh pemerintah provinsi DKI Jakarta",
        date: "28 Juni 2024",
        category: "Tour Jakarta",
        year: 2024,
        type: 'image'
      },
      {
        id: 12,
        image: "/images/kegiatan/tour-jkt1.JPG",
        title: "Suasana Stasiun Jakarta",
        description: "Para finalis melakukan proses masuk distasiun jakarta",
        date: "28 Juni 2024",
        category: "Tour Jakarta",
        year: 2024,
        type: 'image'
      },
      {
        id: 13,
        image: "/images/kegiatan/malambakat1.jpg",
        title: "Penampilan Tari Daerah Finalis",
        description: "Penampilan Finalis pada malam bakat PPPI 2024",
        date: "26 Juni 2024",
        category: "Malam Bakat",
        year: 2024,
        type: 'image'
      },
      {
        id: 14,
        image: "/images/kegiatan/malambakat2.JPG",
        title: "Penampilan Tarian Daerah Khas Finalis",
        description: "Penampilan Finalis pada malam bakat PPPI 2024",
        date: "26 Juni 2024",
        category: "Malam Bakat",
        year: 2024,
        type: 'image'
      },
      {
        id: 15,
        image: "/images/kegiatan/malambakat3.JPG",
        title: "Penampilan Drama Aktor Horor Finalis",
        description: "Penampilan Finalis Pada malam bakat PPPI 2024",
        date: "26 Juni 2024",
        category: "Malam Bakat",
        year: 2024,
        type: 'image'
      },
      {
        id: 16,
        videoUrl: "https://www.youtube.com/watch?v=OErz1nQK8dU",
        title: "Highlights Malam Bakat PPPI 2024",
        description: "Video highlights penampilan-penampilan terbaik finalis pada malam bakat",
        date: "26 Juni 2024",
        category: "Malam Bakat",
        year: 2024,
        type: 'video'
      },
      {
        id: 17,
        image: "/images/kegiatan/malambakat5.jpg",
        title: "Foto Bersama Finalis",
        description: "Para finalis melakukan sesi foto bersama pada malam bakat PPPI 2024",
        date: "26 Juni 2024",
        category: "Malam Bakat",
        year: 2024,
        type: 'image'
      },
      {
        id: 18,
        image: "/images/kegiatan/malambakat6.jpg",
        title: "Foto Bersama Finalis",
        description: "Para finalis melakukan sesi foto bersama pada malam bakat PPPI 2024",
        date: "26 Juni 2024",
        category: "Malam Bakat",
        year: 2024,
        type: 'image'
      },
      {
        id: 19,
        image: "/images/kegiatan/materi1.jpg",
        title: "Materi oleh Puteri Indonesia",
        description: "Penyampaian materi oleh puteri indonesia",
        date: "25 Juni 2024",
        category: "Workshop",
        year: 2024,
        type: 'image'
      },
      {
        id: 20,
        image: "/images/kegiatan/materi2.jpg",
        title: "Materi oleh PPPI 2024",
        description: "Para finalis menerima materi pengembangan diri oleh PPPI 2024",
        date: "25 Juni 2024",
        category: "Workshop",
        year: 2024,
        type: 'image'
      },
      {
        id: 21,
        image: "/images/kegiatan/materi3.jpg",
        title: "Foto Bersama Puteri Indonesia",
        description: "Para finalis melakukan sesi foto bersama after workshop pengembangan diri bersama puteri indonesia",
        date: "25 Juni 2024",
        category: "Workshop",
        year: 2024,
        type: 'image'
      },
      {
        id: 22,
        image: "/images/kegiatan/materi4.jpg",
        title: "Potret Finalis saat Materi oleh Puteri Indonesia",
        description: "",
        date: "25 Juni 2024",
        category: "Workshop",
        year: 2024,
        type: 'image'
      }
    ];
    
    // Sample news data
    const newsData: Article[] = [
      {
        id: 1,
        title: "Putera Puteri Pelajar Indonesia 2024, Berkarya dan Menginspirasi  | Radio Republik Indonesia",
        excerpt: "KBRN, Pekanbaru: Dua pelajar asal Pekanbaru, Riau, Jelita (17 tahun) dan Rafka (14 tahun), mengharumkan nama daerah di ajang Putera Puteri Pelajar Indonesia 2024. Jelita Mei Barbie, siswi kelas 2 SMAN 7 Pekanbaru berhasil meraih gelar Putri Pelajar Best Catwalk 2024, sedangkan Rafka Alkhalis dari SMP Muhammadiyah 1 Pekanbaru, mendapatkan gelar Putra Pelajar Impacful 2024.",
        paragraph1: "Pengalaman mengikuti Putera Puteri Pelajar Indonesia 2024 menjadi kenangan berharga bagi Jelita dan Rafka. Mereka berharap dapat terus berkarya dan menginspirasi generasi muda lainnya untuk mengejar mimpi mereka.",
        paragraph2: "\"Sebuah kehormatan dan kebanggan karena bisa mendapatkan gelar ini, karena semua gelar sama sama bisa menginspirasi dan berdampak bagi generasi muda agar bisa terus mengembangkan minat bakat karya mereka dalam dunia pendidikan,\" kata Rafka saat berbagi cerita bersama RRI Pro 2 Pekanbaru dalam program Sore Ceria, Kamis (11/7/2024).",
        paragraph3: "Bagi Jelita, ini merupakan pengalaman pertamanya mengikuti ajang nasional. Ia mengaku sudah terbiasa dengan berbagai kegiatan terutama dalam dunia modeling. Jelita dan Rafka sebelumnya sudah mempersiapkan diri sebelum melangkah ke jenjang nasional dengan latihan catwalk, public speaking hingga sesi tanya jawab. Sementara Rafka menyebutkan peserta berasal dari berbagai daerah di Indonesia, sehingga perlu persiapan dan latihan yang dibantu oleh manajemen. \"Ada 60 peserta dari berbagai daerah di Indonesia, jadi sudah pasti kita persiapan dan latihan yang dibantu oleh manajemen kita,\" ujar  Rafka.",
        paragraph4: "Selama sepekan di Jakarta, Jelita dan Rafka mengikuti berbagai rangkaian kegiatan, seperti pembekalan materi dari Puteri Indonesia 2023  Farhana Nariswari, tour jakarta, talent show, hingga malam puncak grand final. \"Saat talent show Jelita menampilkan tari Tampi mix modern dance, sedangkan Rafka menampilkan tari lancang kuning yang sudah dipersiapkan khusus untuk ajang ini,\" tuturnya.",
        website: "https://www.rri.co.id/daerah/820579/putera-puteri-pelajar-indonesia-2024-berkarya-dan-menginspirasi",
        author: "Radio Republik Indonesia - rri.co.id",
        date: "2024-07-11",
        image: "/images/berita/rri.jpeg",
        category: "Radio Nasional",
        tags: ["Talkshow", "Achievment", "Duta"],
        year: 2024,
        type: 'image'
      },
      {
        id: 2,
        title: "Putra Putri Pelajar Indonesia Dikenalkan Urban Farming Jakarta",
        excerpt: "Sebanyak 61 orang yang merupakan Putra Putri Pelajar Indonesia Tahun 2024 melakukan kunjungan belajar di Kebun Bibit Cibubur dan Agroeduwisata Cilangkap, Jakarta Timur, Selasa (25/6).",
        paragraph1: "Putra Putri Pelajar Indonesia, merupakan kontes khusus pelajar yang berfokus pada pengembangan potensi pelajar menuju Indonesia Emas 2045. Kunjungan mereka untuk mengenal penerapan pertanian perkotaan (urban farming) di Jakarta. Materi yang diberikan di antaranya, Pengenalan Taman Urban Healing Garden dan Hidroponik, Praktik Pengujian Cepat (Rapid Test Kit) Parameter: Formalin dan Pestisida/Klorin dan Praktik Budi Daya secara Vegetatif (sambung pucuk). Mereka juga melakukan tanam bersama tanaman jagung dan panen bersama tanaman cabai.",
        paragraph2: "Pada kesempatan itu, para pelajar juga mengunjungi UPT Pusat Promosi dan Sertifikasi Hasil Pertanian (PPSHP) dan mobil Laboratorium Keliling, termasuk dikenalkan mengidentifikasi hama penyakit di mobil Klinik Tanaman. Kepala Dinas Ketahanan Pangan, Kelautan dan Pertanian (KPKP) DKI Jakarta, Suharini Eliawati mengatakan, kegiatan ini bertujuan memperkenalkan anak-anak muda bahwa Jakarta dengan keterbatasan lahannya memiliki konsen dan atensi terhadap kebutuhan pangan sendiri, baik skala kebutuhan rumah tangga maupun bisnis. \"Supaya mereka memahami apa yang dilakukan Jakarta untuk mewujudkan ketahanan pangan, salah satunya melalui kunjungan ini. Bagaimana membudidayakan tanaman-tanaman cepat panen, membekali mereka untuk keamanan pangannya di laboratorium untuk investasi kesehatan masa depan. Sebagai agen perubahan mereka harus punya added value dan rasa percaya diri untuk menyampaikan saran serta masukan terhadap pemerintah,\" ujar Eli.",
        paragraph3: "Ia menyampaikan, urban farming berkembang pesat di Jakarta. Maka dari itu, kunjungan ini bisa menjadi daya tarik bagi anak-anak muda untuk terjun ke dunia pertanian sebagai petani muda dan mengatasi masalah regenerasi petani yang lambat. Eli menjelaskan, urban farming menjadi salah satu solusi mengurangi ketergantungan sumber pangan kawasan perkotaan ke kawasan perdesaan. Selain itu juga membantu pengendalian inflasi, mengembangkan ekonomi lokal dan meningkatkan kualitas lingkungan perkotaan. \"Kalau di daerah lain petaninya sudah tidak muda lagi, sedangkan di Jakarta petaninya ada lahannya terbatas. Dinas KPKP juga mewadahi petani milenial dan mengembangkan smart farming seperti hidroponik. Jangan menunggu tua menjadi petani, bahwa bisnis itu bisa kita kelola,\" kata Eli. Salah satu peserta Putra Putri Pelajar Indonesia Tahun 2024 dari Jawa Barat, Keisha Nabilla Khansa mengaku senang dengan dilaksanakannya kunjungan belajar ini karena menambah wawasannya dengan melihat potensi urban farming.",
        paragraph4: "\"Kegiatan ini sangat edukatif, kita juga memasuki lab sehingga kita bisa mengetahui bagaimana proses beras tersebut dan bibit tanaman yang ternyata kita baru tau juga. Saya juga berkesempatan perdana naik traktor, ini hal yang sangat seru dan pengalaman tidak terlupakan. Semoga Indonesia dapat mengembangkan agrikulturnya,\" tandas Nabilla.",
        website: "https://m.beritajakarta.id/read/137801/putra-putri-pelajar-indonesia-dikenalkan-urban-farming-jakarta",
        author: "Berita Jakarta",
        date: "2024-06-25",
        image: "/images/berita/beritajakarta.jpg",
        category: "Berita Nasional",
        tags: ["Pertanian", "Workshop", "Tour"],
        year: 2024,
        type: 'image'
      },
      {
        id: 3,
        title: "Jenifer Cung Terpilih Jadi Puteri Pelajar Kalimantan Barat",
        excerpt: "KBRN, Entikong: Puteri Pelajar Kalimantan Barat memainkan peran penting dalam mempromosikan pendidikan berkualitas dan memberdayakan generasi muda di provinsi ini. Sebagai simbol dari semangat juang pelajar, mereka diharapkan dapat menjadi teladan dalam bidang pendidikan dan sosial.",
        paragraph1: "Jenifer Cung, pelajar asal Kalimantan Barat, telah terpilih sebagai Puteri Pelajar Kalimantan Barat 2025 pada ajang Putera-Puteri Kalbar. Ia berpartsipasi pada ajang tersebut dengan melewati beberapa proses yang cukup panjang mulai dari latihan public speaking, catwalk dan menggali wawasan serta isu-isu seputar pendidikan dan juga budaya daerah. \"Sesuai visi dan misinya yaitu untuk mewujudkan generasi emas pelajar Indonesia tahun 2045 mendatang, maka dari itu saya terinspirasi dan termotivasi untuk menjadi bagian dari mereka,\" ungkap Jenifer dalam Obrolan Sore Ceria di RRI SP Sanggau, Rabu (26/2/2025).",
        paragraph2: "Jenifer Cung berharap, dapat menjadi contoh bagi generasi muda untuk terus berprestasi dan berkontribusi positif bagi masyarakat khususnya di bidang pendidikan. Jenifer juga berbagai tips untuk anak muda pelajar untuk giat berkolaborasi dengan teknologi untuk mendukung proses belajar.",
        paragraph3: "\"belajar itu tidak hanya dari buku, tapi bisa menggunakan teknologi yang ada seperti Quis is misalnya, sehingga belajar juga jadi menyenangkan tidak membosankan,\" katanya",
        paragraph4: "",
        website: "https://www.rri.co.id/daerah/1353303/jenifer-cung-terpilih-jadi-puteri-pelajar-kalimantan-barat",
        author: "Radio Republik Indonesia",
        date: "2025-02-26",
        image: "/images/berita/rri2.jpeg",
        category: "Radio Nasional",
        tags: ["Talkshow", "pengembangan", "pendidikan"],
        year: 2025,
        type: 'image'
      },
      {
        id: 4,
        title: "58 Putra Putri Pelajar Indonesia Kunjungi Kebun Bibit Cibubur",
        excerpt: "58 Putra Putri Pelajar Indonesia 2024 mengunjungi Kebun Bibit Cibubur dan Agroeduwisata Cilangkap, Jakarta Timur, Selasa (25/6). Kunjungan digelar untuk memperkenalkan bidang pertanian perkotaan (urban farming) Jakarta untuk para peserta.",
        paragraph1: "",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        website: "https://m.beritajakarta.id/video/play/33611/58-putra-putri-pelajar-indonesia-kunjungi-kebun-bibit-cibubur",
        author: "Berita Jakarta",
        date: "2024-06-25",
        videoUrl: "https://www.youtube.com/watch?v=fNVJTw_yCo4",
        category: "Tour Workshop",
        tags: ["pendidikan", "Tour", "Workshop"],
        year: 2024,
        type: 'video'
      },
      {
        id: 5,
        title: "Mengenal Sosok Pelajar Jacqueline Surya, Ingin Wujudkan Generasi Emas, Menjalankan Aksi Nyata, Bersiap sebagai Puteri Pelajar Indonesia",
        excerpt: "Jacqueline Surya Alim Puteri Pelajar Jawa Barat punya program literasi dan aksi nyata membangun generasi emas. (IG@jacquelineesurya/Rifki Setiadi/pojoksatu.id) ",
        paragraph1: "Tahun 2024, Jacqueline memiliki target besar di ajang Putera Puteri Pelajar Indonesia. Dalam konteks ini, dia berencana untuk keluar dari zona nyaman dan menjadi duta pendidikan bagi Indonesia.",
        paragraph2: "'Saya ingin menantang diri saya sendiri dan menyebarkan advokasi melalui aksi nyata, terutama dalam aspek pendidikan,' ujar Jacqueline dengan penuh semangat. Jacqueline juga memiliki visi untuk mewujudkan generasi emas Indonesia 2045 yang cerdas dan berdaya saing melalui peningkatan literasi dan pendidikan berkualitas. Untuk mencapai visi ini, ia berkomitmen menyediakan akses materi pembelajaran berkualitas dan terjangkau secara digital, melatih generasi muda dalam pemanfaatan teknologi yang bijak dan efektif, serta meningkatkan kompetensi pendidik melalui pelatihan dan workshop inovatif.",
        paragraph3: "Itu sebabnya, sepulang sekolah, Jacqueline sering menghabiskan waktu di Desa Babakan Madang, Bogor, untuk mengajar bahasa Inggris dan membaca bersama anak-anak.",
        paragraph4: "",
        website: "https://www.pojoksatu.id/edugov/1084782668/mengenal-sosok-pelajar-jacqueline-surya-ingin-wujudkan-generasi-emas-menjalankan-aksi-nyata-bersiap-sebagai-puteri-pelajar-indonesia?page=2",
        author: "Pojok Satu",
        date: "2025-04-04",
        image: "/images/berita/pojoksatu.png",
        category: "Artikel",
        isHighlighted: true,
        tags: ["Pendidikan", "Indonesia Emas 2024", "Inspiarasi", "Role Model"],
        year: 2025,
        type: 'image'
      },
      {
        id: 6,
        title: "Ahmad Nurdin Raih Gelar Putera Pelajar Indonesia 2024",
        excerpt: "Program beasiswa baru untuk pelajar berprestasi dari keluarga tidak mampu di seluruh Indonesia.",
        paragraph1: "KBRN, Banjarmasin: Ahmad Nurdin Rizkyandi, seorang siswa kelas XI dari MAN Tanah Laut, Kalimantan Selatan, telah mencatatkan namanya sebagai pemenang dalam ajang bergengsi Putera Puteri Pelajar Indonesia di Jakarta pada Juni 2024. Ajang Putera Puteri Pelajar Indonesia ini pertama kali diselenggarakan  di tingkat nasional. Dan prestasi gemilang ini diraih oleh perwakilan Kalimantan Selatan setelah bersaing sengit dengan perwakilan pelajar terbaik dari seluruh daerah se-Indonesia.",
        paragraph2: "Ahmad Nurdin Rizkyandi yang akrab dipanggil Yandi berhasil menunjukkan dominasinya dalam semua aspek tahap seleksi dimulai dari karantina, pembekalan, unjuk bakat smpai dengan puncak pada malam grand final pemilihan Putera puteri pelajar Indonesia. 'Ini adalah pengalaman luar biasa bagi saya apalagi ini ajang pertama yang saya ikuti dan perdana diselenggarakan dan saya berhasil membawa nama Kalimantan Selatan dikancah nasional tentunya juga itu ga mudah karena teman-teman pelajar dari seluruh Indonesia juga luar biasa sekali. Tapi saya tetap semangat untuk memberikan yang terbaik,' ujar Yandi dengan penuh kebanggaan dalam program Santai Siang di PRO 2 Banjarmasin pada Sabtu  (3/8/2024).",
        paragraph3: "Prestasi ini bukan hanya sebuah penghargaan pribadi bagi Yandi, tetapi juga membanggakan bagi sekolahnya serta daerah nya. Dukungan dari berbagai pihak telah memperkuat semangatnya untuk terus berkarya dan menginspirasi generasi muda lainnya.",
        paragraph4: "'Saya berterima kasih kepada keluarga, pembimbing, guru-guru, dan teman-teman yang selalu mendukung dan memotivasi saya dalam setiap langkah, harapannya juga untuk teman-teman pelajar khususnya bisa keluar dari zona nyaman dan berani bermimpi dan mewujudkan prestasi dalam bidang apapun juga yang mereka senangi,' ujar yandi . Dengan kemenangan ini, Yandi tidak hanya sekedar  sebagai Putera Pelajar Indonesia, tetapi harapannya juga bisa memberikan motivasi baru bagi anak-anak muda pelajar di seluruh Indonesia untuk terus bermimpi dan berprestasi dalam bidang yang mereka senangi.",
        website: "https://rri.co.id/wawancara/878066/ahmad-nurdin-raih-gelar-putera-pelajar-indonesia-2024",
        author: "Radio Republik Indonesia",
        date: "2024-08-05",
        image: "/images/berita/rri3.jpeg",
        category: "Radio Nasional",
        tags: ["Talkshow", "Radio Nasional", "Inspirasi"],
        year: 2024,
        type: 'image'
      },
      {
        id: 7,
        title: "PPPI 2025 - Peluang dan Tantangan Generasi Pelajar di Era Digital",
        excerpt: "Webinar membahas persiapan kompetisi Putera Puteri Pelajar Indonesia 2025 dan pentingnya literasi digital.",
        paragraph1: "PPPI 2025 telah resmi membuka pendaftaran dengan tema \"Generasi Digital untuk Indonesia Emas\". Webinar persiapan dihadiri oleh ratusan pelajar dari seluruh Indonesia.",
        paragraph2: "Para pemenang tahun sebelumnya berbagi pengalaman dan tips sukses untuk calon finalis tahun 2025. Fokus utama tahun ini adalah pada kemampuan public speaking, literasi digital, dan kepedulian sosial.",
        paragraph3: "\"Kompetisi ini bukan sekadar ajang kecantikan, tapi platform untuk membuktikan bahwa generasi pelajar Indonesia memiliki visi dan misi yang jelas untuk masa depan bangsa,\" jelas ketua panitia.",
        paragraph4: "",
        website: "https://www.pppi.or.id/webinar/2025/peluang-tantangan-era-digital",
        author: "Tim Media PPPI",
        date: "2025-01-15",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: "Webinar",
        tags: ["Digital", "Webinar", "PPPI 2025"],
        year: 2025,
        type: 'video',
        isHighlighted: true
      }
    ];

    setGalleryItems(galleryData);
    setArticles(newsData);
  }, []);

  // Filtering logic for gallery items based on search query and selected year
  const filteredGalleryItems = galleryItems.filter((item) => {
    const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const yearMatch = selectedYear === null || item.year === selectedYear;
    return searchMatch && yearMatch;
  });

  // Filtering logic for news articles based on search query and selected year
  const filteredArticles = articles.filter((article) => {
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        article.category.toLowerCase().includes(searchQuery.toLowerCase());
    const yearMatch = selectedYear === null || article.year === selectedYear;
    return searchMatch && yearMatch;
  });

  // Group gallery items by year
  const galleryItemsByYear = filteredGalleryItems.reduce((acc: { [year: number]: GalleryItem[] }, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  // Group news articles by year
  const newsArticlesByYear = filteredArticles.reduce((acc: { [year: number]: Article[] }, article) => {
    if (!acc[article.year]) {
      acc[article.year] = [];
    }
    acc[article.year].push(article);
    return acc;
  }, {});

  // Generate year cards for gallery
  const galleryYearCards: YearCard[] = Object.entries(galleryItemsByYear).map(([year, items]) => ({
    year: parseInt(year),
    title: `Galeri ${year}`,
    description: `Kumpulan galeri kegiatan tahun ${year}`,
    thumbnailImage: items[0].image || '',
    count: items.length,
  }));

  // Generate year cards for news
  const newsYearCards: YearCard[] = Object.entries(newsArticlesByYear).map(([year, items]) => ({
    year: parseInt(year),
    title: `Berita ${year}`,
    description: `Kumpulan berita kegiatan tahun ${year}`,
    thumbnailImage: items[0].image || '',
    count: items.length,
  }));

  // Handle image selection for gallery
  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  // Handle article selection for news
  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  // Handle year selection
  const handleYearClick = (year: number) => {
    setSelectedYear(year === selectedYear ? null : year);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear selected image
  const clearSelectedImage = () => {
    setSelectedImage(null);
  };

  // Clear selected article
  const clearSelectedArticle = () => {
    setSelectedArticle(null);
  };

  const videoGalleryItems = galleryItems.filter(item => item.type === 'video');

  return (
    <div className="container mx-auto py-10">
      {/* Title and subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-pppi-blue">
          News & Gallery
        </h1>
        <p className="text-gray-500">
          Temukan berita terkini dan galeri kegiatan Putera Puteri Pelajar Indonesia
        </p>
      </div>

      {/* Search and Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Cari berita atau galeri..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          {searchQuery && searchFocused && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-1 top-1/2 -translate-y-1/2 transform"
            >
              <X className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </button>
          )}
        </div>
        <Tabs defaultValue="gallery" className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="gallery" onClick={() => setActiveTab("gallery")}>Gallery</TabsTrigger>
            <TabsTrigger value="news" onClick={() => setActiveTab("news")}>News</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Year Navigation */}
      <div className="flex flex-wrap gap-4 mb-8">
        {(activeTab === "gallery" ? galleryYearCards : newsYearCards).sort((a, b) => b.year - a.year).map((yearCard) => (
          <motion.div
            key={yearCard.year}
            className={`rounded-lg overflow-hidden shadow-md cursor-pointer ${selectedYear === yearCard.year ? 'ring-2 ring-pppi-blue' : 'hover:shadow-lg'}`}
            onClick={() => handleYearClick(yearCard.year)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="w-[300px]">
              <CardHeader>
                <CardTitle>{yearCard.title}</CardTitle>
                <CardDescription>{yearCard.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {yearCard.count} item(s)
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Gallery or News Content based on activeTab */}
      {activeTab === "gallery" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredGalleryItems.map((item) => (
            <div 
              key={item.id} 
              className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg"
              onClick={() => handleImageClick(item)}
            >
              {item.type === 'video' ? (
                <div className="relative h-48">
                  <img 
                    src={`https://img.youtube.com/vi/${getYoutubeId(item.videoUrl)}/maxresdefault.jpg`} 
                    alt={item.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <PlayCircle size={48} className="text-white" />
                  </div>
                </div>
              ) : (
                <div className="h-48">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-pppi-blue">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-sm line-clamp-2 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div 
              key={article.id}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg"
              onClick={() => handleArticleClick(article)}
            >
              {article.type === 'video' ? (
                <div className="relative h-48">
                  <img 
                    src={`https://img.youtube.com/vi/${getYoutubeId(article.videoUrl)}/maxresdefault.jpg`} 
                    alt={article.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <PlayCircle size={48} className="text-white" />
                  </div>
                </div>
              ) : (
                <div className="h-48">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-pppi-blue/10 text-pppi-blue text-xs px-2 py-1 rounded-full">{article.category}</span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="font-semibold text-pppi-blue mb-2">{article.title}</h3>
                <p className="text-sm line-clamp-3">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={clearSelectedImage}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.type === 'video' ? (
              <div className="relative w-full aspect-video">
                <iframe 
                  src={`https://www.youtube.com/embed/${getYoutubeId(selectedImage.videoUrl)}?autoplay=1`} 
                  title={selectedImage.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-h-[70vh] w-full object-contain"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
              <p className="text-sm text-gray-500">{selectedImage.date}</p>
              <p className="mt-2">{selectedImage.description}</p>
            </div>
          </div>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={clearSelectedImage}
          >
            <X size={24} />
          </button>
        </div>
      )}

      {/* Article Detail View */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="container mx-auto py-10 px-4">
            <button
              className="mb-4 flex items-center text-pppi-blue hover:underline"
              onClick={clearSelectedArticle}
            >
              <ArrowRight size={16} className="mr-2 rotate-180" />
              Back to All Articles
            </button>
            
            <article>
              {selectedArticle.type === 'video' ? (
                <div className="relative w-full aspect-video mb-6">
                  <iframe 
                    src={`https://www.youtube.com/embed/${getYoutubeId(selectedArticle.videoUrl)}`} 
                    title={selectedArticle.title}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                selectedArticle.image && (
                  <img 
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )
              )}
              
              <span className="inline-block px-3 py-1 bg-pppi-blue/10 text-pppi-blue rounded-full text-sm mb-4">
                {selectedArticle.category}
              </span>
              
              <h1 className="text-3xl font-bold mb-4 text-pppi-darkblue">
                {selectedArticle.title}
              </h1>
              
              <div className="flex items-center text-gray-500 mb-6">
                <div className="flex items-center mr-4">
                  <Calendar size={16} className="mr-1" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{selectedArticle.author}</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg font-medium text-gray-700 mb-6">
                  {selectedArticle.excerpt}
                </p>
                
                {selectedArticle.paragraph1 && (
                  <p className="mb-4">{selectedArticle.paragraph1}</p>
                )}
                
                {selectedArticle.paragraph2 && (
                  <p className="mb-4">{selectedArticle.paragraph2}</p>
                )}
                
                {selectedArticle.paragraph3 && (
                  <p className="mb-4">{selectedArticle.paragraph3}</p>
                )}
                
                {selectedArticle.paragraph4 && (
                  <p className="mb-4">{selectedArticle.paragraph4}</p>
                )}
                
                {selectedArticle.website && (
                  <p className="mt-8">
                    Source: <a href={selectedArticle.website} target="_blank" rel="noopener noreferrer" className="text-pppi-blue hover:underline">
                      {selectedArticle.website}
                    </a>
                  </p>
                )}
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {selectedArticle.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to extract YouTube video ID
const getYoutubeId = (url?: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default NewsAndGallery;
