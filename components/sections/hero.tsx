"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <StarsBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      <div className="container px-4 mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Terminal className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Ayush Arya</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">Full-Stack Developer</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground/80">
            As a developer, I am driven by the challenge of solving real-world problems. My passion lies in software development and product management, where I am constant
          </p>
        </motion.div>
      </div>
    </section>
  );
}
