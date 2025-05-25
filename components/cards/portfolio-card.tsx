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
    <Link href={href} className="group relative overflow-hidden cursor-pointer h-[250px] md:h-[350px] block">
      <div className="relative h-full overflow-hidden rounded-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E4365]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
          <span className="text-[#F3D58D] text-xs md:text-sm uppercase tracking-wider">{category}</span>
          <h3 className="text-white text-lg md:text-xl font-medium">{title}</h3>
          <div className="mt-2 text-[#F3D58D] text-sm">Ver mais trabalhos →</div>
        </div>
      </div>
    </Link>
  )
}
