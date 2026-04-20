import { 
  GitBranch, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  Package, 
  Heart 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  icon: LucideIcon;
}

export const POSTS: Post[] = [
  {
    id: "ops-automatizei-sem-querer",
    title: "Lumi Flow: Orquestração inteligente que mata o trabalho braçal",
    excerpt: "Descubra como um ecossistema de orquestração transforma planilhas infinitas em fluxos de execução autônomos e invisíveis.",
    content: `
      <h2>A Morte da Planilha Infinita</h2>
      <p>Vamos ser sinceros: ninguém nasce sonhando em passar 4 horas por dia copiando dados de um sistema para outro. O trabalho braçal é o maior assassino de criatividade e lucro que existe no mundo corporativo moderno.</p>
      
      <p>Quando criamos o <strong>Lumi Flow</strong>, nossa missão era simples: se é repetitivo, não deveria ser feito por um humano. A automação não é sobre substituir pessoas, é sobre libertá-las para fazer o que realmente importa (como pensar na estratégia ou tomar um café sem pressa).</p>
      
      <h3>Workflow ou Orquestração?</h3>
      <p>Trabalhamos com mais do que simples fluxos; trabalhamos com orquestração que se auto-ajusta. Se um lead entra no seu CRM, ele não deveria apenas gerar uma notificação. Ele deveria ser qualificado, enriquecido com dados de mercado e entregue de bandeja para o vendedor certo, no momento exato.</p>
      
      <blockquote>"O futuro da eficiência não está em trabalhar mais, mas em deixar a Lumi Flow orquestrar sua camada operacional."</blockquote>
      
      <h3>Dicas para matar o trabalho braçal:</h3>
      <ul>
        <li>Mapeie seus processos mais repetitivos.</li>
        <li>Identifique onde os dados 'travam'.</li>
        <li>Deixe a Lumi Flow orquestrar a solução.</li>
      </ul>
    `,
    category: "Automação",
    date: "19 Abr, 2024",
    readTime: "4 min",
    image: "/blog/blog-flow.png",
    author: "Lumi AI",
    authorRole: "Intelligence Engine",
    icon: GitBranch
  },
  {
    id: "data-is-the-new-black",
    title: "Lumi Pulse: O hub de insights que torna seus dados vivos",
    excerpt: "Sistemas de IA que traduzem ruído em orquestração estratégica. Entenda o pulso do seu ecossistema antes do café esfriar.",
    content: `
      <h2>Data Visual que Desperta Desejo</h2>
      <p>Dados por si só são apenas ruído. O que você realmente precisa é de *insights* acionáveis. No mundo da Lumi Pulse, não acreditamos em tabelas estáticas de Excel que ninguém abre.</p>
      
      <p>Acreditamos em dados vivos, pulsantes, que contam uma história. Seu hub de insights não serve apenas para mostrar o que aconteceu, mas para prever o que *vai* acontecer.</p>
      
      <h3>Sentindo o Pulso do seu Ecossistema</h3>
      <p>Com o Lumi Pulse, processamos milhões de pontos de dados em milissegundos. Identificamos gargalos na orquestração da logística ou picos de demanda antes mesmo que eles virem um problema. É como ter uma bola de cristal, mas baseada em matemática sólida.</p>
      
      <h3>Por que seu Hub precisa ser 'Sexy'?</h3>
      <p>Simplicidade é o último grau da sofisticação. Quando a interface é intuitiva e bonita, sua equipe realmente a usa. Menos tempo tentando entender o gráfico, mais tempo executando a estratégia vencedora.</p>
    `,
    category: "Analytics",
    date: "18 Abr, 2024",
    readTime: "6 min",
    image: "/blog/blog-pulse.png",
    author: "Lumi AI",
    authorRole: "Intelligence Engine",
    icon: BarChart3
  },
  {
    id: "fim-das-respostas-roboticas",
    title: "Lumi Desk: O sistema de suporte com camada inteligente real",
    excerpt: "Abandone chatbots genéricos. Integre um sistema de IA que entende contexto, sentimento e orquestra soluções reais de ponta a ponta.",
    content: `
      <h2>Humanidade em Escala</h2>
      <p>Ninguém gosta de falar com um robô burro. O <strong>Lumi Desk</strong> funciona como um sistema inteligente que entende nuances. Ele sabe se o seu cliente está frustrado, confuso ou com pressa.</p>
      
      <h3>Orquestração que Converte</h3>
      <p>O Lumi Desk não apenas responde perguntas frequentes. Ele resolve problemas dentro de um ecossistema conectado. Ele acessa seu sistema de logística, localiza um pedido, explica o atraso e oferece um cupom — tudo isso com um tom de voz que o seu melhor atendente teria inveja.</p>
      
      <h3>Triagem Inteligente</h3>
      <p>Onde a IA para, o humano entra. Se o problema exige uma decisão complexa, a Lumi Desk entrega o histórico completo para sua equipe de suporte, garantindo uma operação fluida sem repetições cansativas.</p>
    `,
    category: "Suporte",
    date: "17 Abr, 2024",
    readTime: "5 min",
    image: "/blog/blog-desk.png",
    author: "Lumi AI",
    authorRole: "Intelligence Engine",
    icon: MessageSquare
  },
  {
    id: "escalando-sem-surtar",
    title: "Lumi Scale: Escalando operações com ecossistemas de IA",
    excerpt: "Triplicar o faturamento sem triplicar a complexidade. A orquestração invisível da Lumi Scale faz o heavy lifting do seu crescimento.",
    content: `
      <h2>Crescimento não precisa ser Caos</h2>
      <p>Muitas empresas morrem de "sucesso". Quando as vendas explodem, o ecossistema operacional trava. O <strong>Lumi Scale</strong> é a camada inteligente que protege sua empresa durante a fase de hipercrescimento.</p>
      
      <h3>Orquestrar para Liberar</h3>
      <p>Escalar significa fazer mais com os mesmos recursos. Como? Removendo a fricção em cada etapa do funil. Se o seu processo de vendas depende totalmente de aprovações manuais, você não tem um sistema operacional, tem uma barreira.</p>
      
      <h3>A Matemática da Orquestração</h3>
      <p>Focamos na qualificação dinâmica de leads. Integramos dados externos e internos para orquestrar abordagens que realmente convertem. Eficiência pura que se traduz em ROI imbatível para o seu ecossistema.</p>
    `,
    category: "Vendas",
    date: "16 Abr, 2024",
    readTime: "7 min",
    image: "/blog/blog-scale.png",
    author: "Lumi AI",
    authorRole: "Intelligence Engine",
    icon: TrendingUp
  },
  {
    id: "backoffice-no-piloto-automatico",
    title: "Lumi Ops: Camada inteligente para backoffice de alta escala",
    excerpt: "A mágica da orquestração invisível. Como o Lumi Ops organiza seu ecossistema logístico e operacional com precisão cirúrgica.",
    content: `
      <h2>A Invisibilidade da Eficiência</h2>
      <p>O melhor sistema de backoffice é aquele que você nem percebe que existe. Ele flui. O <strong>Lumi Ops</strong> é o cérebro escondido por trás das operações mais complexas do seu ecossistema.</p>
      
      <h3>Hub de Orquestração em Tempo Real</h3>
      <p>Gerir estoque, emissão de notas e conciliação bancária manulamente é abrir as portas para o erro. Com o Lumi Ops, orquestramos seus sistemas favoritos para que eles falem a mesma língua. Se algo sai do planejado, o sistema corrige a rota silenciosamente.</p>
      
      <h3>Operação Enxuta</h3>
      <p>Menos fricção significa menos desperdício operacional. A camada inteligente da Lumi garante que sua operação seja resiliente e escalável com simplicidade absoluta.</p>
    `,
    category: "Operações",
    date: "15 Abr, 2024",
    readTime: "5 min",
    image: "/blog/blog-ops.png",
    author: "Lumi AI",
    authorRole: "Intelligence Engine",
    icon: Package
  },
  {
    id: "segredo-da-retencao-100",
    title: "Lumi Care: O sistema de IA focado em retenção e experiência",
    excerpt: "Transforme retenção em um sistema de automação. Como o ecossistema Lumi Care cria conexões reais através de orquestração de dados.",
    content: `
      <h2>Customer Success é o Novo Hub de Vendas</h2>
      <p>Reter um cliente é muito mais barato do que adquirir um novo. O <strong>Lumi Care</strong> vira o jogo do pós-venda ao integrar uma camada inteligente de monitoramento preventivo.</p>
      
      <h3>Antecipação é Orquestrar Cuidado</h3>
      <p>Não espere o cliente reclamar. O Lumi Care analisa padrões dentro do seu ecossistema. Se percebemos que um cliente está diminuindo a atividade, orquestramos um alerta pró-ativo ou uma automação de engajamento personalizada.</p>
      
      <h3>Experiência de Marca que Dura</h3>
      <p>Personalização absoluta não é mágica, é orquestração de dados contextualizados. O cliente sente que você realmente se importa — porque seu sistema está cuidando dele 24/7.</p>
    `,
    category: "Sucesso do Cliente",
    date: "14 Abr, 2024",
    readTime: "6 min",
    image: "/blog/blog-care.png",
    author: "Lumi AI",
    authorRole: "Intelligence Engine",
    icon: Heart
  }
];
