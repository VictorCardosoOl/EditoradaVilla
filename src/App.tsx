import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SmoothScrollProvider from './components/layout/SmoothScrollProvider';
import Manifesto from './components/sections/Manifesto';
import Catalog from './components/sections/Catalog';
import Footer from './components/sections/Footer';

export default function App() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Lazy Reveal Animation for Hero
    gsap.from('.reveal-text', {
      y: 120,
      opacity: 0,
      duration: 1.8,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.2,
    });

    gsap.from('.reveal-fade', {
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
      delay: 1,
    });
  }, { scope: container });

  return (
    <SmoothScrollProvider>
      <div className="noise-overlay"></div>
      
      <main ref={container} className="relative w-full">
        {/* Navigation / Header */}
        <header className="reveal-fade fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-offwhite">
          <div className="font-mono text-xs uppercase tracking-widest">Est. 2026</div>
          <div className="font-mono text-xs uppercase tracking-widest cursor-pointer hover:text-terracotta transition-colors">Menu</div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20 relative z-10">
          <div className="max-w-7xl w-full mx-auto flex flex-col gap-6">
            <div className="overflow-hidden py-2">
              <h1 className="reveal-text text-6xl md:text-8xl lg:text-[10rem] font-serif font-light tracking-tighter text-charcoal leading-[0.85]">
                Editora da Villa.
              </h1>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-8">
              <div className="overflow-hidden py-2">
                <h2 className="reveal-text text-2xl md:text-4xl lg:text-5xl font-serif italic text-terracotta max-w-2xl leading-tight">
                  Tratando o livro como um objeto de arte e permanência.
                </h2>
              </div>
              
              <div className="overflow-hidden">
                <p className="reveal-text font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-charcoal/60 max-w-xs leading-relaxed">
                  Manifesto Digital — Edições limitadas de filosofia, poesia visual e fotografia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Manifesto />
        <Catalog />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
