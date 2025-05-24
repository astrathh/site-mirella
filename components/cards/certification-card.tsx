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
    <Card className="border border-[#F3D58D] rounded-md">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-medium text-[#2E4365]">{name}</h3>
          {link && (
            <Link href={link} className="text-[#E59D2C] hover:text-[#8A3B08] transition-colors">
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>
        <p className="text-[#8A3B08] font-medium mb-2">{issuer}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </CardContent>
    </Card>
  )
}
