
import React from "react";
import { motion } from "framer-motion";
import { Users, Code } from "lucide-react";

export function ActivitiesSection() {
  const activities = [
    {
      title: "Art Of Code University Club",
      role: "Web Department Member",
      period: "10/2021 - 2023",
      description: "Collaborated in team environments, sharing ideas and combining efforts for successful project outcomes.",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Microsoft University Club",
      role: "Member",
      period: "10/2020",
      description: "Rapidly acquired new knowledge by effectively integrating available information and resources.",
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <div className="space-y-6">
      {activities.map((activity, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="card-hover rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="text-primary">{activity.icon}</div>
            <div>
              <h3 className="font-semibold">{activity.title}</h3>
              <p className="text-sm text-primary">{activity.role}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{activity.period}</p>
          <p className="text-muted-foreground">{activity.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
