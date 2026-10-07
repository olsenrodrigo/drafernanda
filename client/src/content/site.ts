/**
 * Todo o texto do site mora aqui. Base: "SITE COPY Dra Fernanda Furmankiewicz.md",
 * revisada pela cliente em "site fernanda furmankiewicz .docx" (tom acolhedor e
 * educativo: sem confronto, sem promessa de resultado). Os componentes só desenham.
 *
 * Pendências da cliente (ver seção 13 da copy):
 * - `contato.whatsapp`: vazio enquanto o número do WhatsApp Business não chega.
 *   Com ele vazio, os botões levam ao formulário e o formulário abre o e-mail.
 *   Preencha só com dígitos, com DDI e DDD: "5511999999999".
 * - `endereco.complemento`/`bairro`/`cep`: a confirmar.
 */

export const SITE_URL = "https://www.minhanutricionista.com.br";

export const profissional = {
  nome: "Dra. Fernanda Furmankiewicz",
  nomeCurto: "Fernanda Furmankiewicz",
  profissao: "Nutricionista",
  crn: "CRN-3 6042",
  formacao: "Formação USP",
  experiencia: "Mais de 30 anos de carreira",
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
  titulo: "Alimentação que cuida",
  destaque: "da sua saúde",
  subtitulo:
    "Com orientação individualizada e baseada em ciência, você aprende a fazer escolhas que combinam com sua saúde, seus gostos e sua rotina.",
  apoio:
    "Na consulta, sua história, seus hábitos e suas necessidades são considerados para construir orientações possíveis de colocar em prática no dia a dia.",
  ctaPrincipal: "Agendar minha consulta",
  ctaSecundario: "Conhecer a Dra. Fernanda",
  selos: ["Formação USP", "Presencial e online", profissional.crn],
};

export const sobre = {
  titulo: "Quem é a Dra. Fernanda",
  paragrafos: [
    "Sou nutricionista formada pela USP. Minha experiência de mais de 30 anos ao longo da carreira, em diferentes áreas da nutrição, ampliou meu olhar sobre a alimentação e contribui para a forma como avalio e oriento cada paciente.",
    "Acredito que uma alimentação saudável também precisa ser saborosa, prazerosa e sociável. Por isso, nas consultas, considero não apenas as necessidades de saúde, mas também a história, os hábitos, a cultura e a rotina de cada pessoa. Gosto de explicar as orientações e ajudar a construir mudanças práticas que possam fazer parte da vida, sem deixar de lado o prazer de comer.",
  ],
  trajetoriaTitulo: "Trajetória",
  trajetoria: [
    "Formação em Nutrição pela USP, com base científica tradicional.",
    "Uma trajetória em diferentes áreas da nutrição que amplia o olhar sobre os hábitos alimentares e as necessidades de cada paciente.",
    "Orientações construídas com o paciente, para que ele compreenda a lógica das escolhas alimentares e possa aplicá-las com segurança no dia a dia.",
    "Acompanhamento apoiado em dados mensuráveis, com avaliação de composição corporal (bioimpedância).",
    "Quando necessário, o atendimento pode envolver a família, para facilitar mudanças na rotina alimentar de todos.",
  ],
};

