
import React from "react";
import { motion } from "framer-motion";

export function LanguageSection() {
  const languages = [
    { name: "Arabic", level: "Native", proficiency: 100 },
    { name: "French", level: "Experienced", proficiency: 90 },
    { name: "English", level: "Fluent", proficiency: 85 },
    { name: "German", level: "Basic", proficiency: 30 }
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {languages.map((lang, index) => (
        <div key={index} className="card-hover rounded-lg p-4">
          <h3 className="font-semibold mb-2">{lang.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{lang.level}</p>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${lang.proficiency}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="h-full bg-primary"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
