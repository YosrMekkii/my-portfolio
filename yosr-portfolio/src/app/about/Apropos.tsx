export interface SkillCategory {
    name: string;
    skills: Skill[];
  }
  
  export interface Skill {
    name: string;
    level: number; // 1-5
  }
  
  export const skillCategories: SkillCategory[] = [
    {
      name: "Langages de programmation",
      skills: [
        { name: "Java", level: 4 },
        { name: "Python", level: 4 },
        { name: "C", level: 3 },
        { name: "C#", level: 3 },
        { name: "PHP (Symfony 6)", level: 4 }
      ]
    },
    {
      name: "Frameworks",
      skills: [
        { name: "Spring Boot", level: 4 },
        { name: "Angular", level: 3 },
        { name: "React.JS", level: 4 },
        { name: ".NET", level: 3 }
      ]
    },
    {
      name: "Développement Web",
      skills: [
        { name: "HTML", level: 5 },
        { name: "CSS", level: 4 },
        { name: "JavaScript", level: 4 }
      ]
    },
    {
      name: "Développement Mobile",
      skills: [
        { name: "Java Mobile", level: 3 },
        { name: "Flutter", level: 4 }
      ]
    },
    {
      name: "Autres",
      skills: [
        { name: "Git", level: 4 },
        { name: "Figma", level: 3 },
        { name: "Unix", level: 3 },
        { name: "Cisco", level: 3 },
        { name: "UML", level: 4 },
        { name: "Scrum", level: 4 }
      ]
    }
  ];