export const sinais = {
  rotulo: "Orientação nutricional",
  titulo: "Quando procurar um nutricionista",
  intro:
    "A orientação nutricional pode ajudar em diferentes momentos da vida. Não é preciso esperar um diagnóstico para começar a cuidar da alimentação.",
  itens: [
    {
      titulo: "Quer aprender a se alimentar melhor",
      texto:
        "Entender como montar refeições equilibradas e fazer escolhas possíveis na sua rotina é uma forma de cuidar da saúde hoje e ao longo da vida.",
    },
    {
      titulo: "Percebeu mudanças no peso e quer entendê-las",
      texto:
        "O peso pode mudar por diferentes motivos. Uma avaliação individual ajuda a olhar para a alimentação, a rotina e a composição corporal sem recorrer a restrições por conta própria.",
    },
    {
      titulo: "Perdeu peso e percebeu queda de força ou disposição",
      texto:
        "Além do número na balança, vale observar como você está se sentindo e avaliar se a alimentação atende às suas necessidades.",
    },
    {
      titulo: "Recebeu um diagnóstico de diabetes ou pré-diabetes",
      texto:
        "A orientação nutricional ajuda a entender como organizar as refeições no dia a dia e a fazer escolhas adequadas ao seu tratamento.",
    },
    {
      titulo: "Está passando pela menopausa ou perimenopausa",
      texto:
        "Essa fase pode trazer novas dúvidas sobre alimentação, sintomas, peso e saúde. O acompanhamento considera suas necessidades e sua rotina.",
    },
    {
      titulo: "Quer melhorar a alimentação da família",
      texto:
        "É possível pensar em refeições saudáveis, saborosas e práticas para a casa, respeitando os gostos e os hábitos de quem vive nela.",
    },
    {
      titulo: "Está confuso com tantas dietas e informações",
      texto:
        "Entre regras e recomendações contraditórias, uma orientação individualizada ajuda a entender o que é relevante para você.",
    },
    {
      titulo: "Precisa cuidar do colesterol ou de outras alterações metabólicas",
      texto:
        "Condições como colesterol alto, resistência à insulina e síndrome metabólica pedem orientações ajustadas à sua saúde, sem transformar a alimentação em uma lista de proibições.",
    },
    {
      titulo: "Tem dúvidas sobre quanto e como comer",
      texto:
        "Se você tenta cuidar da alimentação, mas ainda não sabe como distribuir as refeições ou ajustar as porções, a consulta ajuda a avaliar seus hábitos e encontrar caminhos práticos.",
    },
  ],
  fechamento:
    "Seja para prevenir, aprender ou lidar com uma condição de saúde, a alimentação pode ser cuidada de forma individualizada e possível de manter.",
};

export const atendimentos = {
  rotulo: "Atendimentos",
  titulo: "Áreas de atendimento",
  intro:
    "O acompanhamento nutricional considera a saúde, os objetivos e a rotina de cada pessoa e pode ajudar nos seguintes cuidados:",
  servicos: [
    {
      titulo: "Alimentação saudável e prevenção",
      texto:
        "Orientações para melhorar a qualidade da alimentação, organizar as refeições e construir hábitos que contribuam para a saúde ao longo da vida.",
    },
    {
      titulo: "Emagrecimento e composição corporal",
      texto:
        "Planejamento alimentar individualizado para cuidar do peso e da composição corporal, respeitando as necessidades, as preferências e o momento de cada paciente.",
    },
    {
      titulo: "Nutrição no cuidado de condições de saúde",
      texto:
        "Orientações alimentares adaptadas ao quadro clínico e ao tratamento, considerando exames, sintomas e necessidades individuais.",
    },
    {
      titulo: "Nutrição para diabetes e pré-diabetes",
      texto:
        "Orientações para entender a relação entre alimentação e glicemia e organizar as refeições com mais segurança, considerando o tratamento, as preferências e a rotina de cada pessoa.",
    },
    {
      titulo: "Alimentação nas diferentes fases da vida",
      texto:
        "Acompanhamento das mudanças nas necessidades nutricionais ao longo da vida, com atenção à saúde, à disposição e à qualidade de vida.",
    },
    {
      titulo: "Nutrição para a prática de atividade física",
      texto:
        "Adequação da alimentação à rotina de exercícios, aos objetivos e às necessidades de recuperação.",
    },
  ],
  formatos: {
    titulo: "Formatos de atendimento",
    texto:
      "Consultas individuais ou em família, presenciais ou online, conforme as necessidades de cada atendimento.",
  },
};

export type Destaque = {
  id: string;
  rotulo: string;
  titulo: string;
  paragrafos: string[];
  foco: string[];
  passos: { titulo: string; texto: string }[];
  cta: string;
  mensagem: string;
};

