
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building, Briefcase } from "lucide-react";

export interface Jury {
  id: number;
  name: string;
  photo: string;
  position: string;
  organization: string;
  bio: string;
  level: "SMA" | "SMP"; // Added school level property
}

interface JuryCardProps {
  jury: Jury;
}

const JuryCard = ({ jury }: JuryCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col animate__animated animate__fadeIn">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-3">
          <Avatar className="h-28 w-28 border-2 border-pppi-gold shadow-md">
            <AvatarImage src={jury.photo} alt={jury.name} />
            <AvatarFallback className="bg-pppi-lightgray text-pppi-darkblue font-bold text-xl">
              {jury.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-lg font-bold text-pppi-darkblue">{jury.name}</CardTitle>
        <CardDescription className="text-sm text-pppi-blue font-medium">{jury.position}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-sm space-y-3">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-pppi-gold flex-shrink-0" />
            <span className="text-gray-700">{jury.organization}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JuryCard;
