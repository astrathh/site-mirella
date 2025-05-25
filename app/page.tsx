import { AnnouncementBar } from "@/components/layout/announcement-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { TestimonialsSlider } from "@/components/sections/testimonials-slider"
import { ServiceCard } from "@/components/cards/service-card"
import { PortfolioCard } from "@/components/cards/portfolio-card"
import { FadeInUp } from "@/components/animations/fade-in-up"
import { FadeInScale } from "@/components/animations/fade-in-scale"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import { projects } from "@/data/portfolio"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EBDDC5]/10 overflow-x-hidden">
      <AnnouncementBar />
      <Header />

      <main>
        <HeroSection />

        {/* Services Section */}
        <section id="servicos" className="container mx-auto px-4 py-16 md:py-24">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium mb-3">Meus serviços</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E4365] mb-6">O que sei fazer de melhor</h2>
              <p className="text-gray-600">
                Soluções completas e estratégicas para transformar sua presença digital em resultados concretos.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeInUp key={index} delay={index * 150}>
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="trabalhos" className="py-16 md:py-24 bg-[#EBDDC5]/20">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium mb-3">Portfólio</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E4365] mb-6">Trabalhos realizados</h2>
                <p className="text-gray-600">
                  Conheça alguns dos nossos projetos e como ajudamos marcas a se destacarem nas redes sociais.
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <FadeInScale key={index} delay={index * 100}>
                  <PortfolioCard title={project.title} category={project.category} image={project.image} />
                </FadeInScale>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium mb-3">Depoimentos</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E4365] mb-6">Depoimentos de Clientes</h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <TestimonialsSlider />
          </FadeInUp>
        </section>

        {/* Contact Section */}
        <section id="contato" className="bg-[#EBDDC5]/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Left Side - Contact Info */}
              <FadeInUp>
                <div className="space-y-8">
                  <div>
                    <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium mb-3">CONTATO</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2E4365] mb-6">Vamos trabalhar juntos?</h2>
                    <p className="text-gray-600 text-lg">
                      Entre em contato para discutirmos como podemos elevar sua presença nas redes sociais.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <FadeInUp delay={200}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#F3D58D] flex items-center justify-center text-[#8A3B08]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
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
                        <span className="text-gray-600 text-lg">+55 (11) 99999-9999</span>
                      </div>
                    </FadeInUp>

                    <FadeInUp delay={300}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#F3D58D] flex items-center justify-center text-[#8A3B08]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
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
                        <span className="text-gray-600 text-lg">mirelladefariamodina@gmail.com</span>
                      </div>
                    </FadeInUp>

                    <FadeInUp delay={400}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#F3D58D] flex items-center justify-center text-[#8A3B08]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
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
                        <span className="text-gray-600 text-lg">Sorocaba, SP - Brasil</span>
                      </div>
                    </FadeInUp>
                  </div>
                </div>
              </FadeInUp>

              {/* Right Side - Contact Form */}
              <FadeInScale delay={300}>
                <div className="bg-white p-8 border border-[#F3D58D] rounded-lg shadow-sm">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-[#2E4365] font-medium">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-4 border border-gray-200 focus:border-[#E59D2C] focus:outline-none rounded-md transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-[#2E4365] font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-4 border border-gray-200 focus:border-[#E59D2C] focus:outline-none rounded-md transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-[#2E4365] font-medium">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full p-4 border border-gray-200 focus:border-[#E59D2C] focus:outline-none rounded-md transition-colors resize-none"
                        placeholder="Conte-nos sobre seu projeto..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-[#E59D2C] hover:bg-[#8A3B08] text-white rounded-md uppercase text-sm tracking-wider py-4 font-medium transition-all duration-300">
                      ENVIAR MENSAGEM
                    </Button>
                  </form>
                </div>
              </FadeInScale>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