export const destaques: Destaque[] = [
  {
    id: "perda-de-peso",
    rotulo: "Perda de peso",
    titulo: "Cuidado nutricional durante e após a perda de peso",
    paragrafos: [
      "O cuidado vai além do emagrecimento. A qualidade da alimentação, a preservação da massa muscular e a manutenção da força e da disposição também merecem atenção durante e após a perda de peso.",
      "O acompanhamento nutricional considera as necessidades, o apetite e a rotina de cada pessoa, com orientações que favoreçam mudanças duradouras. O objetivo é cuidar da saúde no presente e contribuir para uma longevidade com autonomia e qualidade de vida.",
    ],
    foco: [
      "Alimentação equilibrada e adequada às necessidades individuais.",
      "Estratégias nutricionais para favorecer a preservação da massa muscular.",
      "Avaliação da evolução, considerando a composição corporal e outros indicadores de saúde.",
      "Hábitos que possam ser mantidos após a perda de peso, respeitando as preferências e o prazer de comer.",
    ],
    passos: [
      {
        titulo: "Avaliação individualizada",
        texto:
          "Conhecimento da história de saúde, dos hábitos, da rotina e dos objetivos, com avaliação da composição corporal quando indicada.",
      },
      {
        titulo: "Planejamento alimentar personalizado",
        texto:
          "Orientações práticas, considerando as necessidades nutricionais, o apetite e as preferências, com compreensão da lógica das escolhas alimentares.",
      },
      {
        titulo: "Acompanhamento e ajustes",
        texto:
          "Reavaliação das necessidades e adaptação das orientações ao longo do processo, para apoiar a continuidade do cuidado.",
      },
    ],
    cta: "Agendar consulta",
    mensagem:
      "Olá, Dra. Fernanda! Gostaria de agendar uma consulta sobre alimentação durante ou após a perda de peso.",
  },
  {
    id: "diabetes",
    rotulo: "Diabetes",
    titulo: "Alimentação no cuidado do diabetes",
    paragrafos: [
      "A alimentação é parte essencial do tratamento do diabetes e do cuidado do pré-diabetes. Ao lado da medicação, quando indicada, da atividade física e do acompanhamento de saúde, contribui para o controle da glicemia e para a saúde ao longo da vida.",
      "O acompanhamento nutricional ajuda a compreender como os alimentos, as porções e os horários das refeições se relacionam com a glicemia. As orientações consideram o tratamento, as preferências e a rotina de cada pessoa, preservando a variedade, o sabor e o prazer de comer.",
    ],
    foco: [
      "Compreensão das escolhas alimentares e de seus efeitos sobre a glicemia.",
      "Organização das refeições, com atenção às porções, combinações e horários.",
      "Alimentação adequada às necessidades individuais e ao tratamento.",
      "Construção de hábitos que contribuam para a saúde e a qualidade de vida ao longo do tempo.",
    ],
    passos: [
      {
        titulo: "Avaliação individualizada",
        texto:
          "Análise da história de saúde, dos exames, dos medicamentos em uso e da rotina alimentar.",
      },
      {
        titulo: "Orientações práticas e personalizadas",
        texto:
          "Planejamento alimentar que ajuda a compreender a lógica das escolhas e aplicá-las com segurança no dia a dia.",
      },
      {
        titulo: "Acompanhamento e ajustes",
        texto:
          "Reavaliação dos hábitos e dos resultados, com ajustes nas orientações e integração com o cuidado da equipe de saúde.",
      },
    ],
    cta: "Agendar consulta",
    mensagem:
      "Olá, Dra. Fernanda! Gostaria de agendar uma consulta sobre alimentação no cuidado do diabetes (ou pré-diabetes).",
  },
];

export const diferenciais = {
  titulo: "Como é o acompanhamento",
  itens: [
    {
      titulo: "Escuta e atenção à sua realidade",
      texto:
        "A consulta é um espaço para conhecer sua saúde, seus hábitos, suas preferências e sua rotina, com atenção às dúvidas e dificuldades que você traz.",
    },
    {
      titulo: "Compreensão das escolhas alimentares",
      texto:
        "Entender a lógica das orientações ajuda a fazer escolhas com mais segurança e autonomia, em diferentes situações do cotidiano.",
    },
    {
      titulo: "Avaliação da composição corporal",
      texto:
        "Quando indicado, o exame de bioimpedância complementa a avaliação nutricional e ajuda a acompanhar mudanças na composição corporal ao longo do tempo.",
    },
    {
      titulo: "Planejamento alimentar individualizado",
      texto:
        "As orientações consideram suas necessidades e seus objetivos, respeitando seus gostos, hábitos culturais e o prazer de comer.",
    },
    {
      titulo: "Continuidade do cuidado",
      texto:
        "O acompanhamento permite esclarecer dúvidas e ajustar as orientações conforme sua evolução. O retorno online é combinado durante a consulta, de acordo com as necessidades de cada paciente.",
    },
    {
      titulo: "Cuidado apoiado em ciência",
      texto:
        "O conhecimento científico orienta a avaliação e as recomendações, com atenção à saúde no presente e à construção de uma longevidade com autonomia e qualidade de vida.",
    },
  ],
  cta: "Agendar consulta",
};

