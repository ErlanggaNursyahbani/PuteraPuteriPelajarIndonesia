import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Award, GraduationCap, MapPin, Calendar, School } from "lucide-react";
import { Finalist } from "./FinalistCard";

interface FinalistDetailDialogProps {
  finalist: Finalist | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FinalistDetailDialog = ({
  finalist,
  open,
  onOpenChange,
}: FinalistDetailDialogProps) => {
  if (!finalist) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-pppi-darkblue">
            Profil Finalis
          </DialogTitle>
          <DialogDescription className="text-center">
            Detail informasi finalis PPPI {finalist.level}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="flex flex-col items-center">
            <div className="w-full h-full overflow-hidden rounded-lg mb-4 border-2 border-pppi-blue">
              <img
                src={finalist.photo || "/placeholder.svg"}
                alt={finalist.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-pppi-darkblue mb-1">
              {finalist.name}
            </h3>

            <div className="flex items-center gap-2 mb-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{finalist.region}</span>
            </div>

            <div className="px-3 py-1 bg-pppi-blue/10 text-pppi-blue rounded-full text-sm mb-2">
              Finalis {finalist.year}
            </div>

            <div className="px-3 py-1 bg-pppi-gold/10 text-pppi-gold rounded-full text-sm">
              Tingkat {finalist.level}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <School className="w-5 h-5 text-pppi-blue flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-700">
                  Jenjang Pendidikan
                </h4>
                <p>{finalist.level}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-pppi-blue flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-700">Sekolah</h4>
                <p>{finalist.school}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-pppi-blue flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-700">Tahun</h4>
                <p>{finalist.year}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-pppi-blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-gray-700">Prestasi</h4>
                <p>{finalist.achievements}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">Tentang</h4>
              <p className="text-gray-700">
                {finalist.name} adalah seorang pelajar berprestasi dari{" "}
                {finalist.region}. Yang memiliki komitmen tinggi terhadap
                pendidikan dan pengembangan diri. Dengan berbagai pencapaian di
                bidang akademis dan non-akademis, {finalist.name} terpilih
                menjadi salah satu finalis Putera Puteri Pelajar Indonesia
                tingkat {finalist.level} tahun {finalist.year}.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FinalistDetailDialog;
