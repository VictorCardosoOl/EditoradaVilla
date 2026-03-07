import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Footer() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.footer-title', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: true,
      },
      y: -50,
      opacity: 0.5,
      scale: 0.95,
      ease: 'none',
    });
  }, { scope: container });

  return (
    <footer ref={container} className="w-full bg-terracotta text-offwhite pt-32 pb-8 px-8 md:px-16 lg:px-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col h-full justify-between gap-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-mono text-xs uppercase tracking-widest">
          <div className="flex flex-col gap-4">
            <p className="opacity-50 mb-2">Navegação</p>
            <a href="#" className="hover:text-charcoal transition-colors">Manifesto</a>
            <a href="#" className="hover:text-charcoal transition-colors">Catálogo</a>
            <a href="#" className="hover:text-charcoal transition-colors">Autores</a>
            <a href="#" className="hover:text-charcoal transition-colors">Contato</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <p className="opacity-50 mb-2">Social</p>
            <a href="#" className="hover:text-charcoal transition-colors">Instagram</a>
            <a href="#" className="hover:text-charcoal transition-colors">Twitter (X)</a>
            <a href="#" className="hover:text-charcoal transition-colors">Are.na</a>
          </div>

          <div className="flex flex-col gap-4 md:text-right">
            <p className="opacity-50 mb-2">Ateliê</p>
            <p>Rua da Matriz, 42</p>
            <p>São Paulo, SP</p>
            <p>Brasil</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-12">
          <h1 className="footer-title text-[12vw] font-serif font-light tracking-tighter leading-none text-offwhite whitespace-nowrap">
            Editora da Villa.
          </h1>
          <div className="w-full flex justify-between items-center mt-8 font-mono text-[10px] uppercase tracking-widest opacity-60 border-t border-offwhite/20 pt-8">
            <p>© 2026 Todos os direitos reservados.</p>
            <p>Design por Principal Creative Engineer</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
