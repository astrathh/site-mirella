import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 relative z-10">
          <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium">Quem somos</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2E4365] leading-tight">
            Gestão de mídias sociais com propósito.
          </h1>
          <p className="text-gray-600 max-w-md">
            Criamos estratégias personalizadas que conectam sua marca ao público-alvo através de conteúdo autêntico e
            envolvente.
          </p>
          <Button className="bg-[#E59D2C] hover:bg-[#E59D2C]/90 text-white rounded-md uppercase text-xs tracking-wider px-8 py-6 font-medium mt-4 group relative overflow-hidden">
            <span className="relative z-10">Saiba mais</span>
            <span className="absolute inset-0 bg-[#8A3B08] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>

          {/* Decorative Shape */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F3D58D] rounded-full opacity-50 blur-3xl -z-10"></div>
        </div>
        <div className="relative">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Social Media Management"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative Shape */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E59D2C] rounded-full opacity-30 -z-10"></div>
          <div className="absolute -bottom-10 left-10 w-32 h-32 bg-[#2E4365] rounded-full opacity-20 -z-10"></div>
        </div>
      </div>
    </section>
  )
}
