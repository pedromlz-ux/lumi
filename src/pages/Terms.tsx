import OrganicGraphics from '../components/OrganicGraphics';

export default function Terms() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <OrganicGraphics className="opacity-10 fixed" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A2E] mb-4">
            Termos de Uso
          </h1>
          <p className="text-sm text-[#6B6B78]">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </header>

        <div className="prose prose-lg prose-slate max-w-none text-[#1A1A2E]/80">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">
              Ao acessar e usar a <span className="text-[#611CFC]">Lumi</span>, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
              Nossas soluções de automação são projetadas para otimizar seus processos de negócio com ética e eficiência.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">2. Uso do Serviço</h2>
            <p className="mb-4">
              Você concorda em usar nossas ferramentas apenas para fins lícitos. A <span className="text-[#611CFC]">Lumi</span> reserva-se o direito de 
              suspender o acesso em caso de uso indevido que comprometa a integridade de nossa infraestrutura de IA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">3. Propriedade Intelectual</h2>
            <p className="mb-4">
              Todo o conteúdo, algoritmos e design do site são de propriedade exclusiva da <span className="text-[#611CFC]">Lumi</span>. 
              A marca é protegida por direitos autorais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">4. Limitação de Responsabilidade</h2>
            <p className="mb-4">
              Trabalhamos para garantir 100% de disponibilidade, mas não nos responsabilizamos por perdas indiretas 
              decorrentes de falhas técnicas momentâneas em serviços de terceiros integrados.
            </p>
          </section>

          <section className="mb-8 text-center pt-8 border-t border-[#1A1A2E]/10">
            <p className="text-sm font-medium">
              Dúvidas sobre estes termos? <a href="/contact" className="text-[#611CFC] underline">Fale conosco</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
