import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export function ExperienceCard({ title, company, period, description, achievements }: ExperienceCardProps) {
  return (
    <Card className="border border-[#F3D58D] rounded-md">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-grow">
            <h3 className="text-xl font-medium text-[#2E4365]">{title}</h3>
            <p className="text-[#8A3B08] font-medium">{company}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0 flex-shrink-0">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{period}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-2 flex-shrink-0"></div>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
