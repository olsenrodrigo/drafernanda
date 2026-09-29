/**
 * Todo o texto do site mora aqui, espelhando o documento de copy
 * ("SITE COPY Dra Fernanda Furmankiewicz.md"). Os componentes só desenham.
 *
 * Pendências da cliente (ver seção 13 da copy):
 * - `contato.whatsapp`: vazio enquanto o número do WhatsApp Business não chega.
 *   Com ele vazio, os botões levam ao formulário e o formulário abre o e-mail.
 *   Preencha só com dígitos, com DDI e DDD: "5511999999999".
 * - `profissional.crn`: falta a UF.
 * - `endereco.complemento`/`bairro`/`cep`: a confirmar.
 */

export const SITE_URL = "https://www.minhanutricionista.com.br";

export const profissional = {
  nome: "Dra. Fernanda Furmankiewicz",
  nomeCurto: "Fernanda Furmankiewicz",
  profissao: "Nutricionista",
  crn: "CRN 6042",
  formacao: "Formação USP",
  experiencia: "30+ anos de experiência",
};

export const contato = {
  whatsapp: "",
  email: "fernanda@minhanutricionista.com.br",
  instagram: "fefurmankiewicz",
};

export const endereco = {
  logradouro: "Av. Marquês de São Vicente, 2219",
  complemento: "",
  bairro: "",
  cidade: "São Paulo",
  uf: "SP",
  cep: "",
};

export const enderecoLinha = [
  endereco.logradouro,
  endereco.complemento,
  endereco.bairro,
  `${endereco.cidade}/${endereco.uf}`,
]
  .filter(Boolean)
  .join(" — ");

export const instagramUrl = `https://www.instagram.com/${contato.instagram}/`;

export const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${endereco.logradouro}, ${endereco.cidade} - ${endereco.uf}`,
)}`;

