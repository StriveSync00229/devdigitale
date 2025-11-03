"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { servicesData } from "@/lib/data"
import { CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Nos Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez notre gamme complète de prestations pour votre transformation digitale. De l'idée à la
            réalisation, nous vous accompagnons à chaque étape.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🎨 Design
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              💻 Développement
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              📈 Marketing
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🤖 Intelligence Artificielle
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🎬 Multimédia
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Card
                key={service.id}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  hoveredCard === service.id ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image de fond avec overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg?height=200&width=400"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Sous-catégories (limitées à 3 pour l'aperçu) */}
                  <div className="space-y-2 mb-6">
                    {service.subcategories.slice(0, 3).map((sub, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{sub.title}</span>
                      </div>
                    ))}
                    {service.subcategories.length > 3 && (
                      <div className="text-sm text-muted-foreground pl-6">
                        +{service.subcategories.length - 3} autres services...
                      </div>
                    )}
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href="/quote">
                        Devis gratuit
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="px-3 border-blue-200 hover:bg-blue-50 bg-transparent"
                        >
                          Détails
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="w-[95vw] sm:max-w-2xl md:max-w-4xl max-h-[85vh] overflow-y-auto p-4 sm:p-6">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-blue-600 flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-full">{service.icon}</div>
                            {service.title}
                          </DialogTitle>
                          <DialogDescription className="text-lg text-gray-600 mt-2">
                            {service.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="mt-6">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <Image
                                src={service.image || "/placeholder.svg?height=300&width=400"}
                                alt={service.title}
                                width={400}
                                height={300}
                                className="rounded-lg object-cover w-full"
                                loading="lazy"
                              />
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold mb-4 text-gray-900">Nos prestations :</h3>
                              <div className="space-y-4">
                                {service.subcategories.map((sub, index) => (
                                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                                    <h4 className="font-semibold text-gray-900">{sub.title}</h4>
                                    <p className="text-sm text-gray-600 mt-1">{sub.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              Pourquoi choisir nos services ?
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>Experts certifiés</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>Livraison garantie</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>Support 24/7</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex gap-4">
                            <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                              <Link href="/quote">
                                Demander un devis
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                            <Button asChild variant="outline" className="flex-1 bg-transparent">
                              <Link href="/contact">Nous contacter</Link>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>

                {/* Effet de hover - bordure colorée */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-lg transition-colors duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nos experts sont là pour vous accompagner. Obtenez un devis personnalisé en quelques minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8">
              <Link href="/quote">Demander un devis</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 bg-transparent"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
