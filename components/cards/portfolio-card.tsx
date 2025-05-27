import Image from "next/image"
import Link from "next/link"

interface PortfolioCardProps {
  title: string
  category: string
  image: string
  href?: string
}

export function PortfolioCard({ title, category, image, href = "/trabalhos" }: PortfolioCardProps) {
  return (
    <Link href={href} className="group relative overflow-hidden cursor-pointer h-[200px] md:h-[350px] block">
      <div className="relative h-full overflow-hidden rounded-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Mobile: Overlay sempre visível (como estava antes) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E4365]/90 to-transparent opacity-100 md:opacity-0 flex flex-col justify-end p-3 md:hidden">
          <span className="text-[#F3D58D] text-xs uppercase tracking-wider">{category}</span>
          <h3 className="text-white text-sm font-medium leading-tight">{title}</h3>
          <div className="mt-1 text-[#F3D58D] text-xs">Ver mais trabalhos →</div>
        </div>

        {/* Desktop: Nova animação */}
        <div className="hidden md:block">
          {/* Overlay de fundo para melhor legibilidade - camada inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E4365]/70 via-transparent to-transparent opacity-100 group-hover:from-[#2E4365]/90 transition-all duration-300 z-10"></div>

          {/* Nome da categoria sempre visível no desktop - camada superior */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:-translate-y-20 z-20">
            <span className="text-white text-xl font-bold uppercase tracking-wider drop-shadow-lg">{category}</span>
          </div>

          {/* Informações adicionais que aparecem no hover - camada superior */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#2E4365] to-transparent z-20">
            <div className="space-y-3">
              <h3 className="text-white text-lg font-medium leading-tight">{title}</h3>
              <div className="text-[#F3D58D] text-sm font-medium">Ver mais trabalhos →</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
