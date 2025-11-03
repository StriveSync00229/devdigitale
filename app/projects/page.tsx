"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projectsData, servicesData } from "@/lib/data"
import type { Project } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Eye, Clock, Users, CheckCircle, Star, Quote } from "lucide-react"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Grouper les projets par catégorie et limiter à 3 projets par service
  const projectsByCategory = servicesData
    .map((service) => ({
      ...service,
      projects: projectsData.filter((project) => project.categoryId === service.id).slice(0, 3), // Limiter à 3 projets par service
    }))
    .filter((category) => category.projects.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Nos Projets Réalisés
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explorez une sélection de nos travaux et découvrez comment nous avons aidé nos clients à atteindre leurs
            objectifs avec des solutions innovantes et sur-mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🛍️ E-commerce
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              📱 Applications
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🎯 Marketing
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🎨 Design
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🌐 Site web
            </Badge>
          </div>
        </div>
      </section>

      {/* Projects by Category */}
      <section className="pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          <Tabs defaultValue={projectsByCategory[0]?.id.toString()} className="w-full">
            <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12 w-full max-w-7xl mx-auto h-auto p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border">
              {projectsByCategory.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id.toString()}
                  className="flex flex-col items-center justify-center gap-3 p-4 h-auto min-h-[100px] text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-500 data-[state=active]:text-white data-[state=active]:shadow-lg whitespace-normal"
                >
                  <div className="text-2xl mb-1">{category.icon}</div>
                  <span className="text-center leading-relaxed px-2 break-words">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {projectsByCategory.map((category) => (
              <TabsContent key={category.id} value={category.id.toString()}>
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{category.title}</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                {/* Grille des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {category.projects.map((project, idx) => {
                    const fallbackImages = [
                      "/images/project-1.jpg",
                      "/images/project-2.jpg",
                      "/images/project-3.jpg",
                    ]
                    const cardImage = project.image || fallbackImages[idx % fallbackImages.length]
                    return (
                    <Card
                      key={project.id}
                      className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={cardImage || "/placeholder.svg?height=250&width=400"}
                          alt={project.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, index) => (
                              <Badge key={index} variant="secondary" className="bg-white/90 text-black text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </CardTitle>
                        </div>
                        <p className="text-sm text-slate-600 mt-2">{project.client}</p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-sm text-slate-600 mb-4 line-clamp-3">{project.description}</p>

                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{project.duration}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-slate-900">Résultats clés :</h4>
                          <ul className="space-y-1">
                            {project.results.slice(0, 2).map((result, index) => (
                              <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors bg-transparent"
                              onClick={() => setSelectedProject(project)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Voir les détails
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-slate-900">{project.title}</DialogTitle>
                              <DialogDescription className="text-lg text-slate-600">
                                {project.client} • {project.duration}
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6">
                              <div className="relative">
                                <Image
                                  src={cardImage || "/placeholder.svg?height=400&width=800"}
                                  alt={project.title}
                                  width={800}
                                  height={400}
                                  className="w-full h-64 object-cover rounded-lg"
                                  loading="lazy"
                                />
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Description du projet</h3>
                                  <p className="text-slate-600 mb-4">{project.description}</p>

                                  <h4 className="font-semibold mb-2">Technologies utilisées</h4>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                      <Badge key={index} variant="secondary">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-3">Résultats obtenus</h4>
                                  <ul className="space-y-2">
                                    {project.results.map((result, index) => (
                                      <li key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-slate-600">{result}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  {project.testimonial && (
                                    <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                                      <Quote className="h-5 w-5 text-slate-400 mb-2" />
                                      <p className="text-sm italic text-slate-600 mb-2">"{project.testimonial.quote}"</p>
                                      <div className="flex items-center gap-2">
                                        <div className="flex text-yellow-400">
                                          {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" />
                                          ))}
                                        </div>
                                        <span className="text-xs text-slate-500">
                                          - {project.testimonial.author}, {project.testimonial.position}
                                        </span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  )})}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Votre projet sera le prochain ?</h3>
                <p className="text-blue-100 mb-6">
                  Rejoignez nos clients satisfaits et donnez vie à vos idées avec notre équipe d'experts.
                </p>
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link href="/quote">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
