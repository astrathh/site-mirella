import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  author: string
  authorAvatar: string
  date: string
  slug: string
  image: string
  category: string
}

export function BlogCard({ title, excerpt, author, authorAvatar, date, slug, image, category }: BlogCardProps) {
  return (
    <Card className="border border-[#F3D58D] rounded-md overflow-hidden group cursor-pointer hover:border-[#E59D2C] transition-all">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#E59D2C] text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden relative">
                <Image src={authorAvatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
              </div>
              <span className="text-sm text-gray-600">{author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{date}</span>
            </div>
          </div>
          <h3 className="text-lg font-medium text-[#2E4365] mb-3 group-hover:text-[#8A3B08] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center gap-2 text-[#E59D2C] group-hover:text-[#8A3B08] transition-colors">
            <span className="text-sm font-medium">Ler mais</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
