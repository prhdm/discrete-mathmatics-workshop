'use client';

import { GraphBackground } from './components/GraphBackground';
import { HeroSection } from './components/HeroSection';
import { InstructorsSection } from './components/InstructorsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      <InstructorsSection />
      <AboutSection />
    </main>
  );
}

