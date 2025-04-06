
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, MapPin } from "lucide-react";

export interface Finalist {
  id: number;
  name: string;
  photo: string;
  school: string;
  region: string;
  year: string;
  achievements: string;
  gender: "male" | "female";
  level: "SMA" | "SMP"; // Added school level
}

interface FinalistCardProps {
  finalist: Finalist;
  onViewProfile: (id: number) => void;
}

const FinalistCard = ({ finalist, onViewProfile }: FinalistCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-3 h-full w-full relative overflow-hidden rounded-t-md">
          <img 
            src={finalist.photo || "/placeholder.svg"} 
            alt={finalist.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <CardTitle className="text-lg text-pppi-darkblue">{finalist.name}</CardTitle>
        <CardDescription className="flex items-center justify-center gap-1">
          <MapPin className="w-3 h-3" />
          {finalist.region}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-sm space-y-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-pppi-blue flex-shrink-0" />
            <span>{finalist.school}</span>
          </div>
          <div className="flex items-start gap-2">
            <Award className="w-4 h-4 text-pppi-blue flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2">{finalist.achievements}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onViewProfile(finalist.id)} 
          variant="outline"
          className="w-full border-pppi-blue text-pppi-blue hover:bg-pppi-blue hover:text-white"
        >
          Lihat Profil
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FinalistCard;
