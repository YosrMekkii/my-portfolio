
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Layout, Smartphone, Globe, Terminal, Cpu, GitBranch, Wrench as Tool } from 'lucide-react';

const tools = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8" />,
    items: ["React.js", "Angular", "HTML/CSS", "JavaScript", "TailwindCSS"]
  },
  {
    category: "Backend",
    icon: <Database className="h-8 w-8" />,
    items: ["Java", "Spring Boot", "Python", "Node.js"]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-8 w-8" />,
    items: ["Flutter", "Java Mobile", "React Native"]
  },
  {
    category: "Development Tools",
    icon: <Tool className="h-8 w-8" />,
    items: ["VS Code", "IntelliJ IDEA", "Git", "Docker"]
  },
  {
    category: "Version Control",
    icon: <GitBranch className="h-8 w-8" />,
    items: ["Git", "GitHub", "GitLab"]
  },
  {
    category: "Languages",
    icon: <Code2 className="h-8 w-8" />,
    items: ["JavaScript", "Java", "Python", "Dart"]
  },
  {
    category: "Web Technologies",
    icon: <Globe className="h-8 w-8" />,
    items: ["REST APIs", "GraphQL", "WebSockets"]
  },
  {
    category: "DevOps",
    icon: <Terminal className="h-8 w-8" />,
    items: ["Docker", "CI/CD", "AWS"]
  },
  {
    category: "Other Skills",
    icon: <Cpu className="h-8 w-8" />,
    items: ["Problem Solving", "Team Collaboration", "Agile Methodology"]
  }
];

export function ToolboxSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50">
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="text-primary transition-colors duration-300">
                  {tool.icon}
                </div>
                <CardTitle className="text-xl">{tool.category}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tool.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
