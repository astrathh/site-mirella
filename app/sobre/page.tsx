import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ExperienceCard } from "@/components/cards/experience-card"
import { EducationCard } from "@/components/cards/education-card"
import { CertificationCard } from "@/components/cards/certification-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Download } from "lucide-react"
import { experiences, technicalSkills, tools, education, certifications } from "@/data/resume"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#EBDDC5]/10 overflow-x-hidden">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Mirella - Social Media Professional"
              fill
              className="object-cover rounded-full border-4 border-[#E59D2C]"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-[#2E4365] mb-4">Mirella Santos</h1>
          <p className="text-xl text-[#8A3B08] mb-6">Social Media Manager & Content Creator</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, SP</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>mirella@jlmedia.com</span>
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

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium text-[#2E4365] mb-6 text-center">Sobre Mim</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border border-[#F3D58D] rounded-md">
              <CardContent className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Sou uma profissional apaixonada por storytelling e criação de conteúdo autêntico para redes sociais.
                  Com mais de 5 anos de experiência no mercado digital, especializo-me em desenvolver estratégias
                  personalizadas que conectam marcas ao seu público-alvo de forma genuína e impactante.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Minha missão é transformar a presença digital dos meus clientes através de conteúdo de qualidade,
                  criatividade e estratégias eficientes que geram resultados mensuráveis e engajamento real.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium text-[#2E4365] mb-8 text-center">Experiência Profissional</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium text-[#2E4365] mb-8 text-center">Habilidades</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border border-[#F3D58D] rounded-md">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-medium text-[#2E4365] mb-4">Técnicas</h3>
                    <ul className="space-y-2">
                      {technicalSkills.map((skill, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-[#E59D2C] rounded-full"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#2E4365] mb-4">Ferramentas</h3>
                    <ul className="space-y-2">
                      {tools.map((tool, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-[#E59D2C] rounded-full"></div>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium text-[#2E4365] mb-8 text-center">Formação</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium text-[#2E4365] mb-8 text-center">Certificações</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
