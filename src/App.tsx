import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowLeft, ArrowRight, Play, Plus } from 'lucide-react';
import SmoothScrollProvider from './components/layout/SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Text Reveal
    gsap.from('.hero-title', {
      yPercent: 100,
      ease: 'power4.out',
      duration: 1.5,
      delay: 0.2,
    });

    // 2. Image Parallax & Reveal
    const images = gsap.utils.toArray('.reveal-img');
    images.forEach((img: any) => {
      gsap.fromTo(img, 
        { scale: 1.2, filter: 'brightness(0.5)' },
        {
          scale: 1,
          filter: 'brightness(1)',
          ease: 'power2.out',
          duration: 1.5,
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top 90%',
            end: 'center center',
            scrub: 1,
          }
        }
      );
    });

    // 3. Text Block Reveals
    const textBlocks = gsap.utils.toArray('.reveal-text');
    textBlocks.forEach((text: any) => {
      gsap.from(text, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 85%',
        }
      });
    });

    // 4. Infinite Marquee
    gsap.to('.marquee-content', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });

  }, { scope: container });

  return (
    <SmoothScrollProvider>
      <div ref={container} className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        
        {/* Header */}
        <header className="grid grid-cols-1 md:grid-cols-4 border-b border-black text-[10px] md:text-xs uppercase tracking-wider font-medium sticky top-0 bg-white z-50">
          <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-black flex items-center justify-between group cursor-pointer hover:bg-black hover:text-white transition-colors">
            <span>Editora da Villa</span>
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
          </div>
          <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-black hidden md:flex items-center">
            The instructions of the press<br/>The art of bookmaking
          </div>
          <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-black hidden md:flex items-center">
            25.04.2026<br/>— 15.09.2026
          </div>
          <div className="p-4 md:p-5 flex justify-between items-center">
            <span className="hidden lg:inline">Fundação para a arte contemporânea</span>
            <span className="lg:hidden">Fundação Villa</span>
            <span className="border border-black px-2 py-1 rounded-full text-[9px]">PT</span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="border-b border-black flex justify-center items-center overflow-hidden py-16 md:py-32 bg-[#f4f4f4]">
          <div className="overflow-hidden pb-4">
            <h1 className="hero-title text-[35vw] md:text-[28vw] font-serif leading-[0.75] tracking-[-0.08em] -ml-[2vw] text-black">
              Villa
            </h1>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="border-b border-black overflow-hidden flex whitespace-nowrap py-3 md:py-4 bg-black text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
          <div className="marquee-content flex gap-8 items-center">
            <span>A ARTE DA ENCADERNAÇÃO MANUAL</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>O PESO DA PALAVRA IMPRESSA</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>EDIÇÕES ESTRITAMENTE LIMITADAS</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>MANIFESTO DIGITAL 2026</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            {/* Duplicate for seamless loop */}
            <span>A ARTE DA ENCADERNAÇÃO MANUAL</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>O PESO DA PALAVRA IMPRESSA</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>EDIÇÕES ESTRITAMENTE LIMITADAS</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>MANIFESTO DIGITAL 2026</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </div>
        </section>

        {/* Section 1: Video / About */}
        <section className="grid grid-cols-1 md:grid-cols-4 border-b border-black">
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-black text-[10px] md:text-xs uppercase font-medium">
            O Manifesto<br/>Digital
          </div>
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-black text-[10px] md:text-xs uppercase font-medium">
            Chamada para originais<br/>Até 15 Setembro, 2026
          </div>
          <div className="col-span-1 md:col-span-2 p-8 md:p-16 flex flex-col items-center justify-center">
            <div className="reveal-text w-full max-w-lg text-[10px] md:text-[11px] uppercase text-center mb-16 leading-[1.8] font-medium tracking-wider">
              LEITORES DE TODAS AS IDADES, DE TODOS OS PAÍSES DO MUNDO: VOCÊS SÃO CONVIDADOS A ENVIAR UM TESTAMENTO DE ARTE FEITO PARA SER LIDO.<br/><br/>
              ESCREVA SEU TESTAMENTO EM SEU PRÓPRIO IDIOMA E ESCREVA O QUÃO ABERTAMENTE DESEJAR. O LIVRO NÃO É APENAS UM CONTÊINER DE IDEIAS, MAS UM OBJETO DE PERMANÊNCIA EM UM MUNDO EFÊMERO.
            </div>
            <div className="relative w-full aspect-[16/9] bg-black cursor-pointer group overflow-hidden border border-black">
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200" 
                alt="Video Thumbnail"
                className="reveal-img w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-black/20 backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Publications Index (Table) */}
        <section className="grid grid-cols-1 md:grid-cols-4 border-b border-black bg-[#f4f4f4]">
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-black text-[10px] md:text-xs uppercase font-medium">
            Índice de<br/>Publicações
          </div>
          <div className="col-span-1 md:col-span-3 flex flex-col">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 border-b border-black text-[9px] uppercase tracking-widest font-medium p-4 text-black/50">
              <div className="col-span-1">Ref</div>
              <div className="col-span-5">Título da Obra</div>
              <div className="col-span-4">Autor</div>
              <div className="col-span-2 text-right">Status</div>
            </div>
            
            {/* Table Rows */}
            {[
              { ref: '001', title: 'A Poética do Espaço', author: 'Gaston Bachelard', status: 'Disponível' },
              { ref: '002', title: 'Silêncio Visual', author: 'Coletivo Anônimo', status: 'Esgotado' },
              { ref: '003', title: 'Arquitetura da Sombra', author: "Jun'ichirō Tanizaki", status: 'Disponível' },
              { ref: '004', title: 'O Peso da Tinta', author: 'Helena Martins', status: 'Pré-venda' },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 border-b border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                <div className="col-span-1 p-4 md:border-r border-black/20 text-[10px] font-mono">{item.ref}</div>
                <div className="col-span-5 p-4 md:border-r border-black/20 font-serif text-xl md:text-2xl italic">{item.title}</div>
                <div className="col-span-4 p-4 md:border-r border-black/20 text-xs uppercase tracking-wider flex items-center">{item.author}</div>
                <div className="col-span-2 p-4 text-[10px] uppercase tracking-widest flex justify-between md:justify-end items-center gap-4">
                  <span className={item.status === 'Esgotado' ? 'opacity-50 line-through' : ''}>{item.status}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Massive Quote */}
        <section className="border-b border-black py-24 md:py-48 px-6 md:px-12 flex justify-center items-center text-center">
          <h2 className="reveal-text text-4xl md:text-6xl lg:text-8xl font-serif font-light leading-[1.1] tracking-tight max-w-6xl">
            "A materialidade do papel exige uma <span className="italic">leitura lenta</span>. É um antídoto contra a amnésia digital."
          </h2>
        </section>

        {/* Section 4: Featured Content */}
        <section className="grid grid-cols-1 md:grid-cols-4 border-b border-black">
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
            <div className="text-[10px] md:text-xs uppercase font-medium">Acervo<br/>Visual</div>
            <div className="flex gap-4 mt-8 md:mt-0">
              <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800', title: 'Arquiteturas Patriarcais' },
              { img: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800', title: 'A Sutil Arte da Sedução' },
              { img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800', title: 'Uma Quimera de Salto' }
            ].map((item, i) => (
              <div key={i} className={`group cursor-pointer border-b lg:border-b-0 ${i !== 2 ? 'lg:border-r border-black' : ''} p-6 flex flex-col`}>
                <div className="w-full aspect-[3/4] overflow-hidden bg-[#f4f4f4] mb-6">
                  <img src={item.img} className="reveal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <p className="text-[10px] uppercase font-medium tracking-wider max-w-[150px]">{item.title}</p>
                  <span className="text-[9px] font-mono border border-black px-2 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-colors">VER OBRA</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Text Block & Reservations */}
        <section className="grid grid-cols-1 md:grid-cols-4 border-b border-black bg-[#f4f4f4]">
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-black flex flex-col items-start justify-between min-h-[250px]">
            <div className="text-[10px] md:text-xs uppercase font-medium">
              Visitas em Grupo e<br/>Workshop de Arte
            </div>
            <button className="mt-8 border border-black rounded-full px-8 py-3 text-[10px] uppercase font-medium hover:bg-black hover:text-white transition-colors tracking-widest">
              AGENDAR VISITA
            </button>
          </div>
          <div className="col-span-1 md:col-span-3 p-8 md:p-16 lg:p-24">
            <p className="reveal-text font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.4] max-w-4xl text-justify">
              A Editora da Villa foi renomeada para Fundação de Arte Contemporânea como parte do desejo de consolidar todos os interesses em arte e cultura sob uma única rubrica: <span className="italic">Villa</span>.
              <br/><br/>
              A Fundação continuará sendo uma embaixadora global, mantendo seu compromisso de oferecer exposições, eventos e programas educacionais gratuitos, a fim de garantir a acessibilidade à arte em sua forma mais pura e tátil.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white grid grid-cols-1 md:grid-cols-4 text-[9px] md:text-[10px] uppercase tracking-widest font-medium">
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between min-h-[200px]">
            <div>Fundação Villa<br/>Rua da Matriz, 42<br/>São Paulo SP 01000-000<br/>Brasil</div>
            <div className="text-[8px] opacity-50 mt-8">EST. 2026</div>
          </div>
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between">
            <div>1-514-849-3742<br/>1-888-934-2278<br/>info@fundacaovilla.org</div>
            <a href="#" className="underline underline-offset-4 hover:opacity-70 mt-8">Assine a Newsletter</a>
          </div>
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/20">
            Horário de funcionamento<br/><br/>Quarta — Sexta: 12 PM — 7 PM<br/>Sábado — Domingo: 11 AM — 6 PM<br/><br/>Entrada gratuita
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <p className="opacity-70 leading-relaxed">© O conteúdo deste site é protegido. Qualquer reprodução é estritamente proibida sem autorização prévia.</p>
            <div className="flex gap-6 mt-8 md:mt-4">
              <a href="#" className="hover:text-[#B85741] transition-colors">INSTAGRAM</a>
              <a href="#" className="hover:text-[#B85741] transition-colors">TWITTER</a>
              <a href="#" className="hover:text-[#B85741] transition-colors">ARE.NA</a>
            </div>
          </div>
        </footer>

      </div>
    </SmoothScrollProvider>
  );
}
