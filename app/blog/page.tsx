import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BlogCard } from "@/components/cards/blog-card"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import { blogPosts, featuredPost } from "@/data/blog-posts"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#EBDDC5]/10 overflow-x-hidden">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="uppercase text-[#8A3B08] tracking-widest text-sm font-medium mb-3">Blog</div>
          <h1 className="text-4xl md:text-5xl font-medium text-[#2E4365] mb-6">Insights sobre Social Media</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Compartilho aqui dicas, estratégias e tendências do mundo das redes sociais para ajudar você a crescer sua
            presença digital.
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-[#F3D58D] rounded-md overflow-hidden group cursor-pointer hover:border-[#E59D2C] transition-all">
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[300px] md:h-[400px]">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden relative">
                          <Image
                            src={featuredPost.authorAvatar || "/placeholder.svg"}
                            alt={featuredPost.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-gray-600">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.date}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-medium text-[#2E4365] mb-4 group-hover:text-[#8A3B08] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-[#E59D2C] group-hover:text-[#8A3B08] transition-colors">
                      <span className="text-sm font-medium">Ler artigo completo</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </div>
              </Link>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-3xl font-medium text-[#2E4365] mb-8 text-center">Todos os Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
