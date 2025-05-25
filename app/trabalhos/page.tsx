import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TrabalhosSlider } from "@/components/trabalhos/trabalhos-slider"
import { FadeInUp } from "@/components/animations/fade-in-up"
import { categoriasTrabalhos } from "@/data/trabalhos"

export default function TrabalhosPage() {
  return (
    <div className="min-h-screen bg-[#EBDDC5]/10 overflow-x-hidden">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <FadeInUp>
          <section className="text-center mb-16">
            <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium mb-3">Portfólio</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2E4365] mb-6">Nossos Trabalhos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore nossa coleção de projetos organizados por categoria. Cada trabalho representa nossa dedicação em
              criar soluções visuais impactantes e estratégias eficientes.
            </p>
          </section>
        </FadeInUp>

        {/* Trabalhos por Categoria */}
        <section className="space-y-16">
          {categoriasTrabalhos.map((categoria, index) => (
            <FadeInUp key={categoria.id} delay={index * 200}>
              <div>
                {/* Categoria Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2E4365] mb-3">{categoria.name}</h2>
                  <p className="text-gray-600 text-lg max-w-3xl">{categoria.description}</p>
                </div>

                {/* Slider */}
                <TrabalhosSlider title="" trabalhos={categoria.trabalhos} />
              </div>
            </FadeInUp>
          ))}
        </section>

        {/* CTA Section */}
        <FadeInUp delay={600}>
          <section className="text-center py-16">
            <div className="bg-gradient-to-r from-[#E59D2C] to-[#8A3B08] rounded-lg p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gostou do que viu?</h2>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Vamos conversar sobre como podemos criar algo incrível para sua marca também.
              </p>
              <a
                href="/#contato"
                className="inline-block bg-white text-[#8A3B08] px-8 py-4 rounded-md font-medium hover:bg-white/90 transition-colors uppercase tracking-wider"
              >
                Fale Conosco
              </a>
            </div>
          </section>
        </FadeInUp>
      </main>

      <Footer />
    </div>
  )
}
