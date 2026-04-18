import { useState } from 'react';
import { toast } from 'sonner';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';
import OrganicGraphics from '../components/OrganicGraphics';
import FloatingParticles from '../components/FloatingParticles';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const { error } = await supabase
        .from('leads')
        .insert([data]);

      if (error) throw error;

      toast.success('Mensagem enviada!', {
        description: 'Retornaremos em menos de 24 horas.',
      });
      e.currentTarget.reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error('Erro ao enviar mensagem', {
        description: 'Por favor, tente novamente mais tarde ou contate-nos por e-mail.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <FloatingParticles count={15} colors={['#611CFC', '#4ECDC4']} className="opacity-20" />
      <OrganicGraphics className="opacity-20 fixed -bottom-20 -right-20 scale-150 rotate-12" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] mb-6 px-4 py-2 rounded-full text-[#611CFC] bg-[#611CFC]/5 border border-[#611CFC]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#611CFC]" />
              Fale conosco
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A2E] mb-8 leading-[1.05]">
              Vamos transformar seu <span className="text-gradient">negócio</span> hoje?
            </h1>
            <p className="text-lg text-[#6B6B78] mb-12 max-w-lg">
              Tem uma dúvida técnica ou quer saber como a LUMI pode escalar sua empresa? Nossa equipe está pronta para conversar.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#611CFC]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E]">E-mail</h3>
                  <p className="text-[#6B6B78]">contato@lumi.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#4ECDC4]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E]">Suporte</h3>
                  <p className="text-[#6B6B78]">Atendimento 24/7 para parceiros.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white/80 backdrop-blur-xl p-8 lg:p-12 rounded-[40px] shadow-[0_32px_80px_rgba(97,28,252,0.1)] border border-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1A1A2E] ml-1">Nome Completo</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full px-6 py-4 rounded-2xl bg-[#F9F9FB] border-2 border-transparent focus:border-[#611CFC]/20 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1A1A2E] ml-1">E-mail corporativo</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="voce@empresa.com"
                  className="w-full px-6 py-4 rounded-2xl bg-[#F9F9FB] border-2 border-transparent focus:border-[#611CFC]/20 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1A1A2E] ml-1">Como podemos ajudar?</label>
                <textarea 
                  required
                  name="message"
                  rows={4}
                  placeholder="Conte-nos um pouco sobre seu desafio..."
                  className="w-full px-6 py-4 rounded-2xl bg-[#F9F9FB] border-2 border-transparent focus:border-[#611CFC]/20 focus:bg-white outline-none transition-all resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-5 rounded-2xl bg-[#611CFC] text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#5215D9] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Enviar mensagem
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
