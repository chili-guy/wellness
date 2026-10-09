import { ServiceItem, TestimonialItem, InstagramPost, BlogPost } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'consultation-1on1',
    title: 'Acompanhamento Nutricional 1:1',
    subtitle: 'Cuidado personalizado e contínuo',
    duration: '60 a 75 minutos',
    price: 'R$ 380',
    description: 'Investigação aprofundada de sintomas, rastreamento metabólico e elaboração de conduta individualizada para recuperar a sua vitalidade.',
    targetAudience: 'Para quem busca tratar a raiz de sintomas como fadiga crônica, inchaço, desordens menstruais e compulsão alimentar.',
    deliverables: [
      'Anamnese integrativa completa de 360°',
      'Plano alimentar anti-inflamatório individualizado',
      'Prescrição de fitoterapia e suplementação direcionada',
      'Suporte direto via WhatsApp por 30 dias entre consultas',
      'Acesso ao aplicativo com receitas e lista de compras',
    ],
  },
  {
    id: 'gut-protocol',
    title: 'Protocolo Intestino & Desinflamação',
    subtitle: 'Programa intensivo de 8 semanas',
    duration: '8 semanas de acompanhamento',
    price: 'R$ 720',
    description: 'Protocolo dos 5Rs (Remover, Recolocar, Reinocular, Reparar e Reequilibrar) para restaurar a barreira intestinal e a microbiota.',
    targetAudience: 'Especial para portadores de SII, disbiose, refluxo, intolerâncias alimentares e queixas autoimunes.',
    deliverables: [
      '3 sessões individuais com a Dra. Camila',
      'Guia passo a passo de eliminação e reintrodução alimentar',
      'Protocolo de fitoterápicos protetores de mucosa',
      'E-book exclusivo de 40 receitas terapêuticas para o intestino',
      'Acompanhamento semanal de sintomas',
    ],
  },
  {
    id: 'free-alignment',
    title: 'Conversa de Alinhamento Gratuita',
    subtitle: 'Primeiro contato sem custo',
    duration: '20 minutos online',
    price: 'Gratuito',
    description: 'Uma chamada de vídeo acolhedora para você apresentar suas queixas e entender se a nossa abordagem integrativa é o caminho certo para o seu momento.',
    targetAudience: 'Para mulheres e famílias em dúvida sobre o processo ou que queiram conhecer o método antes de iniciar.',
    deliverables: [
      'Diagnóstico prévio dos seus principais pontos de atenção',
      'Explicação detalhada de como funciona o acompanhamento',
      'Esclarecimento de dúvidas sobre consultas e exames',
      'Encaminhamento personalizado',
    ],
  },
  {
    id: 'lab-analysis',
    title: 'Análise Funcional de Exames',
    subtitle: 'Leitura preventiva e integrativa',
    duration: '50 minutos',
    price: 'R$ 320',
    description: 'Interpretação minuciosa dos seus exames de sangue através de valores ideais da medicina integrativa (não apenas os valores de referência do laboratório).',
    targetAudience: 'Para quem fez exames que deram "normais", mas continua sentindo cansaço, queda de cabelo e mal-estar.',
    deliverables: [
      'Relatório analítico comparativo com faixas ideais funcionais',
      'Identificação precoce de deficiências nutricionais e resistência à insulina',
      'Indicação de complementação e suplementação de precisão',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'A Camila foi um divisor de águas na minha saúde. Eu vivia com inchaço diário, distensão abdominal e sem disposição para brincar com meus filhos. Com as orientações práticas dela e o plano sem neuras, desinchei 4kg em poucas semanas e voltei a ter energia de sobra.',
    author: 'Mariana T.',
    location: 'São Paulo, SP',
    condition: 'Saúde Intestinal & Energia',
  },
  {
    id: 'test-2',
    quote:
      'Cheguei no consultório frustrada e exausta de ouvir que meus exames estavam normais enquanto eu mal conseguia sair da cama. A Camila investigou a raiz da inflamação da minha tireoide e desenhou um plano delicioso. Me senti acolhida e verdadeiramente ouvida como ser humano.',
    author: 'Débora P.',
    location: 'Campinas, SP',
    condition: 'Tireoide de Hashimoto & Hormônios',
  },
  {
    id: 'test-3',
    quote:
      'A Dra. Camila é maravilhosa. Empática, acolhedora e extremamente assertiva na ciência. Ela não te entrega uma folha de dieta pronta da gaveta; ela pesquisa sua rotina, suas preferências e transforma seu relacionamento com a alimentação sem culpa nenhuma.',
    author: 'Bianca B.',
    location: 'Curitiba, PR',
    condition: 'Reeducação Integrativa & Rotina',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    title: 'Itens Essenciais para Desinflamar',
    category: 'Nutrição Terapêutica',
    likes: 428,
    comments: 34,
    imageUrl: '/src/assets/images/anti_inflammatory_nutrition_1791529491386.jpg',
    summary: 'Os 5 alimentos que nunca faltam na minha despensa: cúrcuma com pimenta preta, azeite extravirgem prensado a frio, gengibre fresco, frutas vermelhas e própolis verde.',
  },
  {
    id: 'ig-2',
    title: 'Como Organizo Minhas Refeições Semanais',
    category: 'Rotina Prática',
    likes: 612,
    comments: 52,
    imageUrl: '/src/assets/images/consultation_desk_planning_1791529471037.jpg',
    summary: 'Dicas práticas de batch cooking e preparo antecipado para mulheres que não têm tempo a perder mas se recusam a depender de ultraprocessados.',
  },
  {
    id: 'ig-3',
    title: 'Dia do Nutricionista: Minha Missão',
    category: 'Propósito Clínico',
    likes: 890,
    comments: 98,
    imageUrl: '/src/assets/images/hero_nutritionist_portrait_1791529449252.jpg',
    summary: 'Celebrando 9 anos de prática clínica integrativa guiando mulheres a florescerem de dentro para fora.',
  },
  {
    id: 'ig-4',
    title: 'Saúde Intestinal e o Eixo Cérebro-Intestino',
    category: 'Ciência Descomplicada',
    likes: 543,
    comments: 41,
    imageUrl: '/src/assets/images/holistic_outdoor_wellness_1791529459323.jpg',
    summary: 'Mais de 90% da serotonina é produzida no seu trato digestivo. Entenda por que tratar ansiedade começa cuidando do que você coloca no prato.',
  },
  {
    id: 'ig-5',
    title: 'Chás Noturnos para Regular o Cortisol',
    category: 'Fitoterapia & Sono',
    likes: 731,
    comments: 63,
    imageUrl: '/src/assets/images/mindful_healthy_lifestyle_1791529481624.jpg',
    summary: 'O blend de camomila alemã, mulungu e erva-cidreira que uso para acalmar o sistema nervoso autônomo e induzir sono reparador profundo.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: '5 Sinais Silenciosos de Que Seu Intestino Precisa de Cuidados Imediatos',
    category: 'Saúde Intestinal',
    readTime: '4 min de leitura',
    date: '02 de Outubro, 2026',
    excerpt: 'Inchaço após as refeições, névoa mental e variações de humor não são "normais da idade". Descubra como reconhecer os alertas da sua microbiota.',
    content: [
      'Muitas pessoas convivem diariamente com distensão abdominal, gases constantes ou sensação de peso após comer, acreditando que é algo passageiro ou apenas "genética". No entanto, o sistema digestório é a porta de entrada para a imunidade sistêmica e o equilíbrio inflamatório.',
      'Quando as junções da parede intestinal ficam frouxas (a chamada hiperpermeabilidade intestinal ou leaky gut), fragmentos bacterianos e toxinas passam para a corrente sanguínea, ativando uma resposta imune constante.',
      'Os principais sinais incluem: 1) Oscilações de humor e ansiedade sem causa evidente; 2) Erupções cutâneas ou acne tardia; 3) Queda de energia e cansaço às 15h; 4) Desejo incontrolável por doces e carboidratos simples; 5) Intolerâncias que surgiram do nada.',
      'O primeiro passo na nutrição integrativa é acalmar a mucosa com caldos ricos em colágeno, glutamina e infusões calmantes, reduzindo alimentos ultraprocessados que agridem o epitélio.',
    ],
  },
  {
    id: 'post-2',
    title: 'Por Que Dietas Restritivas Falham a Longo Prazo e o Que Fazer em Vez Disso',
    category: 'Comportamento Alimentar',
    readTime: '5 min de leitura',
    date: '24 de Setembro, 2026',
    excerpt: 'O ciclo de restrição e compulsão cobra um preço alto do seu metabolismo e da sua tireoide. Entenda a visão da nutrição integrativa.',
    content: [
      'Quantas vezes você começou uma dieta na segunda-feira cortando carboidratos bruscamente, apenas para se ver no domingo seguinte sentindo culpa por comer um prato de massa?',
      'Seu cérebro primitivo interpreta restrições severas de calorias como um período de escassez ou fome extrema. A resposta fisiológica é óbvia: diminuição da conversão dos hormônios tireoidianos (T4 em T3), aumento do hormônio grelina (fome) e elevação do cortisol.',
      'Na nutrição integrativa, nós não tiramos antes de colocar. Primeiro nutrimos seu corpo com densidade de micronutrientes, proteínas de boa digestibilidade e gorduras nobres. Quando suas células estão saciadas e desinflamadas, a compulsão desaparece de forma natural.',
    ],
  },
  {
    id: 'post-3',
    title: 'Guia Prático de Adaptógenos e Chás Medicinais para Reduzir o Estresse',
    category: 'Fitoterapia Integrativa',
    readTime: '3 min de leitura',
    date: '15 de Setembro, 2026',
    excerpt: 'Ashwagandha, Rhodiola Rosea e infusões tradicionais: como as plantas medicinais ajudam seu organismo a responder ao estresse crônico.',
    content: [
      'Os adaptógenos são substâncias botânicas raras que auxiliam o corpo a manter o estado de homeostase frente a estressores físicos, químicos ou biológicos.',
      'Ao contrário da cafeína, que estimula artificialmente as glândulas adrenais, adaptógenos como a Ashwagandha modulam o eixo HPA (hipotálamo-hipófise-adrenal), estabilizando as curvas de cortisol ao longo do dia.',
      'Para a noite, uma infusão de camomila com melissa e casca de maracujá atua nos receptores GABAérgicos cerebrais, promovendo relaxamento muscular e preparando o corpo para as fases profundas do sono NREM.',
    ],
  },
];
