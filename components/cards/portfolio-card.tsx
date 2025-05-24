import Image from "next/image"

interface PortfolioCardProps {
  title: string
  category: string
  image: string
}

export function PortfolioCard({ title, category, image }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden cursor-pointer h-[350px]">
      <div className="relative h-full overflow-hidden rounded-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E4365]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="text-[#F3D58D] text-sm uppercase tracking-wider">{category}</span>
          <h3 className="text-white text-xl font-medium">{title}</h3>
        </div>
      </div>
    </div>
  )
}
