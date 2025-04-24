
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function CertificatesSection() {
  const certificates = [
    "Hackathon Participation Certificate",
    "Spring Boot Workshop Certificate",
    "Angular Workshop Certificate",
    "Basic English Proficiency Certificate - King's College London"
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card-hover rounded-lg p-4 flex items-start gap-3"
        >
          <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <p className="text-muted-foreground">{cert}</p>
        </motion.div>
      ))}
    </div>
  );
}
