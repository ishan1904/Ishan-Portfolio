"use client";

import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import Navbar from "@/components/navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (

    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Background />
      <Navbar />
      <Hero />
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main>

  );
}