export type Duvida = { pergunta: string; resposta: string };

export const duvidasIntro =
  "Confira algumas informações sobre as consultas. Para outras dúvidas,";

export const duvidas: Duvida[] = [
  {
    pergunta: "A consulta é presencial ou online?",
    resposta:
      "Os atendimentos estão disponíveis nos dois formatos. As consultas presenciais no Instituto Emunah acontecem às quartas-feiras pela manhã. As consultas online podem ser agendadas em outros dias, conforme disponibilidade.",
  },
  {
    pergunta: "O atendimento é por convênio?",
    resposta: "O atendimento é particular.",
  },
  {
    pergunta: "Como é a primeira consulta?",
    resposta:
      "A primeira consulta inclui uma conversa sobre sua saúde, sua história alimentar, seus hábitos e seus objetivos. A avaliação nutricional orienta um planejamento adequado às suas necessidades e à sua rotina.",
  },
  {
    pergunta: "É possível realizar consultas de casal ou em família?",
    resposta:
      "Sim. O atendimento pode envolver o casal ou a família, considerando as necessidades individuais e a organização da alimentação em casa. O formato é definido no agendamento.",
  },
  {
    pergunta: "Como funciona o retorno?",
    resposta:
      "Após a consulta presencial, pode ser realizado um retorno online gratuito no mesmo mês, conforme a necessidade e o combinado durante o atendimento. Esse encontro permite esclarecer dúvidas e ajustar as orientações.",
  },
  {
    pergunta: "Preciso levar exames?",
    resposta:
      "Se houver exames recentes, é importante levá-los à consulta, junto com informações sobre medicamentos e suplementos em uso.",
  },
  {
    pergunta: "A consulta inclui bioimpedância?",
    resposta:
      "A avaliação da composição corporal por bioimpedância pode ser realizada na consulta presencial, quando indicada. As orientações de preparo são informadas no agendamento.",
  },
];

export const agendar = {
  titulo: "Seu cuidado pode começar com uma conversa",
  subtitulo:
    "Orientação nutricional para cuidar da saúde, respeitando sua rotina, suas preferências e o prazer de comer.",
  formTitulo: "Entre em contato para agendar",
  formTexto: "Informe seus dados para consultar a disponibilidade de horários.",
  objetivos: [
    "Alimentação saudável e prevenção",
    "Emagrecimento e composição corporal",
    "Cuidado durante e após a perda de peso",
    "Diabetes ou pré-diabetes",
    "Outras condições de saúde",
    "Fases da vida (como a menopausa)",
    "Atividade física",
    "Alimentação da família",
    "Prefiro conversar sobre isso na consulta",
  ],
  botaoEmail: "Enviar solicitação por e-mail",
  avisoEmail:
    "Ao clicar, seu aplicativo de e-mail será aberto com a solicitação preenchida. Para concluir o contato, envie a mensagem.",
  botaoWhatsapp: "Enviar solicitação pelo WhatsApp",
  avisoWhatsapp:
    "Ao clicar, o WhatsApp será aberto com a solicitação preenchida. Para concluir o contato, envie a mensagem.",
  unidade: [
    { rotulo: "Atendimento presencial", texto: "Quartas-feiras pela manhã, ou conforme disponibilidade." },
    { rotulo: "Atendimento online", texto: "Outros dias, conforme disponibilidade" },
    { rotulo: "Convênio", texto: "Atendimento particular" },
  ],
};

export const seo = {
  title: "Fernanda Furmankiewicz | Nutricionista em São Paulo",
  description:
    "Nutricionista formada pela USP, em São Paulo. Orientação individualizada e baseada em ciência para alimentação saudável, emagrecimento, diabetes e diferentes fases da vida. Consultas presenciais e online.",
};
