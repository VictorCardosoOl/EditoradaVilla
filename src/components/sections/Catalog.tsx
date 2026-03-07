import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CATALOG_ITEMS = [
  {
    id: '01',
    title: 'A Poética do Espaço',
    author: 'Gaston Bachelard',
    specs: 'Papel Cotton 120g / Capa Dura / 300 Ex.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    align: 'justify-start',
  },
  {
    id: '02',
    title: 'Silêncio Visual',
    author: 'Coletivo Anônimo',
    specs: 'Papel Kraft 90g / Costura Exposta / 150 Ex.',
    image: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800',
    align: 'justify-end',
  },
  {
    id: '03',
    title: 'Arquitetura da Sombra',
    author: "Jun'ichirō Tanizaki",
    specs: 'Papel Pólen 90g / Hot Stamping / 500 Ex.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    align: 'justify-center',
  }
];

export default function Catalog() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const images = gsap.utils.toArray('.parallax-book');
    const texts = gsap.utils.toArray('.book-info');

    // Scroll Parallax (Y-axis)
    images.forEach((img: any, i) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -100 * (i % 2 === 0 ? 1 : 1.5), // Velocidades diferentes
        ease: 'none',
      });
    });

    // Mouse Parallax (Z-axis / 3D Float)
    const handleMouseMove = (e: MouseEvent) => {
      if (!container.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const yPos = (clientY / window.innerHeight - 0.5) * 2; // -1 to 1

      images.forEach((img: any, i) => {
        const depth = i % 2 === 0 ? 15 : -15;
        gsap.to(img, {
          x: xPos * depth,
          y: yPos * depth,
          rotationY: xPos * 8,
          rotationX: -yPos * 8,
          ease: 'power3.out',
          duration: 1.5,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="w-full bg-charcoal text-offwhite py-32 px-8 md:px-16 lg:px-24 relative z-20 overflow-hidden"
      style={{ perspective: '1000px' }} // Necessário para o efeito 3D (rotationX/Y)
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta mb-6">
            [ 02 — Acervo Físico ]
          </p>
          <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tighter">
            Obras em <span className="italic text-terracotta">destaque</span>.
          </h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {CATALOG_ITEMS.map((item, index) => (
            <div key={item.id} className={`w-full flex ${item.align} relative`}>
              <div className="relative w-full md:w-1/2 lg:w-2/5 group cursor-pointer">
                {/* Imagem com Parallax */}
                <div className="parallax-book relative aspect-[3/4] overflow-hidden bg-offwhite/5">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay de textura */}
                  <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent"></div>
                </div>

                {/* Informações do Livro */}
                <div className="book-info mt-6 flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl md:text-3xl font-serif">{item.title}</h3>
                    <span className="font-mono text-xs text-terracotta">{item.id}</span>
                  </div>
                  <p className="font-serif italic text-offwhite/70 text-lg">{item.author}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-offwhite/40 mt-2">
                    {item.specs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
