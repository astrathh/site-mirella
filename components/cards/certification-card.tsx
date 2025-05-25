import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface CertificationCardProps {
  name: string
  issuer: string
  date: string
  link?: string
}

export function CertificationCard({ name, issuer, date, link }: CertificationCardProps) {
  return (
    <Card className="border border-[#F3D58D] rounded-md md:h-[140px]">
      <CardContent className="p-4 md:p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-2 flex-shrink-0">
          <h3 className="text-base md:text-lg font-medium text-[#2E4365] flex-grow pr-2 leading-tight">{name}</h3>
          {link && (
            <Link href={link} className="text-[#E59D2C] hover:text-[#8A3B08] transition-colors flex-shrink-0">
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
          )}
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <p className="text-[#8A3B08] font-medium text-sm md:text-base">{issuer}</p>
          <p className="text-gray-500 text-xs md:text-sm">{date}</p>
        </div>
      </CardContent>
    </Card>
  )
}
