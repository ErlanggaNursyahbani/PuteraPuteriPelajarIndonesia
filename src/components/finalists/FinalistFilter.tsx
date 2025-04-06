import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  GraduationCap,
  MapPin,
  Calendar,
  School,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface FinalistFilterProps {
  onFilterChange: (filters: {
    year: string;
    region: string;
    search: string;
    level: string;
  }) => void;
}

const FinalistFilter = ({ onFilterChange }: FinalistFilterProps) => {
  const [year, setYear] = useState<string>("all");
  const [region, setRegion] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [level, setLevel] = useState<string>("all");

  const handleFilterSubmit = () => {
    onFilterChange({
      year,
      region,
      search,
      level,
    });
  };

  const handleReset = () => {
    setYear("all");
    setRegion("all");
    setSearch("");
    setLevel("all");
    onFilterChange({
      year: "all",
      region: "all",
      search: "",
      level: "all",
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-8">
      <h2 className="text-xl font-bold text-pppi-darkblue mb-4">
        Filter Finalis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Calendar className="text-pppi-blue" size={18} />
            <label className="text-sm font-medium">Tahun</label>
          </div>
          <Select value={year} onValueChange={(value) => setYear(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Tahun" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Tahun</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <MapPin className="text-pppi-blue" size={18} />
            <label className="text-sm font-medium">Asal Daerah</label>
          </div>
          <Select value={region} onValueChange={(value) => setRegion(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Daerah" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Daerah</SelectItem>
              <SelectItem value="bangka belitung">Bangka Belitung</SelectItem>
              <SelectItem value="bengkulu">Bengkulu</SelectItem>
              <SelectItem value="dki jakarta">DKI Jakarta</SelectItem>
              <SelectItem value="jawa barat">Jawa Barat</SelectItem>
              <SelectItem value="jawa tengah">Jawa Tengah</SelectItem>
              <SelectItem value="jawa timur">Jawa Timur</SelectItem>
              <SelectItem value="kalimantan barat">Kalimantan Barat</SelectItem>
              <SelectItem value="kalimantan selatan">
                Kalimantan Selatan
              </SelectItem>
              <SelectItem value="kalimantan timur">Kalimantan Timur</SelectItem>
              <SelectItem value="lampung">Lampung</SelectItem>
              <SelectItem value="riau">Riau</SelectItem>
              <SelectItem value="sulawesi tenggara">
                Sulawesi Tenggara
              </SelectItem>
              <SelectItem value="sumatera barat">Sumatera Barat</SelectItem>
              <SelectItem value="sumatera selatan">Sumatera Selatan</SelectItem>
              <SelectItem value="sumatera utara">Sumatera Utara</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <School className="text-pppi-blue" size={18} />
            <label className="text-sm font-medium">Jenjang Pendidikan</label>
          </div>
          <Select value={level} onValueChange={(value) => setLevel(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Jenjang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Jenjang</SelectItem>
              <SelectItem value="SMA">SMA</SelectItem>
              <SelectItem value="SMP">SMP</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Search className="text-pppi-blue" size={18} />
            <label className="text-sm font-medium">Cari Finalis</label>
          </div>
          <div className="relative">
            <Input
              placeholder="Masukkan nama..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pr-10"
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-2">
        <Button variant="outline" onClick={handleReset} className="text-sm">
          Reset Filter
        </Button>
        <Button
          onClick={handleFilterSubmit}
          className="bg-pppi-blue text-white text-sm"
        >
          <Filter className="mr-2 h-4 w-4" />
          Terapkan Filter
        </Button>
      </div>
    </div>
  );
};

export default FinalistFilter;
