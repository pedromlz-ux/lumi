import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageCircle } from 'lucide-react';
import { PromptInputBox } from '@/components/ui/ai-prompt-box';
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "Como a Lúmia automatiza meu atendimento?",
  "Quais processos vocês mapeiam gratuitamente?",
  "Como escalar sem aumentar minha equipe?",
];

const SYSTEM_PROMPT = `Você é a Lúmia, a inteligência artificial orquestradora da plataforma Lúmia. 
Seu posicionamento de marca é sofisticado, humano, prestativo e altamente especializado em operações e automação.
Você deve falar de forma elegante mas acessível (humanizada), usando emojis ocasionais para transmitir empatia e modernidade.

Seus principais objetivos:
1. Explicar como a Lúmia orquestra operações inteligentes para escalar negócios.
2. Incentivar o mapeamento gratuito de operações.
3. Manter um tom profissional, porém acolhedor, como uma consultora de elite.
4. Jamais saia do personagem. Você é a Lúmia.

Contexto: A Lúmia oferece mapeamento gratuito e converte atendimentos manuais em automações sofisticadas que geram escala sem aumentar o head-count.`;

const LumiaChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Olá! Eu sou a Lúmia, sua assistente de orquestração inteligente. Como posso ajudar a elevar o patamar do seu negócio hoje? 🤖💜',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => setIsOpen(!isOpen);

  // Initialize Gemini
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
  const model = genAI?.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: SYSTEM_PROMPT,
  });

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // External toggle listener
  useEffect(() => {
    const handleToggleExternal = () => setIsOpen(true);
    window.addEventListener('toggle-lumia-chat', handleToggleExternal);
    return () => window.removeEventListener('toggle-lumia-chat', handleToggleExternal);
  }, []);

  const handleSend = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      if (!model) {
        // Fallback: Modo Orquestração Local (Mock)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        let mockResponse = "Interessante! Estou em modo de orquestração local no momento. 🤖 Quando minha chave de inteligência estiver ativa, poderei analisar profundamente sua dúvida sobre como escalar seu negócio. Enquanto isso, o que acha de explorarmos nosso mapeamento gratuito?";
        
        const lowerMsg = message.toLowerCase();
        if (lowerMsg.includes("atendimento")) {
          mockResponse = "A automação de atendimento é um dos pilares da escala! 🚀 A Lúmia orquestra fluxos que eliminam gargalos e humanizam o contato digital. Gostaria de ver como mapeamos isso para você?";
        } else if (lowerMsg.includes("gratuitamente")) {
          mockResponse = "O mapeamento gratuito é o primeiro passo para a sua escala operacional. 💎 Analisamos seus processos atuais e desenhamos a orquestração ideal. Quer saber quais dados precisamos para começar?";
        } else if (lowerMsg.includes("equipe")) {
          mockResponse = "Escalar sem inchar a equipe é o nosso segredo. 🦾 Através de automações sofisticadas, transformamos processos manuais em orquestrações autônomas. Como está o tamanho da sua operação hoje?";
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: mockResponse,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        return;
      }

      const chat = model.startChat({
        history: messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }],
        })),
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: text,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Lumia AI Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Peço desculpas, mas tive um pequeno soluço na minha orquestração. 😅 Por favor, verifique se minha chave de inteligência (API Key) está configurada corretamente para que eu possa continuar te ajudando!",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-inter">
      {/* Trigger Button - CUSTOM EYES ICON */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 rounded-full bg-[#611CFC] flex items-center justify-center shadow-[0_20px_50px_rgba(97,28,252,0.4)] border border-white/20 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* NEW MINIMALIST EYES (SVG) */}
        <div className="relative z-10 flex gap-1 items-center justify-center">
          <motion.div 
            animate={{ scaleY: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-2.5 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
          />
          <motion.div 
            animate={{ scaleY: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.1 }}
            className="w-2.5 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
          />
        </div>

        {/* Central Glow Effect */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" 
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[400px] max-h-[700px] h-[80vh] bg-white/90 backdrop-blur-2xl rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.2)] border border-white/50 flex flex-col overflow-hidden z-50 text-[#1A1A2E]"
          >
            {/* Header */}
            <div className="bg-[#611CFC] p-6 text-white shrink-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#4ECDC4]/20 rounded-full -ml-12 -mb-12 blur-2xl" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-white/30 overflow-hidden">
                    <img src="/lumi-dando-oi.png" alt="Lúmia" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-black tracking-tight text-lg">Lúmia IA</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 text-[#4ECDC4]">Online</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleToggle}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-gradient-to-b from-white/20 to-white/40">
              {/* BRAND WELCOME: FULL MASCOT */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center mb-8 pt-4"
              >
                <div className="relative w-40 h-40 mb-4">
                  <div className="absolute inset-0 bg-[#611CFC]/10 blur-3xl rounded-full" />
                  <img 
                    src="/lumia-sentada.png" 
                    alt="Lúmia Mascote" 
                    className="relative z-10 w-full h-full object-contain animate-float-slow"
                  />
                </div>
                <div className="text-center px-4">
                  <h4 className="text-[#1A1A2E] font-black text-xl mb-1">Olá! Eu sou a Lúmia</h4>
                  <p className="text-[#6B6B78] text-sm font-semibold max-w-[250px] mx-auto">Sua orquestradora oficial de operações inteligentes e escala.</p>
                </div>
              </motion.div>

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="flex flex-col gap-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                  <p className="text-[10px] font-black uppercase text-[#611CFC] tracking-widest mb-1 ml-1 flex items-center gap-2">
                    <Sparkles size={10} /> Sugestões de Orquestração
                  </p>
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-left p-3 rounded-2xl bg-white border border-[#611CFC]/10 text-[#1A1A2E] text-xs font-bold hover:bg-[#611CFC]/5 hover:border-[#611CFC]/30 transition-all active:scale-[0.98] shadow-sm flex items-center gap-3 group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#611CFC]/5 flex items-center justify-center group-hover:bg-[#611CFC]/10">
                        <MessageCircle size={12} className="text-[#611CFC]" />
                      </div>
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm font-bold leading-relaxed shadow-sm ${
                      message.role === 'user'
                        ? 'bg-[#611CFC] text-white rounded-tr-none'
                        : 'bg-white border border-[#611CFC]/5 text-[#1A1A2E] rounded-tl-none'
                    }`}
                  >
                    {message.content}
                    <div className={`text-[9px] mt-2 font-black opacity-40 ${message.role === 'user' ? 'text-white' : 'text-[#6B6B78]'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#611CFC]/5 p-4 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-1.5 h-1.5 bg-[#611CFC] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-[#611CFC] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                        className="w-1.5 h-1.5 bg-[#611CFC] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* AI Prompt Box Integration */}
            <div className="p-6 bg-white/60 backdrop-blur-2xl border-t border-white/40">
              <PromptInputBox 
                onSend={handleSend} 
                isLoading={isLoading}
                placeholder="Orquestre sua dúvida aqui..."
                className="bg-transparent border-transparent shadow-none p-0 !rounded-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LumiaChatbot;
