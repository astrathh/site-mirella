export interface TrabalhoReal {
  id: string
  title: string
  year: string
  description: string
  tags: string[]
  images: string[]
}

export interface CategoriaTrabalhoReal {
  id: string
  name: string
  description: string
  trabalhos: TrabalhoReal[]
}

export const categoriasTrabalhos: CategoriaTrabalhoReal[] = [
  {
    id: "audiovisual",
    name: "Audiovisual",
    description: "Produção de vídeos, fotografias e conteúdo visual para redes sociais",
    trabalhos: [
      {
        id: "tcc-senac-fotografia",
        title: "TCC Senac Fotografia",
        year: "2019",
        description:
          "Produção de vídeo documental como projeto de conclusão de curso, explorando técnicas avançadas de captação e edição.",
        tags: ["Vídeo", "Documentário", "Projeto Acadêmico"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "yes-free-audiovisual",
        title: "Yes Free",
        year: "2025",
        description:
          "Desenvolvimento de conteúdo audiovisual para a campanha de lançamento da primeira linha de sorvetes do Brasil à base de leite de castanha-de-caju, com foco em vídeos promocionais e reels para redes sociais.",
        tags: ["Vídeo", "Produto", "Lançamento"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "silvana-santiago",
        title: "Silvana Santiago",
        year: "2025",
        description:
          "Produção de vídeo institucional destacando a trajetória profissional e serviços oferecidos, com abordagem humanizada.",
        tags: ["Vídeo Institucional", "Perfil Profissional", "Edição"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
  },
  {
    id: "social-media",
    name: "Social Media",
    description: "Gestão completa de redes sociais e estratégias digitais",
    trabalhos: [
      {
        id: "claudio-lanches-social",
        title: "Claudio Lanches (Votorantim)",
        year: "2025",
        description:
          "Desenvolvimento de estratégia digital para redes sociais, incluindo captação e edição de vídeos promocionais, aumentando o engajamento local.",
        tags: ["Redes Sociais", "Vídeo Promocional", "Estratégia Digital"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "muniz-gomes-consultoria",
        title: "Muniz Gomes Consultoria",
        year: "2024",
        description:
          "Criação de conteúdo estratégico para LinkedIn, focado em posicionamento de marca e geração de autoridade no segmento jurídico.",
        tags: ["LinkedIn", "Conteúdo Estratégico", "Branding Pessoal"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "muniz-gomes-advogados",
        title: "Muniz Gomes Advogados Associados",
        year: "2024",
        description:
          "Elaboração de estratégia de conteúdo para LinkedIn, visando fortalecer a presença digital e atrair novos clientes.",
        tags: ["LinkedIn", "Estratégia de Conteúdo", "Marketing Jurídico"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "yes-free-social",
        title: "Yes Free",
        year: "2025",
        description:
          "Planejamento e execução de estratégia de conteúdo para redes sociais, incluindo criação de cronogramas, roteiros e vídeos para campanha institucional e tráfego pago.",
        tags: ["Social Media", "Produto", "Lançamento"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
  },
  {
    id: "branding",
    name: "Branding & Design",
    description: "Desenvolvimento de identidade visual e materiais de marca",
    trabalhos: [
      {
        id: "claudio-lanches-branding",
        title: "Claudio Lanches (Votorantim)",
        year: "2025",
        description:
          "Redesign da identidade visual da marca, incluindo logotipo, paleta de cores e materiais promocionais para redes sociais.",
        tags: ["Identidade Visual", "Design Gráfico", "Branding Local"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "muniz-gomes-consultoria-branding",
        title: "Muniz Gomes Consultoria",
        year: "2024",
        description:
          "Desenvolvimento de identidade visual e materiais de marca para reforçar o posicionamento da consultoria no mercado jurídico.",
        tags: ["Identidade Visual", "Branding", "Consultoria Jurídica"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "muniz-gomes-advogados-branding",
        title: "Muniz Gomes Advogados Associados",
        year: "2024",
        description:
          "Criação de materiais de marca e identidade visual para fortalecer a presença digital e institucional do escritório de advocacia.",
        tags: ["Identidade Visual", "Branding", "Escritório de Advocacia"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
  },
  {
    id: "eventos",
    name: "Eventos",
    description: "Cobertura e produção de conteúdo para eventos corporativos e sociais",
    trabalhos: [
      {
        id: "evento-radiesse",
        title: "Evento Radiesse – Edifício B32",
        year: "2023",
        description:
          "Cobertura audiovisual do evento médico realizado no Edifício B32, incluindo captação de imagens e produção de vídeos para divulgação.",
        tags: ["Evento Corporativo", "Vídeo", "Cobertura Audiovisual"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "noivado-isabelle-jose",
        title: "Noivado Isabelle e José",
        year: "2025",
        description: "Captação e edição de vídeo para registrar momentos especiais do noivado.",
        tags: ["Evento Social", "Vídeo", "Edição"],
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
  },
]

// Função para buscar trabalhos por categoria
export function getTrabalhosByCategory(categoryId: string): TrabalhoReal[] {
  const categoria = categoriasTrabalhos.find((cat) => cat.id === categoryId)
  return categoria ? categoria.trabalhos : []
}

// Função para buscar trabalho específico
export function getTrabalhoById(id: string): TrabalhoReal | undefined {
  for (const categoria of categoriasTrabalhos) {
    const trabalho = categoria.trabalhos.find((t) => t.id === id)
    if (trabalho) return trabalho
  }
  return undefined
}

// Função para buscar todos os trabalhos
export function getAllTrabalhos(): TrabalhoReal[] {
  return categoriasTrabalhos.flatMap((categoria) => categoria.trabalhos)
}