export const mapaEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `${endereco.logradouro}, ${endereco.cidade} - ${endereco.uf}`,
)}&z=16&output=embed`;

export const temWhatsapp = contato.whatsapp.length > 0;

/** Link de agendamento: WhatsApp quando houver número; senão, o formulário. */
export function linkAgendamento(mensagem = "Olá, Dra. Fernanda! Gostaria de agendar uma consulta.") {
  return temWhatsapp
    ? `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`
    : "#agendar";
}

export const navegacao = [
  { id: "sobre", rotulo: "Sobre" },
  { id: "quando-procurar", rotulo: "Quando procurar" },
  { id: "atendimentos", rotulo: "Atendimentos" },
  { id: "consulta", rotulo: "A consulta" },
  { id: "duvidas", rotulo: "Dúvidas" },
  { id: "agendar", rotulo: "Contato" },
];

export const abertura = {
  titulo: "Nutrição de verdade, para quem decidiu cuidar da saúde",
  destaque: "a longo prazo",
  subtitulo:
    "Mais de 30 anos de experiência clínica e formação pela USP. Um método que explica o porquê de cada orientação — para você entender, não só seguir regras.",
  ctaPrincipal: "Agendar minha consulta",
  ctaSecundario: "Conhecer o método",
  selos: ["30+ anos de experiência", "Formação USP", profissional.crn],
};

export const sobre = {
  titulo: "Quem é a Dra. Fernanda",
  paragrafos: [
    "Formada em Nutrição pela USP — uma das escolas mais tradicionais do país —, a Dra. Fernanda Furmankiewicz acumula mais de 30 anos de atuação clínica. Ao longo desse tempo, viu a nutrição se transformar num assunto pulverizado nas redes sociais, cheio de promessas milagrosas e regras sem explicação. Ela seguiu um caminho diferente.",
    "Seu trabalho não é sobre listas de alimentos proibidos ou resultado da noite para o dia. É sobre entender como o seu corpo funciona, por que cada orientação faz sentido para a sua rotina, e construir — com tempo e acompanhamento — uma relação com a comida que sustenta energia, saúde e qualidade de vida no longo prazo.",
  ],
  trajetoriaTitulo: "Trajetória",
  trajetoria: [
    "Formação em Nutrição pela USP, com base científica tradicional.",
    "Mais de 30 anos de atuação clínica, atendendo pacientes de todas as idades — inclusive crianças, a partir do momento em que já conseguem entender a lógica do que estão comendo, sempre com a participação dos pais.",
    "Consultas construídas em torno da educação nutricional: cada orientação vem acompanhada da explicação de como e por que funciona.",
    "Acompanhamento apoiado em dados mensuráveis, com avaliação de composição corporal (bioimpedância) na maior parte das consultas.",
    "Atendimento individual, de casal ou em família — porque mudar hábito sozinho, numa casa onde ninguém mais muda, raramente funciona.",
  ],
};

export const sinais = {
  titulo: "Quando procurar uma nutricionista",
  intro:
    "Algumas situações que aparecem com frequência no consultório. Se uma delas descreve o seu momento, vale conversar.",
  itens: [
    {
      titulo: "Ganho de peso sem explicação aparente",
      texto:
        "Mesmo comendo “normal”, o peso sobe e você não entende por quê — muitas vezes é uma questão de rotina e composição corporal, não de força de vontade.",
    },
    {
      titulo: "Emagreceu rápido, mas está sem energia",
      texto:
        "Perdeu peso e, junto, perdeu força, disposição e massa magra. Isso não é normal nem definitivo — dá para reconstruir.",
    },
    {
      titulo: "Diagnóstico de diabetes ou pré-diabetes sem orientação nutricional",
      texto: "Recebeu a medicação, mas ninguém te explicou o que fazer no prato no dia a dia.",
    },
    {
      titulo: "Mudanças na menopausa ou perimenopausa",
      texto:
        "O metabolismo muda, o corpo responde diferente — e a alimentação precisa se ajustar junto.",
    },
    {
      titulo: "Quer mudar a alimentação da família, não só a sua",
      texto: "Sozinho(a), é difícil sustentar uma mudança que o resto da casa não acompanha.",
    },
    {
      titulo: "Já tentou várias dietas da internet e não confia mais em nenhuma",
      texto:
        "Excesso de informação contraditória deixa qualquer um perdido sobre o que realmente funciona.",
    },
    {
      titulo: "Colesterol alto, resistência à insulina ou síndrome metabólica",
      texto:
        "Condições que pedem ajuste alimentar estruturado, não só “cortar isso ou aquilo”.",
    },
    {
      titulo: "Come pouco, mas não vê resultado",
      texto:
        "Comer menos não é o mesmo que comer bem — às vezes falta nutriente, não falta restrição.",
    },
  ],
};

export const atendimentos = {
  titulo: "Atendimentos",
  intro:
    "Cada acompanhamento parte da sua rotina e do seu histórico. Estas são as frentes em que a Dra. Fernanda mais atua.",
  servicos: [
    {
      titulo: "Emagrecimento saudável",
      texto:
        "Planejamento alimentar com foco em perda de peso e manutenção real a longo prazo — sem dieta milagrosa.",
    },
    {
      titulo: "Reeducação alimentar",
      texto:
        "Mudança de hábitos de forma gradual e sustentável, no ritmo que cabe na sua rotina.",
    },
    {
      titulo: "Nutrição para diabetes",
      texto:
        "Controle alimentar para equilíbrio glicêmico e qualidade de vida — sem alarmismo e sem privação desnecessária.",
    },
    {
      titulo: "Nutrição na menopausa",
      texto:
        "Ajustes nutricionais para os sintomas hormonais e as mudanças no metabolismo típicas dessa fase.",
    },
    {
      titulo: "Nutrição esportiva",
      texto: "Acompanhamento alimentar para melhora de desempenho físico e recuperação.",
    },
    {
      titulo: "Avaliação de composição corporal (bioimpedância)",
      texto:
        "Exame não invasivo que analisa gordura corporal, massa magra e hidratação — acompanhamento preciso da sua evolução, além da balança.",
    },
    {
      titulo: "Nutrição para gestantes",
      texto: "Suporte nutricional durante a gestação, com foco na saúde da mãe e do bebê.",
    },
    {
      titulo: "Nutrição familiar",
      texto:
        "Orientação alimentar para toda a família, pensada para a rotina e a praticidade de casa.",
    },
  ],
  condicoesTitulo: "Também são atendidas as condições",
  condicoes: [
    "Obesidade e sobrepeso",
    "Resistência à insulina",
    "Diabetes tipo 2",
    "Compulsão alimentar",
    "Colesterol alto (dislipidemia)",
    "Síndrome metabólica",
    "Alterações hormonais na menopausa",
  ],
};

export type Destaque = {
  id: string;
  rotulo: string;
  titulo: string;
  texto: string;
  beneficios: string[];
  passos: string[];
  cta: string;
  mensagem: string;
};

export const destaques: Destaque[] = [
  {
    id: "pos-emagrecimento",
    rotulo: "Pós-emagrecimento",
    titulo: "Energia, força e massa magra de volta",
    texto:
      "Emagrecer é só a primeira etapa. Quando a perda de peso é rápida, o que sai não é só gordura — sai massa magra também, e é ela que sustenta sua energia, sua força e o seu metabolismo. Cansaço extremo, flacidez e falta de disposição depois de emagrecer não são normais nem definitivos: são sinal de que falta reconstruir o que se perdeu no caminho.",
    beneficios: [
      "Recuperação de energia e disposição no dia a dia",
      "Preservação e reconstrução de massa magra",
      "Acompanhamento mensurável por bioimpedância, não só pela balança",
      "Plano alimentar que cabe no seu apetite e na sua rotina atuais",
    ],
    passos: [
      "Avaliação inicial detalhada (rotina, hábitos, histórico) + bioimpedância",
      "Plano alimentar construído com você, com a explicação do porquê de cada escolha",
      "Acompanhamento contínuo, com retorno por vídeo entre consultas quando necessário",
    ],
    cta: "Quero reconstruir minha energia",
    mensagem:
      "Olá, Dra. Fernanda! Emagreci e quero recuperar energia e massa magra. Gostaria de agendar uma consulta.",
  },
  {
    id: "diabetes",
    rotulo: "Diabetes",
    titulo: "O prato que evita que a dose só aumente",
    texto:
      "Muita gente sai da consulta com o endocrinologista com a medicação prescrita, mas sem ninguém para explicar o que fazer no prato. O resultado costuma ser medo, restrição excessiva e desnecessária — e, às vezes, um controle que não melhora porque o erro alimentar nunca foi identificado.",
    beneficios: [
      "Entendimento claro do que realmente impacta a sua glicemia",
      "Alimentação equilibrada, sem viver de sopa e privação extrema",
      "Menos dependência de achismo e palpite de terceiros",
      "Uma alimentação que, no fim das contas, é uma alimentação saudável para qualquer pessoa",
    ],
    passos: [
      "Avaliação completa do quadro clínico e da rotina alimentar atual",
      "Identificação dos erros alimentares que impactam o controle glicêmico",
      "Plano de ajuste gradual, com acompanhamento contínuo",
    ],
    cta: "Quero entender minha alimentação",
    mensagem:
      "Olá, Dra. Fernanda! Tenho diabetes (ou pré-diabetes) e quero entender minha alimentação. Gostaria de agendar uma consulta.",
  },
];

export const diferenciais = {
  titulo: "Como é o acompanhamento",
  intro: "O que você encontra no consultório — e o que não vai encontrar.",
  itens: [
    {
      titulo: "Consulta de verdade, não de 15 minutos",
      texto:
        "A primeira consulta dura em torno de 1 hora — tempo para entender sua rotina, seus hábitos e seu histórico com profundidade.",
    },
    {
      titulo: "Você entende o porquê",
      texto:
        "Cada orientação vem acompanhada da explicação de como o seu corpo processa aquele alimento — não é uma lista de regras soltas.",
    },
    {
      titulo: "Resultado mensurável, não só a balança",
      texto:
        "Avaliação de composição corporal por bioimpedância acompanha sua evolução real: massa magra, gordura corporal e hidratação.",
    },
    {
      titulo: "Atendimento em família ou casal",
      texto:
        "Quando faz sentido, a consulta pode incluir quem mais precisa participar da mudança — porque hábito não muda sozinho numa casa inteira.",
    },
    {
      titulo: "Acompanhamento contínuo",
      texto:
        "Retorno por vídeo entre consultas presenciais, quando necessário — você não fica sozinho(a) até a próxima consulta.",
    },
    {
      titulo: "Ciência, sem modismo",
      texto:
        "Trinta anos de formação tradicional (USP) aplicados à sua vida real — sem dieta milagrosa, sem promessa vazia.",
    },
  ],
};

export type Duvida = { pergunta: string; resposta: string };

export const duvidas: Duvida[] = [
  {
    pergunta: "A consulta é presencial ou online?",
    resposta:
      "Os dois formatos existem. O atendimento presencial acontece às quartas-feiras pela manhã; o online pode ser agendado em outros dias, conforme disponibilidade.",
  },
  {
    pergunta: "Vocês atendem convênio?",
    resposta: "O atendimento é apenas particular.",
  },
  {
    pergunta: "Quanto tempo dura a primeira consulta?",
    resposta:
      "Em torno de 1 hora — tempo necessário para entender sua rotina, seus hábitos e seu histórico com profundidade.",
  },
  {
    pergunta: "É possível fazer consulta em família ou casal?",
    resposta:
      "Sim. Quando faz sentido para o caso, o atendimento pode incluir outras pessoas da casa, com condições especiais para esse formato.",
  },
  {
    pergunta: "Depois da primeira consulta, como funciona o retorno?",
    resposta:
      "Quando necessário, o retorno acontece por vídeo, geralmente cerca de 15 dias depois — sem deixar você sem suporte até a próxima consulta presencial.",
  },
  {
    pergunta: "Preciso levar exames?",
    resposta:
      "Se você já tiver exames recentes, é útil trazê-los. Também é feita, na maioria das consultas, uma avaliação de composição corporal (bioimpedância) no próprio atendimento.",
  },
];

export const agendar = {
  titulo: "Chega de tentar sozinho(a).",
  subtitulo: "Vamos construir, juntos, uma alimentação que sustente a sua vida real.",
  objetivos: [
    "Emagrecimento saudável",
    "Diabetes",
    "Menopausa",
    "Nutrição familiar",
    "Nutrição esportiva",
    "Gestação",
    "Outro",
  ],
  botao: "Quero agendar minha consulta",
  unidade: [
    { rotulo: "Atendimento presencial", texto: "Quartas-feiras pela manhã (consultório EMNH)" },
    { rotulo: "Atendimento online", texto: "Demais dias, mediante agendamento" },
    { rotulo: "Convênio", texto: "Atendimento apenas particular" },
  ],
};

export const seo = {
  title: "Fernanda Furmankiewicz | Nutricionista em São Paulo",
  description:
    "Nutricionista com 30+ anos de experiência (USP). Emagrecimento saudável, diabetes, menopausa e nutrição familiar em São Paulo. Agende sua consulta.",
};
