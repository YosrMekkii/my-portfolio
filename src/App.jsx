
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { ContactInfo } from "@/components/contact-info";
import { LanguageSection } from "@/components/language-section";
import { EducationSection } from "@/components/education-section";
import { CertificatesSection } from "@/components/certificates-section";
import { ActivitiesSection } from "@/components/activities-section";
import { ToolboxSection } from "@/components/toolbox-section";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const { toast } = useToast();

  const handleContact = (type) => {
    let message = "";
    switch(type) {
      case "email":
        window.location.href = "mailto:yosr.mekki@esprit.tn";
        message = "Opening email client...";
        break;
      case "linkedin":
        window.open("https://linkedin.com/in/yosr-mekki", "_blank");
        message = "Opening LinkedIn profile...";
        break;
      case "github":
        window.open("https://github.com", "_blank");
        message = "Opening GitHub profile...";
        break;
    }
    toast({
      title: "Action",
      description: message
    });
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Toaster />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-background/50 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Yosr Mekki</h1>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#activities" className="nav-link">Activities</a>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="about"
        className="min-h-screen flex items-center justify-center pt-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn} className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Software Engineering</span><br />
              Student & Developer
            </h1>
            <div className="mb-8">
              <ContactInfo />
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button onClick={() => handleContact("email")} variant="default">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button onClick={() => handleContact("linkedin")} variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button onClick={() => handleContact("github")} variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/20 max-w-md mx-auto"
          >
            <img 
              className="w-full h-full object-cover"
              alt="Profile photo"
              src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          >
            Education
          </motion.h2>
          <EducationSection />
        </div>
      </motion.section>

      {/* Languages Section */}
      <motion.section
        id="languages"
        className="py-20 bg-muted/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          >
            Languages
          </motion.h2>
          <LanguageSection />
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          >
            My Toolbox
          </motion.h2>
          <ToolboxSection />
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 bg-muted/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                company: "VERMEG",
                position: "Software Engineering Intern",
                period: "06/2024 - 08/2024",
                description: "Development of a Jira AI Connector for ticket automation and resolution history management."
              },
              {
                company: "TenStep",
                position: "Web Development Intern",
                period: "02/2023 - 06/2023",
                description: "Design and development of an innovative website for TenStep."
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="card-hover rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                <p className="text-primary mb-2">{exp.position}</p>
                <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Activities Section */}
      <motion.section
        id="activities"
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          >
            Club Activities
          </motion.h2>
          <ActivitiesSection />
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        id="certificates"
        className="py-20 bg-muted/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          >
            Certificates
          </motion.h2>
          <CertificatesSection />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 Yosr Mekki. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
