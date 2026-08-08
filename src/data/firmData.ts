import { PracticeArea, AttorneyProfile } from '../types';

export const FIRM_DETAILS = {
  name: "Pedro Ribeiro Advogado Criminalista",
  tagline: "Defesa Penal Técnica, Ética e Incondicional",
  phone: "+55 (11) 99999-8888",
  emergencyPhone: "+55 (11) 98888-7777",
  address: "Av. Paulista, 1000 - São Paulo, SP",
  foundingYear: 2012,
  totalRecovered: "1000+ Casos Defendidos",
  winRate: "Especialista Penal",
  activeJurisdictions: "TJSP · TRF · STJ · STF"
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "atuacao-flagrante",
    title: "Atuação em Flagrante",
    description: "Nada de pânico: se azedar e for preso em flagrante, solicite o contato comigo imediatamente para garantir que seus direitos sejam respeitados desde o primeiro minuto na delegacia.",
    iconName: "ShieldAlert",
    keyStats: "Atendimento de Urgência 24h",
    notableCases: [
      "Garantia de integridade física e direitos constitucionais na delegacia",
      "Relaxamento de prisão ilegal por vício formal no auto de prisão"
    ]
  },
  {
    id: "audiencia-custodia",
    title: "Audiência de Custódia",
    description: "Acompanho você ou seu familiar presencialmente na audiência de custódia, atuando estrategicamente para evitar a prisão desnecessária e garantir a liberdade desde o começo.",
    iconName: "Scale",
    keyStats: "Preservação da Liberdade",
    notableCases: [
      "Concessão de liberdade provisória sem ou com medidas cautelares",
      "Identificação e arguição de nulidades na prisão em flagrante"
    ]
  },
  {
    id: "defesa-criminal",
    title: "Defesa Criminal",
    description: "Se você está enfrentando acusações criminais, meu papel é te defender com firmeza e lutar incansavelmente por seus direitos em todas as etapas e instâncias do processo penal.",
    iconName: "Gavel",
    keyStats: "Atuação Penal Combativa",
    notableCases: [
      "Absolvição sumária e trancamento de ações penais infundadas",
      "Defesa estratégica em inquéritos policiais e instrução processual"
    ]
  },
  {
    id: "recursos-apelacoes",
    title: "Recursos e Apelações",
    description: "Achou injusta a decisão do juiz? Vamos analisar detalhadamente o caso e elaborar um recurso técnico e fundamentado para buscar a revisão da sentença e uma nova chance de justiça.",
    iconName: "Landmark",
    keyStats: "Revisão nas Instâncias Superiores",
    notableCases: [
      "Reforma de sentença condenatória perante os Tribunais de Justiça",
      "Concessão de Habeas Corpus nos Tribunais Superiores (STJ e STF)"
    ]
  },
  {
    id: "consultoria-juridica",
    title: "Consultoria Jurídica Preventiva",
    description: "Te ajudo a entender suas opções legais antes que a situação fique ainda pior. Um planejamento e orientação jurídica prévia evitam muitas dores de cabeça no futuro.",
    iconName: "Building2",
    keyStats: "Prevenção & Orientação Legal",
    notableCases: [
      "Orientação preventiva para pessoas físicas e executivos",
      "Análise prévia de riscos e prevenção de imputações penais"
    ]
  }
];

export const SENIOR_ATTORNEY: AttorneyProfile = {
  name: "Dr. Pedro Ribeiro",
  title: "Advogado Criminalista & Consultor Penal",
  specialty: "Defesa Penal Técnica, Tribunal do Júri & Habeas Corpus",
  barAdmissions: ["Ordem dos Advogados do Brasil (OAB)"],
  education: "Especialista em Direito Processual Penal & Criminologia",
  yearsActive: 14
};

// High quality video loop sources
export const VIDEO_SOURCES = [
  {
    title: "Man Adjusting Suit - Luxury Legal Counsel",
    url: "/videos/Man_adjusting_suit_1080p_202608062135.mp4",
    secondaryUrl: "/videos/man_adjusting_suit.mp4",
    poster: ""
  }
];
