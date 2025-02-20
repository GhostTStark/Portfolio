"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    company: "Bright Digi Gold",
    link: "https://brightdigigold.com", // Add actual URL
    role: "Backend Developer",
    period: "2021 - Present",
    description: "Leading backend development for cloud-native applications, implementing microservices architecture, and mentoring junior developers.",
    technologies: ["Node.js", "Express", "AWS", "MongoDB", "REST API", "Next js"],
  },
  {
    company: "TestOfire",
    link: "https://testofire.in/", // Add actual URL
    role: "Full Stack Developer",
    period: "2022 - Present",
    description: "Developed and maintained RESTful APIs, implemented caching solutions, and optimized database performance.",
    technologies: ["Node.js", "Express", "AWS", "MongoDB", "REST API", "PostgreSQL", "Redis", "Next js", "React Native"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{exp.role}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </CardTitle>
                    {/* Make company name clickable */}
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {exp.company}
                    </a>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
