
import React from "react";
import { Phone, Mail, MapPin, Flag, Calendar } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    { icon: <Mail className="h-5 w-5" />, text: "yosr.mekki@esprit.tn" },
    { icon: <Phone className="h-5 w-5" />, text: "+216 51-121-241" },
    { icon: <MapPin className="h-5 w-5" />, text: "16, rue touzeur, 2041, Tunis" },
    { icon: <Flag className="h-5 w-5" />, text: "Tunisian" },
    { icon: <Calendar className="h-5 w-5" />, text: "24 years old" }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-center gap-2 text-muted-foreground">
          {detail.icon}
          <span>{detail.text}</span>
        </div>
      ))}
    </div>
  );
}
