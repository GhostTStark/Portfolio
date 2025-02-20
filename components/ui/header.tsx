"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Ayush Arya
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleScroll(e, item.href)} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                {item.label}
              </a>
            ))}
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200">
              <FileDown className="w-4 h-4" />
              CV
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
