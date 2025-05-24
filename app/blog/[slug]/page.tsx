import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Em uma aplicação real, você buscaria o post pelo slug
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-[#EBDDC5]/10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-[#2E4365] mb-4">Post não encontrado</h1>
          <Link href="/blog" className="text-[#E59D2C] hover:text-[#8A3B08] transition-colors">
            Voltar ao blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#EBDDC5]/10">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#E59D2C] hover:text-[#8A3B08] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-[#E59D2C] text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium text-[#2E4365] mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={post.authorAvatar || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[#2E4365]">{post.author}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-[#E59D2C]">
                  <Heart className="w-4 h-4 mr-2" />
                  <span>24</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-[#E59D2C]">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>8</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-[#E59D2C]">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed space-y-6">
              <p className="text-xl text-gray-700 font-medium mb-8">{post.excerpt}</p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>

              <h2 className="text-2xl font-medium text-[#2E4365] mt-8 mb-4">Por que isso é importante?</h2>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>

              <blockquote className="border-l-4 border-[#E59D2C] pl-6 py-4 bg-[#F3D58D]/20 rounded-r-lg my-8">
                <p className="text-lg italic text-[#2E4365]">
                  "O segredo do sucesso nas redes sociais está em entender profundamente seu público e criar conteúdo
                  que ressoe com suas necessidades e desejos."
                </p>
              </blockquote>

              <h2 className="text-2xl font-medium text-[#2E4365] mt-8 mb-4">Dicas práticas</h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mantenha consistência na frequência de posts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Interaja genuinamente com seu público</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Use dados para otimizar sua estratégia</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E59D2C] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conte histórias que conectem emocionalmente</span>
                </li>
              </ul>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
              </p>

              <h2 className="text-2xl font-medium text-[#2E4365] mt-8 mb-4">Conclusão</h2>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident.
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <Card className="border border-[#F3D58D] rounded-md mt-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src={post.authorAvatar || "/placeholder.svg"}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#2E4365] mb-2">{post.author}</h3>
                  <p className="text-gray-600 mb-4">
                    Social Media Manager e Content Creator com mais de 5 anos de experiência ajudando marcas a crescerem
                    nas redes sociais através de estratégias autênticas e conteúdo de qualidade.
                  </p>
                  <Link href="/sobre" className="text-[#E59D2C] hover:text-[#8A3B08] transition-colors font-medium">
                    Ver perfil completo →
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>

      <Footer />
    </div>
  )
}

// Função para buscar post por slug (simulada)
function getBlogPostBySlug(slug: string) {
  const posts = [
    {
      title: "Como criar conteúdo viral para Instagram",
      excerpt:
        "Descubra as estratégias e técnicas que uso para criar conteúdo que engaja e viraliza no Instagram. Dicas práticas para aumentar seu alcance orgânico.",
      author: "Mirella Santos",
      authorAvatar: "/placeholder.svg?height=64&width=64",
      date: "15 Jan 2024",
      slug: "como-criar-conteudo-viral-para-instagram",
      image: "/placeholder.svg?height=500&width=800",
      category: "Instagram",
    },
    {
      title: "5 tendências de social media para 2024",
      excerpt:
        "Descubra as principais tendências que vão dominar as redes sociais este ano e como se preparar para elas.",
      author: "Mirella Santos",
      authorAvatar: "/placeholder.svg?height=64&width=64",
      date: "10 Jan 2024",
      slug: "5-tendencias-social-media-2024",
      image: "/placeholder.svg?height=500&width=800",
      category: "Tendências",
    },
    // Adicione mais posts conforme necessário
  ]

  return posts.find((post) => post.slug === slug)
}
