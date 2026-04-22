import OrganicGraphics from '../components/OrganicGraphics';

export default function Cookies() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <OrganicGraphics className="opacity-10 fixed scale-125" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A2E] mb-4">
            Política de Cookies
          </h1>
          <p className="text-sm text-[#6B6B78]">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </header>

        <div className="prose prose-lg prose-slate max-w-none text-[#1A1A2E]/80">
          <section className="mb-8 p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">O que são Cookies?</h2>
            <p className="mb-4">
              Cookies são pequenos arquivos de texto que são armazenados no seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem, ou funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">1. Como usamos os Cookies?</h2>
            <p className="mb-4">
              A <span className="text-[#611CFC]">Lumi</span> utiliza cookies para melhorar sua experiência de navegação, lembrar suas preferências e entender como você interage com nosso site. Utilizamos cookies essenciais, analíticos e de marketing para garantir que nossa plataforma de automação seja a mais intuitiva possível.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">2. Tipos de Cookies que Utilizamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essenciais:</strong> Necessários para o funcionamento básico do site e segurança.</li>
              <li><strong>Desempenho:</strong> Coletam dados anônimos sobre como os visitantes usam o site.</li>
              <li><strong>Funcionais:</strong> Permitem que o site lembre de escolhas que você faz (como seu nome de usuário).</li>
              <li><strong>Marketing:</strong> Usados para rastrear a eficácia da nossa publicidade.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">3. Controle de Cookies</h2>
            <p className="mb-4">
              Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e pode configurar a maioria dos navegadores para impedir que eles sejam instalados. No entanto, se você fizer isso, poderá ter que ajustar manualmente algumas preferências sempre que visitar um site e alguns serviços e funcionalidades podem não funcionar.
            </p>
          </section>

          <section className="mb-8 text-center pt-8 border-t border-[#1A1A2E]/10">
            <p className="text-sm font-medium">
              Tem dúvidas sobre nossa política de cookies? <a href="/contact" className="text-[#611CFC] underline">Fale conosco</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
