import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Manifesto() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Text Masking Reveal on Scroll
    const lines = gsap.utils.toArray('.manifesto-line');
    
    lines.forEach((line: any) => {
      gsap.from(line, {
        scrollTrigger: {
          trigger: line,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1.5, // Suavidade extrema (inércia) atrelada ao scroll
        },
        y: 100,
        opacity: 0,
        rotationZ: 2,
        transformOrigin: 'left top',
        ease: 'power3.out',
      });
    });

    // Separator line animation
    gsap.from('.separator-line', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
      scaleX: 0,
      transformOrigin: 'left center',
      ease: 'none',
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-offwhite py-32 px-8 md:px-16 lg:px-24 text-charcoal relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="separator-line w-full h-[1px] bg-charcoal/20 mb-24"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta sticky top-32">
              [ 01 — O Manifesto ]
            </p>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-6 text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] tracking-tight">
            <div className="overflow-hidden py-2">
              <p className="manifesto-line">Acreditamos no peso da palavra.</p>
            </div>
            <div className="overflow-hidden py-2">
              <p className="manifesto-line">Na textura da tinta sobre o papel poroso.</p>
            </div>
            <div className="overflow-hidden py-2">
              <p className="manifesto-line text-terracotta italic">O livro não é apenas um contêiner de ideias,</p>
            </div>
            <div className="overflow-hidden py-2">
              <p className="manifesto-line">mas um objeto de permanência em um mundo efêmero.</p>
            </div>
            <div className="overflow-hidden py-2 mt-8">
              <p className="manifesto-line text-lg md:text-xl font-mono tracking-wide text-charcoal/60 max-w-xl leading-relaxed">
                Cada edição é pensada como uma escultura tátil. Gramaturas densas, encadernação manual e tiragens estritamente limitadas. Não publicamos para o mercado; publicamos para a história.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
