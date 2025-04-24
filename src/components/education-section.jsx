
import React from "react";
import { motion } from "framer-motion";

export function EducationSection() {
  const education = [
    {
      period: "2023-Present",
      degree: "Software Engineering",
      institution: "ESPRIT - Private School of Engineering and Technology",
      details: "Currently pursuing software engineering degree"
    },
    {
      period: "2019-2023",
      degree: "Bachelor's in Software Engineering and Information Systems",
      institution: "Faculty of Sciences - Bizerte",
      details: "Graduated with Highest Honors"
    },
    {
      period: "2019",
      degree: "Baccalaureate in Computer Science",
      institution: "Bardo 2 High School - Tunis",
      details: "Graduated with Honors"
    }
  ];

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="card-hover rounded-lg p-6"
        >
          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <span className="text-primary">{edu.period}</span>
          </div>
          <p className="text-muted-foreground mb-2">{edu.institution}</p>
          <p className="text-sm text-muted-foreground">{edu.details}</p>
        </motion.div>
      ))}
    </div>
  );
}
