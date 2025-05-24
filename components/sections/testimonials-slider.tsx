"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    text: "Transformou totalmente a comunicação da minha empresa! Crescemos não só em seguidores, mas também em autoridade e vendas.",
    author: "Ana Silva",
    role: "CEO, Fashion Brand",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    text: "O olhar estratégico da Mirella fez toda diferença no nosso posicionamento digital. É outro patamar de profissionalismo.",
    author: "Carlos Santos",
    role: "Diretor de Marketing",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    text: "Além da entrega impecável, o cuidado com a nossa marca foi surpreendente. Recomendo de olhos fechados.",
    author: "Mariana Costa",
    role: "Fundadora, Startup Tech",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    text: "Resultados incríveis em apenas 3 meses! Nossa presença digital nunca esteve tão forte e engajada.",
    author: "Roberto Lima",
    role: "Gerente Comercial",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    text: "Profissionalismo e criatividade em cada entrega. A Mirella entende exatamente o que nossa marca precisa.",
    author: "Juliana Ferreira",
    role: "Coordenadora de Marketing",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white p-8 border border-[#F3D58D] rounded-md mx-4">
                <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2E4365]">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#E59D2C]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
