import { useState } from 'react';
import { Button } from '../ui/Button';

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Aqui entraria a integração com a API de Newsletter (ex: Mailchimp, Resend)
    }
  };

  return (
    <footer className="bg-black text-white grid grid-cols-1 md:grid-cols-4 text-[9px] md:text-[10px] 3xl:text-xs uppercase tracking-widest font-medium">
      <div className="p-6 md:p-8 3xl:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between min-h-[200px] 3xl:min-h-[300px]">
        <div>Fundação Villa<br/>Rua da Matriz, 42<br/>São Paulo SP 01000-000<br/>Brasil</div>
        <div className="text-[8px] 3xl:text-[10px] opacity-50 mt-8">EST. 2026</div>
      </div>
      
      <div className="p-6 md:p-8 3xl:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between">
        <div>1-514-849-3742<br/>1-888-934-2278<br/>info@fundacaovilla.org</div>
        
        <div className="mt-8">
          {submitted ? (
            <p className="text-[#B85741]">Obrigado por assinar. Em breve entraremos em contato.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <label htmlFor="newsletter" className="sr-only">Assine a Newsletter</label>
              <p className="mb-2">Assine a Newsletter</p>
              <div className="flex border-b border-white/50 pb-2">
                <input 
                  type="email" 
                  id="newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="SEU MELHOR E-MAIL" 
                  className="bg-transparent outline-none w-full placeholder:text-white/30"
                  required
                />
                <button type="submit" className="hover:text-[#B85741] transition-colors" aria-label="Enviar">OK</button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8 3xl:p-12 border-b md:border-b-0 md:border-r border-white/20">
        Horário de funcionamento<br/><br/>Quarta — Sexta: 12 PM — 7 PM<br/>Sábado — Domingo: 11 AM — 6 PM<br/><br/>Entrada gratuita
      </div>
      
      <div className="p-6 md:p-8 3xl:p-12 flex flex-col justify-between">
        <p className="opacity-70 leading-relaxed">© O conteúdo deste site é protegido. Qualquer reprodução é estritamente proibida sem autorização prévia.</p>
        <div className="flex gap-6 mt-8 md:mt-4">
          <a href="#" className="hover:text-[#B85741] transition-colors" aria-label="Instagram">INSTAGRAM</a>
          <a href="#" className="hover:text-[#B85741] transition-colors" aria-label="Twitter">TWITTER</a>
          <a href="#" className="hover:text-[#B85741] transition-colors" aria-label="Are.na">ARE.NA</a>
        </div>
      </div>
    </footer>
  );
}
