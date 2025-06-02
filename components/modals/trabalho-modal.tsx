"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { TrabalhoReal } from "@/data/trabalhos-real"

interface TrabalhoModalProps {
  trabalho: TrabalhoReal | null
  isOpen: boolean
  onClose: () => void
}

export function TrabalhoModal({ trabalho, isOpen, onClose }: TrabalhoModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (isOpen && trabalho) {
      setCurrentImageIndex(0)
      // Auto-advance carousel
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % trabalho.images.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isOpen, trabalho])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !trabalho) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % trabalho.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + trabalho.images.length) % trabalho.images.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Image Carousel */}
          <div className="relative h-64 md:h-full bg-gray-100">
            <Image
              src={trabalho.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${trabalho.title} - Imagem ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />

            {/* Carousel Controls */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {trabalho.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[#E59D2C] text-sm font-medium">{trabalho.year}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E4365] mt-1 mb-4">{trabalho.title}</h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{trabalho.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {trabalho.tags.map((tag, index) => (
                <span key={index} className="bg-[#F3D58D] text-[#8A3B08] px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
