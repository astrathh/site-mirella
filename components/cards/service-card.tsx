import type React from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 border border-[#F3D58D] hover:border-[#E59D2C] transition-all group rounded-md md:h-[320px] flex flex-col">
      <div className="w-16 h-16 rounded-full bg-[#F3D58D] flex items-center justify-center text-[#8A3B08] mb-4 md:mb-6 group-hover:bg-[#E59D2C] transition-colors flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-medium text-[#2E4365] mb-3 md:mb-4 flex-shrink-0 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 flex-grow leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  )
}
