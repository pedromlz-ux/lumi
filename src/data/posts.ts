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
    title: "Ops, automatizei sem querer: como matamos o trabalho braçal",
    excerpt: "Sabe aquela planilha infinita que te faz chorar? Pois é, ela morreu. Veja como o Lumi Flow transformou o 'copia e cola' em um pesadelo do passado.",
    content: `
      <h2>A Morte da Planilha Infinita</h2>
      <p>Vamos ser sinceros: ninguém nasce sonhando em passar 4 horas por dia copiando dados de um sistema para outro. O trabalho braçal é o maior assassino de criatividade e lucro que existe no mundo corporativo moderno.</p>
      
      <p>Quando criamos o <strong>Lumi Flow</strong>, nossa missão era simples: se é repetitivo, não deveria ser feito por um humano. A automação não é sobre substituir pessoas, é sobre libertá-las para fazer o que realmente importa (como pensar na estratégia ou tomar um café sem pressa).</p>
      
      <h3>Workflow ou Pesadelo?</h3>
      <p>Trabalhamos com workflows que se auto-ajustam. Se um lead entra no seu CRM, ele não deveria apenas gerar uma notificação. Ele deveria ser qualificado, enriquecido com dados de mercado e entregue de bandeja para o vendedor certo, no momento exato.</p>
      
      <blockquote>"O futuro da eficiência não está em trabalhar mais, mas em deixar a Lumi trabalhar por você."</blockquote>
      
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
    title: "Data is the new black: seu dashboard nunca foi tão sexy",
    excerpt: "Gráficos chatos são para o século passado. Com o Lumi Pulse, você entende o que seus dados estão gritando antes mesmo do café esfriar.",
    content: `
      <h2>Data Visual que Desperta Desejo</h2>
      <p>Dados por si só são apenas ruído. O que você realmente precisa é de *insights* acionáveis. No mundo da Lumi Pulse, não acreditamos em tabelas estáticas de Excel que ninguém abre.</p>
      
      <p>Acreditamos em dados vivos, pulsantes, que contam uma história. Seu dashboard não serve apenas para mostrar o que aconteceu, mas para prever o que *vai* acontecer.</p>
      
      <h3>Sentindo o Pulso do seu Negócio</h3>
      <p>Com o Lumi Pulse, processamos milhões de pontos de dados em milissegundos. Identificamos gargalos na logística ou picos de demanda antes mesmo que eles virem um problema. É como ter uma bola de cristal, mas baseada em matemática sólida e não em misticismo.</p>
      
      <h3>Por que seu Dashboard precisa ser 'Sexy'?</h3>
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
    title: "O fim das respostas robóticas (as de verdade)",
    excerpt: "Cansado de bots que parecem uma parede? O Lumi Desk entende contexto, sentimento e resolve B.O.s enquanto sua equipe foca no que importa.",
    content: `
      <h2>Humanidade em Escala</h2>
      <p>Ninguém gosta de falar com um robô burro. "Digite 1 para suporte"... Sério? Estamos em 2024. O <strong>Lumi Desk</strong> foi treinado para entender nuances. Ele sabe se o seu cliente está frustrado, confuso ou com pressa.</p>
      
      <h3>Conversas que Convertem</h3>
      <p>O Lumi Desk não apenas responde perguntas frequentes (FAQs). Ele resolve problemas. Ele acessa seu sistema de logística, localiza um pedido, explica o atraso e oferece um cupom de desconto — tudo isso sem intervenção humana, mas com um tom de voz que o seu melhor atendente teria inveja.</p>
      
      <h3>Triagem Inteligente</h3>
      <p>Onde a IA para, o humano entra de forma suave. Se o problema exige uma decisão complexa, a Lumi Desk entrega o histórico completo da conversa para o seu suporte, garantindo que o cliente não precise repetir tudo de novo. Isso é respeito ao tempo do cliente.</p>
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
    title: "Escalando sem surtar: guia para 10x mais vendas",
    excerpt: "Triplicar o faturamento sem triplicar o seu estoque de energético. Sim, é possível, e a gente te mostra como o Lumi Scale faz o heavy lifting.",
    content: `
      <h2>Crescimento não precisa ser Caos</h2>
      <p>Muitas empresas morrem de "sucesso". Quando as vendas explodem, o suporte trava, a logística falha e a qualidade cai. O <strong>Lumi Scale</strong> é a armadura que protege sua empresa durante a fase de hipercrescimento.</p>
      
      <h3>Automatizar para Liberar</h3>
      <p>Escalar significa fazer mais com os mesmos recursos. Como? Removendo a fricção em cada etapa do funil. Se o seu processo de vendas depende totalmente de aprovações manuais, você não está escalando, está apenas acumulando dívida técnica e operacional.</p>
      
      <h3>A Matemática do 10x</h3>
      <p>Focamos na qualificação automática de leads. Ao invés do seu time de vendas falar com 100 curiosos, eles falam com os 10 que realmente estão prontos para comprar. Eficiência pura que se traduz em ROI imbatível.</p>
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
    title: "Seu backoffice no piloto automático (literalmente)",
    excerpt: "Enquanto você dorme, os processos giram. Conheça a mágica por trás do Lumi Ops e como ele orquestra sua logística com precisão cirúrgica.",
    content: `
      <h2>A Invisibilidade da Eficiência</h2>
      <p>O melhor backoffice é aquele que você nem percebe que existe. Ele simplesmente funciona. O <strong>Lumi Ops</strong> é o cérebro escondido por trás das operações mais complexas.</p>
      
      <h3>Orquestração em Tempo Real</h3>
      <p>Gerir estoque, emissão de notas, rastreio de frota e conciliação bancária de forma manual é pedir para ter problemas. Com o Lumi Ops, integramos todos os seus sistemas para que eles falem a mesma língua. Se algo sai do planejado, o sistema corrige a rota antes mesmo de você saber.</p>
      
      <h3>Operação Enxuta</h3>
      <p>Menos erros humanos significam menos custos. Simples assim. O piloto automático da Lumi garante que sua operação seja previsível e resiliente, não importa o tamanho do desafio.</p>
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
    title: "O segredo do Retenção 100% de verdade",
    excerpt: "Relação fria com cliente é coisa de quem não tem Lumi Care. Descubra como usamos dados para criar conexões humanas reais e duradouras.",
    content: `
      <h2>Customer Success é o Novo Marketing</h2>
      <p>Reter um cliente é 7x mais barato do que adquirir um novo. Então por que tantas empresas focam apenas na venda inicial? O <strong>Lumi Care</strong> vira o jogo do pós-venda.</p>
      
      <h3>Antecipação é Cuidado</h3>
      <p>Não espere o cliente reclamar. O Lumi Care analisa padrões de uso e engajamento. Se percebemos que um cliente está diminuindo a atividade, enviamos um alerta pró-ativo para o seu time de CS ou disparamos uma automação de engajamento personalizada.</p>
      
      <h3>Conexões que Duram</h3>
      <p>Tratamos cada cliente como único. Personalização em massa parece ser paradoxal, mas com a IA da Lumi, é a nossa realidade diária. O cliente sente que você realmente se importa — porque, com a ajuda da nossa tecnologia, você consegue fazer isso de verdade.</p>
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
