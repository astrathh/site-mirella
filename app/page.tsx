import { AnnouncementBar } from "@/components/layout/announcement-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServiceCard } from "@/components/cards/service-card"
import { PortfolioCard } from "@/components/cards/portfolio-card"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import { projects } from "@/data/portfolio"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EBDDC5]/10 overflow-x-hidden">
      <AnnouncementBar />
      <Header />

      <main>
        <HeroSection />

        {/* Services Section */}
        <section id="servicos" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium mb-3">Nossos serviços</div>
            <h2 className="text-3xl md:text-4xl font-medium text-[#2E4365] mb-6">
              Soluções completas para suas redes sociais
            </h2>
            <p className="text-gray-600">
              Oferecemos serviços personalizados para elevar sua presença digital e conectar sua marca ao público certo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="trabalhos" className="py-16 md:py-24 bg-[#EBDDC5]/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium mb-3">Portfólio</div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#2E4365] mb-6">Trabalhos realizados</h2>
              <p className="text-gray-600">
                Conheça alguns dos nossos projetos e como ajudamos marcas a se destacarem nas redes sociais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <PortfolioCard key={index} title={project.title} category={project.category} image={project.image} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium mb-3">Depoimentos</div>
            <h2 className="text-3xl md:text-4xl font-medium text-[#2E4365] mb-6">O que nossos clientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-[#F3D58D] rounded-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden relative">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Cliente" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2E4365]">Maria Silva</h4>
                  <p className="text-sm text-gray-500">CEO, Empresa ABC</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "A equipe da JL Media transformou completamente nossa presença nas redes sociais. O engajamento aumentou
                significativamente e nossa marca está muito mais forte."
              </p>
            </div>

            <div className="bg-white p-8 border border-[#F3D58D] rounded-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden relative">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Cliente" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2E4365]">João Santos</h4>
                  <p className="text-sm text-gray-500">Diretor, Empresa XYZ</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Profissionais extremamente competentes e criativos. Conseguiram captar perfeitamente a essência da
                nossa marca e traduzi-la em conteúdo de qualidade."
              </p>
            </div>
          </div>
        </section>

        {/* Free Resource Section */}
        <section className="bg-[#EBDDC5]/30 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-medium text-[#2E4365] mb-6">Guia gratuito de mídias sociais</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Baixe nosso guia completo com dicas práticas para melhorar sua presença nas redes sociais e aumentar o
              engajamento do seu público.
            </p>
            <Button className="bg-[#E59D2C] hover:bg-[#8A3B08] text-white rounded-md uppercase text-xs tracking-wider px-8 py-6 font-medium transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10">Baixar agora</span>
              <span className="absolute inset-0 bg-[#8A3B08] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium">Contato</div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#2E4365] mb-6">Vamos trabalhar juntos?</h2>
              <p className="text-gray-600 max-w-md">
                Entre em contato para discutirmos como podemos elevar sua presença nas redes sociais.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F3D58D] flex items-center justify-center text-[#8A3B08]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F3D58D] flex items-center justify-center text-[#8A3B08]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">contato@jlmedia.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F3D58D] flex items-center justify-center text-[#8A3B08]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-gray-600">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 border border-[#F3D58D]">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-[#2E4365] font-medium">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-200 focus:border-[#E59D2C] focus:outline-none rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-[#2E4365] font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-200 focus:border-[#E59D2C] focus:outline-none rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-[#2E4365] font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-200 focus:border-[#E59D2C] focus:outline-none rounded-md"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#E59D2C] hover:bg-[#8A3B08] text-white rounded-md uppercase text-xs tracking-wider py-6 font-medium transition-all duration-300 group relative overflow-hidden">
                  <span className="relative z-10">Enviar mensagem</span>
                  <span className="absolute inset-0 bg-[#8A3B08] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
