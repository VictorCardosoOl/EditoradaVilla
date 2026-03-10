import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FAQ_ITEMS = [
  {
    question: "Como posso agendar uma visita em grupo à Fundação?",
    answer: "As visitas em grupo devem ser agendadas com pelo menos duas semanas de antecedência através do nosso portal de reservas. Para grupos escolares ou acadêmicos, oferecemos mediação especializada e acesso exclusivo aos arquivos de encadernação."
  },
  {
    question: "A Editora da Villa aceita submissões de manuscritos?",
    answer: "Atualmente, nosso foco editorial é curado internamente, focado em ensaios visuais, catálogos de arte e reedições de obras raras. Não estamos abertos a submissões não solicitadas de manuscritos de ficção ou poesia."
  },
  {
    question: "Os workshops de encadernação são abertos a iniciantes?",
    answer: "Sim. Nossos workshops são desenhados em módulos progressivos. O 'Módulo I: Fundamentos do Papel e Costura' não exige nenhuma experiência prévia e fornece todos os materiais necessários."
  },
  {
    question: "É possível adquirir publicações antigas ou esgotadas do acervo?",
    answer: "Algumas edições limitadas esgotadas estão disponíveis apenas para consulta em nossa biblioteca física. No entanto, mantemos uma lista de espera para reedições especiais. Recomendamos assinar nossa newsletter para anúncios de tiragens comemorativas."
  },
  {
    question: "A Fundação oferece certificados de autenticidade para as obras?",
    answer: "Todas as edições limitadas e obras de arte originais adquiridas diretamente através da Fundação Villa ou de nossos parceiros oficiais são acompanhadas por um certificado de autenticidade assinado, numerado e chancelado em relevo."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Animações GSAP
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // Anima a coluna da esquerda (Sticky)
      gsap.from('.faq-sticky', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      // Anima os itens da direita com stagger
      gsap.from('.faq-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 75%',
        }
      });
    }
  }, { scope: containerRef });

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 border-b border-black bg-white">
      
      {/* COLUNA ESQUERDA (Sticky) */}
      <div className="lg:col-span-4 3xl:col-span-3 p-8 md:p-16 lg:p-24 3xl:p-32 border-b lg:border-b-0 lg:border-r border-black">
        <div className="faq-sticky sticky top-32">
          <div className="text-[10px] md:text-xs 3xl:text-sm uppercase tracking-widest font-medium mb-8">
            Suporte
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl leading-[0.9] tracking-tight mb-12">
            Dúvidas<br />Frequentes
          </h2>
          <button className="border border-black rounded-full px-8 py-3 3xl:px-12 3xl:py-4 text-[10px] 3xl:text-xs uppercase font-medium hover:bg-black hover:text-white transition-colors tracking-widest">
            Fale Conosco
          </button>
        </div>
      </div>

      {/* COLUNA DIREITA (Lista) */}
      <div className="lg:col-span-8 3xl:col-span-9 faq-list flex flex-col">
        {FAQ_ITEMS.map((item, idx) => (
          <div key={idx} className="faq-item border-b border-black last:border-b-0">
            <button
              onClick={() => toggleItem(idx)}
              className="w-full p-8 md:p-12 lg:p-16 3xl:p-24 flex justify-between items-center text-left group"
              aria-expanded={openIndex === idx}
            >
              <span className="font-serif text-2xl md:text-3xl 3xl:text-4xl pr-8 group-hover:opacity-60 transition-opacity duration-300">
                {item.question}
              </span>
              <span 
                className={`flex-shrink-0 w-10 h-10 3xl:w-14 3xl:h-14 border border-black rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === idx ? 'bg-black text-white rotate-180' : 'bg-transparent text-black group-hover:bg-black group-hover:text-white'
                }`}
              >
                {openIndex === idx ? (
                  <Minus className="w-4 h-4 3xl:w-6 3xl:h-6" />
                ) : (
                  <Plus className="w-4 h-4 3xl:w-6 3xl:h-6" />
                )}
              </span>
            </button>
            
            {/* Área de Resposta (Expandable com Grid Trick) */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-8 md:px-12 lg:px-16 3xl:px-24 pb-8 md:pb-12 lg:pb-16 3xl:pb-24 text-sm md:text-base 3xl:text-lg leading-relaxed max-w-3xl text-black/70">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
