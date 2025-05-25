export interface Trabalho {
  id: string
  title: string
  description: string
  image: string
  category: string
  year: string
  client: string
  tags: string[]
}

export interface CategoriaTrabalho {
  id: string
  name: string
  description: string
  trabalhos: Trabalho[]
}

export const categoriasTrabalhos: CategoriaTrabalho[] = [
  {
    id: "audiovisual",
    name: "Audiovisual",
    description: "Produção de vídeos, fotografias e conteúdo visual para redes sociais",
    trabalhos: [
      {
        id: "campanha-verao-2024",
        title: "Campanha Verão 2024",
        description: "Produção completa de conteúdo audiovisual para campanha de verão",
        image: "/placeholder.svg?height=300&width=400",
        category: "Audiovisual",
        year: "2024",
        client: "Fashion Brand",
        tags: ["Fotografia", "Vídeo", "Campanha", "Verão"],
      },
      {
        id: "natureza-viva",
        title: "Natureza Viva",
        description: "Série fotográfica para marca de cosméticos naturais",
        image: "/placeholder.svg?height=300&width=400",
        category: "Audiovisual",
        year: "2024",
        client: "Eco Beauty",
        tags: ["Fotografia", "Natureza", "Cosméticos", "Sustentabilidade"],
      },
      {
        id: "colecao-inverno",
        title: "Coleção Inverno",
        description: "Lookbook e vídeos promocionais para coleção de inverno",
        image: "/placeholder.svg?height=300&width=400",
        category: "Audiovisual",
        year: "2023",
        client: "Winter Style",
        tags: ["Lookbook", "Vídeo", "Moda", "Inverno"],
      },
      {
        id: "projeto-praia",
        title: "Projeto Praia",
        description: "Documentário visual sobre sustentabilidade nas praias",
        image: "/placeholder.svg?height=300&width=400",
        category: "Audiovisual",
        year: "2023",
        client: "ONG Oceanos",
        tags: ["Documentário", "Sustentabilidade", "Praia", "Conscientização"],
      },
      {
        id: "festival-musica",
        title: "Festival de Música",
        description: "Cobertura audiovisual completa do festival de música indie",
        image: "/placeholder.svg?height=300&width=400",
        category: "Audiovisual",
        year: "2023",
        client: "Indie Fest",
        tags: ["Evento", "Música", "Festival", "Cobertura"],
      },
    ],
  },
  {
    id: "social-media",
    name: "Social Media",
    description: "Gestão completa de redes sociais e estratégias digitais",
    trabalhos: [
      {
        id: "lancamento-produto",
        title: "Lançamento de Produto",
        description: "Estratégia completa para lançamento de novo produto",
        image: "/placeholder.svg?height=300&width=400",
        category: "Social Media",
        year: "2024",
        client: "Tech Startup",
        tags: ["Lançamento", "Estratégia", "Instagram", "LinkedIn"],
      },
      {
        id: "crescimento-organico",
        title: "Crescimento Orgânico",
        description: "Estratégia que resultou em 300% de crescimento orgânico",
        image: "/placeholder.svg?height=300&width=400",
        category: "Social Media",
        year: "2024",
        client: "Local Business",
        tags: ["Crescimento", "Orgânico", "Engajamento", "Comunidade"],
      },
      {
        id: "rebranding-digital",
        title: "Rebranding Digital",
        description: "Transformação completa da presença digital da marca",
        image: "/placeholder.svg?height=300&width=400",
        category: "Social Media",
        year: "2023",
        client: "Traditional Company",
        tags: ["Rebranding", "Transformação", "Digital", "Modernização"],
      },
      {
        id: "influencer-campaign",
        title: "Campanha com Influencers",
        description: "Gestão de campanha colaborativa com micro-influencers",
        image: "/placeholder.svg?height=300&width=400",
        category: "Social Media",
        year: "2023",
        client: "Beauty Brand",
        tags: ["Influencers", "Colaboração", "Beauty", "Campanha"],
      },
    ],
  },
  {
    id: "branding",
    name: "Branding & Design",
    description: "Desenvolvimento de identidade visual e materiais de marca",
    trabalhos: [
      {
        id: "identidade-visual-cafe",
        title: "Identidade Visual - Café",
        description: "Criação completa de identidade visual para cafeteria artesanal",
        image: "/placeholder.svg?height=300&width=400",
        category: "Branding",
        year: "2024",
        client: "Café Artesanal",
        tags: ["Identidade", "Logo", "Café", "Artesanal"],
      },
      {
        id: "redesign-marca",
        title: "Redesign de Marca",
        description: "Modernização da identidade visual de empresa tradicional",
        image: "/placeholder.svg?height=300&width=400",
        category: "Branding",
        year: "2024",
        client: "Empresa Familiar",
        tags: ["Redesign", "Modernização", "Tradição", "Família"],
      },
      {
        id: "startup-branding",
        title: "Branding para Startup",
        description: "Desenvolvimento de marca do zero para startup de tecnologia",
        image: "/placeholder.svg?height=300&width=400",
        category: "Branding",
        year: "2023",
        client: "Tech Startup",
        tags: ["Startup", "Tecnologia", "Inovação", "Marca"],
      },
    ],
  },
  {
    id: "eventos",
    name: "Eventos",
    description: "Cobertura e produção de conteúdo para eventos corporativos e sociais",
    trabalhos: [
      {
        id: "evento-corporativo",
        title: "Evento Corporativo",
        description: "Cobertura completa de evento corporativo anual",
        image: "/placeholder.svg?height=300&width=400",
        category: "Eventos",
        year: "2024",
        client: "Multinacional",
        tags: ["Corporativo", "Anual", "Cobertura", "Profissional"],
      },
      {
        id: "casamento-premium",
        title: "Casamento Premium",
        description: "Produção audiovisual completa para casamento de luxo",
        image: "/placeholder.svg?height=300&width=400",
        category: "Eventos",
        year: "2024",
        client: "Casal Premium",
        tags: ["Casamento", "Luxo", "Premium", "Audiovisual"],
      },
      {
        id: "conferencia-tech",
        title: "Conferência Tech",
        description: "Cobertura de conferência de tecnologia e inovação",
        image: "/placeholder.svg?height=300&width=400",
        category: "Eventos",
        year: "2023",
        client: "Tech Conference",
        tags: ["Tecnologia", "Conferência", "Inovação", "Networking"],
      },
    ],
  },
]

// Função para buscar trabalhos por categoria
export function getTrabalhosByCategory(categoryId: string): Trabalho[] {
  const categoria = categoriasTrabalhos.find((cat) => cat.id === categoryId)
  return categoria ? categoria.trabalhos : []
}

// Função para buscar trabalho específico
export function getTrabalhoById(id: string): Trabalho | undefined {
  for (const categoria of categoriasTrabalhos) {
    const trabalho = categoria.trabalhos.find((t) => t.id === id)
    if (trabalho) return trabalho
  }
  return undefined
}

// Função para buscar todos os trabalhos
export function getAllTrabalhos(): Trabalho[] {
  return categoriasTrabalhos.flatMap((categoria) => categoria.trabalhos)
}
