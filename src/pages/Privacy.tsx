import OrganicGraphics from '../components/OrganicGraphics';

export default function Privacy() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <OrganicGraphics className="opacity-10 fixed scale-125" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A2E] mb-4">
            Política de Privacidade
          </h1>
          <p className="text-sm text-[#6B6B78]">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </header>

        <div className="prose prose-lg prose-slate max-w-none text-[#1A1A2E]/80">
          <section className="mb-8 p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">Privacidade Primeiro.</h2>
            <p className="mb-4">
              Na <span className="text-[#611CFC]">Lumi</span>, sua privacidade não é apenas um termo legal; é o pilar de nossa tecnologia. 
              Garantimos total transparência sobre como seus dados alimentam nossas automações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">1. Coleta de Dados</h2>
            <p className="mb-4">
              Coletamos apenas as informações estritamente necessárias para o funcionamento das suas integrações: 
              dados de contato e logs de automação para fins de depuração e melhoria contínua.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">2. Segurança da Informação</h2>
            <p className="mb-4">
              Utilizamos criptografia de ponta a ponta e protocolos de segurança de nível bancário 
              para proteger cada bit que passa por nossos sistemas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">3. Compartilhamento</h2>
            <p className="mb-4">
              NUNCA vendemos seus dados. Informações só são compartilhadas com provedores de serviços 
              estritamente necessários (ex: gateways de automação) quando explicitamente autorizado por você.
            </p>
          </section>

          <section className="mb-8 text-center pt-8 border-t border-[#1A1A2E]/10">
            <p className="text-sm font-medium">
              Deseja remover seus dados? <a href="/contact" className="text-[#611CFC] underline">Entre em contato</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
