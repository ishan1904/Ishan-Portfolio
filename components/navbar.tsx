"use client";

import { useEffect, useState } from "react";

const navItems = ["Skills", "Projects", "Experience"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("skills");

  useEffect(() => {
    const sections = ["skills", "projects", "experience"];

    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();

        return rect.top <= 160 && rect.bottom >= 160;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-wide">
          Ishan Rajvi
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item}
                href={`#${sectionId}`}
                className={`relative text-sm transition after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-cyan-300 after:to-purple-300 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-white after:w-full"
                    : "text-gray-400 after:w-0 hover:text-white hover:after:w-full"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}