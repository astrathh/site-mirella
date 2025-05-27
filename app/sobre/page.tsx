import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ExperienceCard } from "@/components/cards/experience-card"
import { EducationCard } from "@/components/cards/education-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Download } from "lucide-react"
import { experiences, technicalSkills, tools, education } from "@/data/resume"
import { FadeInUp } from "@/components/animations/fade-in-up"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#EBDDC5]/10 overflow-x-hidden">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <FadeInUp>
          <section className="text-center mb-16">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/images/mirella-profile.jpg"
                alt="Mirella Modina - Social Media Professional"
                fill
                className="object-cover rounded-full border-4 border-[#E59D2C]"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2E4365] mb-4">Mirella Modina</h1>
            <p className="text-xl text-[#2E4365] mb-6">Social Media Manager, Videomaker e Fotógrafa</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Sorocaba, SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>mirelladefariamodina@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+55 (11) 99999-9999</span>
              </div>
            </div>
            <Button className="bg-[#E59D2C] hover:bg-[#8A3B08] text-white rounded-md uppercase text-xs tracking-wider px-8 py-3 font-medium transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </span>
              <span className="absolute inset-0 bg-[#8A3B08] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </section>
        </FadeInUp>

        {/* About Section */}
        <FadeInUp delay={200}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2E4365] mb-8 text-center">Sobre Mim</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border border-[#F3D58D] rounded-md">
                <CardContent className="p-8">
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                      Sou <strong className="text-[#2E4365]">Mirella Modina</strong>, bacharel em Rádio, TV e Internet,
                      Social Media Manager, videomaker e fotógrafa. Atuo há mais de{" "}
                      <strong className="text-[#2E4365]">7 anos</strong> no mercado de marketing digital e produção de
                      conteúdo, ajudando marcas a se posicionarem de forma estratégica, profissional e relevante.
                    </p>

                    <p>
                      Uno <strong className="text-[#2E4365]">criatividade, técnica e estratégia</strong> para
                      transformar redes sociais em vitrines que geram valor, conexão e resultado.
                    </p>

                    <p>
                      Apesar do <strong className="text-[#2E4365]">Instagram</strong> ser meu principal canal de
                      atuação, também desenvolvo estratégias e conteúdos para{" "}
                      <strong className="text-[#2E4365]">YouTube e LinkedIn</strong>, sempre com foco em posicionamento
                      profissional, geração de valor e crescimento digital.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </FadeInUp>

        {/* Achievements Section */}
        <FadeInUp delay={300}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2E4365] mb-8 text-center">Resultados Alcançados</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border border-[#F3D58D] rounded-md">
                <CardContent className="p-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Ao longo da minha trajetória, ajudei marcas e profissionais a:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-600 text-lg">
                      <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-3 flex-shrink-0"></div>
                      <span>
                        <strong className="text-[#2E4365]">Estruturar perfis fortes</strong>, com branding,
                        posicionamento e comunicação alinhada.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600 text-lg">
                      <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-3 flex-shrink-0"></div>
                      <span>
                        <strong className="text-[#2E4365]">Crescer em seguidores qualificados</strong>, aumentar o
                        alcance e gerar mais engajamento.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600 text-lg">
                      <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-3 flex-shrink-0"></div>
                      <span>
                        <strong className="text-[#2E4365]">Transformar redes sociais</strong> em canais de vendas,
                        autoridade e conexão.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600 text-lg">
                      <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-3 flex-shrink-0"></div>
                      <span>
                        <strong className="text-[#2E4365]">Produzir conteúdos profissionais</strong>, tanto para redes
                        sociais como para campanhas específicas, vídeos institucionais e comerciais.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8 p-6 bg-[#F3D58D]/20 rounded-lg">
                    <p className="text-[#2E4365] font-medium text-lg italic text-center">
                      "Meu trabalho não é sobre estar nas redes, é sobre estar da maneira certa, com estratégia, clareza
                      e consistência."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </FadeInUp>

        {/* Experience Section */}
        <FadeInUp delay={400}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2E4365] mb-8 text-center">Minha Experiência</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </section>
        </FadeInUp>

        {/* Skills Section */}
        <FadeInUp delay={500}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2E4365] mb-8 text-center">Minhas Habilidades</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border border-[#F3D58D] rounded-md">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium text-[#2E4365] mb-6">Habilidades Técnicas</h3>
                      <ul className="space-y-3">
                        {technicalSkills.map((skill, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#2E4365] mb-6">Ferramentas</h3>
                      <ul className="space-y-3">
                        {tools.map((tool, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-[#E59D2C] rounded-full flex-shrink-0"></div>
                            <span className="text-sm">{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </FadeInUp>

        {/* Education Section */}
        <FadeInUp delay={600}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#2E4365] mb-8 text-center">Formação</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {education.map((edu, index) => (
                <EducationCard key={index} {...edu} />
              ))}
            </div>
          </section>
        </FadeInUp>
      </main>

      <Footer />
    </div>
  )
}
