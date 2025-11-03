import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog DevDigitale | Actualités & Conseils Digital",
  description:
    "Découvrez nos articles d'experts sur le design, le développement web, le marketing digital, l'IA et plus encore. Conseils pratiques et tendances 2024.",
  keywords: "blog digital, conseils web, tendances design, développement web, marketing digital, IA, SEO, e-commerce",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Blog DevDigitale</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Actualités, conseils d'experts et tendances du digital pour propulser votre business en ligne
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="border-b bg-muted/30 sticky top-16 z-40 backdrop-blur">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {blogCategories.map((category) => (
              <Button key={category.slug} variant="outline" size="sm" className="whitespace-nowrap bg-transparent">
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Article à la Une</h2>
            <p className="text-muted-foreground">Notre dernière publication</p>
          </div>

          <Card className="overflow-hidden border-2 hover:border-primary transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg?height=400&width=600"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge>{blogPosts[0].category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-3 mb-6">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{blogPosts[0].author}</p>
                      <p className="text-sm text-muted-foreground">{blogPosts[0].authorRole}</p>
                    </div>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Tous les Articles</h2>
            <p className="text-muted-foreground">Explorez nos dernières publications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground w-full">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={`/blog/${post.slug}`}>
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
              <p className="text-lg mb-8 opacity-90">
                Recevez nos derniers articles et conseils d'experts directement dans votre boîte mail
              </p>
              <div className="max-w-md mx-auto flex gap-2">
                <input type="email" placeholder="Votre email" className="flex-1 px-4 py-2 rounded-md text-foreground" />
                <Button variant="secondary" size="lg">
                  S'abonner
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-75">Pas de spam, désabonnement facile à tout moment</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
