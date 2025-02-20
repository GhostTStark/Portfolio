"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container px-4 mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <Card>
            <CardHeader>
              <CardTitle>Backend Development Expert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                With 3 years of experience in web development, I specialize in building scalable, high-performance web applications using modern technologies. My expertise includes frontend and
                backend development, API design, and database management, ensuring seamless user experiences and efficient system performance.
              </p>
              <p className="text-muted-foreground">
                I’m passionate about writing clean, maintainable code, following best practices, and implementing scalable architectures. Whether it's optimizing an existing system, developing new
                features, or building projects from scratch, I focus on delivering solutions that are both technically sound and aligned with business goals.
              </p>
              <p className="text-muted-foreground">
                I’m actively seeking challenging projects or job opportunities where I can contribute my skills in JavaScript (React, Node.js), Python (Django, Flask), or other modern frameworks while
                continuously learning and growing as a developer.{" "}
              </p>
              <p className="text-muted-foreground">Let’s connect and build something amazing together! 🚀 </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
