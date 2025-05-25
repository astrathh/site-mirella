"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Trabalho } from "@/data/trabalhos"

interface TrabalhosSliderProps {
  title: string
  trabalhos: Trabalho[]
}

export function TrabalhosSlider({ title, trabalhos }: TrabalhosSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  }

  const slideLeft = () => {
    const newIndex = Math.max(currentIndex - 1, 0)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const slideRight = () => {
    const maxIndex = Math.max(trabalhos.length - itemsPerView.desktop, 0)
    const newIndex = Math.min(currentIndex + 1, maxIndex)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.scrollWidth / trabalhos.length
      sliderRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      })
    }
  }

  if (trabalhos.length === 0) return null

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2E4365]">{title}</h2>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full bg-[#F3D58D] hover:bg-[#E59D2C] text-[#8A3B08] disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={slideRight}
            disabled={currentIndex >= Math.max(trabalhos.length - itemsPerView.desktop, 0)}
            className="w-10 h-10 rounded-full bg-[#F3D58D] hover:bg-[#E59D2C] text-[#8A3B08] disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trabalhos.map((trabalho, index) => (
            <TrabalhoCard key={trabalho.id} trabalho={trabalho} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface TrabalhoCardProps {
  trabalho: Trabalho
}

function TrabalhoCard({ trabalho }: TrabalhoCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex-shrink-0 w-[280px] md:w-[320px] group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-[#2E4365] transition-transform duration-300 group-hover:scale-105">
        {/* Image */}
        <div className="relative h-[180px] md:h-[200px]">
          <Image
            src={trabalho.image || "/placeholder.svg"}
            alt={trabalho.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#2E4365]/90 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-2">
                <Button size="icon" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white">
                  <Play className="w-4 h-4" />
                </Button>
                <span className="text-white text-sm">{trabalho.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 bg-[#2E4365] text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#F3D58D] text-xs uppercase tracking-wider font-medium">{trabalho.client}</span>
            <span className="text-white/60 text-xs">•</span>
            <span className="text-white/60 text-xs">{trabalho.year}</span>
          </div>

          <h3 className="font-medium text-white mb-2 line-clamp-1">{trabalho.title}</h3>

          <p className="text-white/80 text-sm mb-3 line-clamp-2 leading-relaxed">{trabalho.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {trabalho.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-[#E59D2C]/20 text-[#F3D58D] px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
            {trabalho.tags.length > 3 && (
              <span className="text-white/60 text-xs px-2 py-1">+{trabalho.tags.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
