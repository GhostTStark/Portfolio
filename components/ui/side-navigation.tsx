'use client';

import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { href: '#about', label: 'About Me' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function SideNavigation() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="space-y-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="block text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
        <a
          href="/John_Doe_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <FileDown className="w-4 h-4" />
          Download CV
        </a>
      </div>
    </motion.nav>
  );
}