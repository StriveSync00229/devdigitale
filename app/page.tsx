"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code, Star, ArrowRight, CheckCircle, Zap, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"

// Ajout d'un composant animé pour les stats
function AnimatedStat({ stat }: { stat: { value: string } }) {
  const getTarget = () => {
    if (stat.value.endsWith("+")) return parseInt(stat.value);
    if (stat.value.endsWith("%")) return parseInt(stat.value);
    return parseInt(stat.value);
  };
  const suffix = stat.value.endsWith("+") ? "+" : (stat.value.endsWith("%") ? "%" : "");
  const target = getTarget();
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    let end = target;
    let incr = Math.max(1, Math.round(end / 40));
    let interval = setInterval(() => {
      start += incr;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 24);
    return () => clearInterval(interval);
  }, [target]);
  // Afficher le suffixe seulement à la fin
  return (
    <span>
      {count}
      {count === target ? suffix : ''}
    </span>
  );
}

export default function HomePage() {
  // Parallax léger pour les éléments décoratifs du hero
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const onMouseMoveHero = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    setParallax({ x: relX, y: relY })
  }

  // Reveal on scroll pour sections clés
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[]
    if (elements.length === 0) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    elements.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  const services = [
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Design & Créativité",
      description: "Identité visuelle, UX/UI, branding",
      features: ["Logo & Charte graphique", "Design web & mobile", "Supports print"],
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "Développement",
      description: "Sites web, applications, solutions sur-mesure",
      features: ["Sites vitrine & e-commerce", "Applications mobiles", "Solutions IA"],
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Marketing Digital",
      description: "SEO, publicités, stratégie digitale",
      features: ["Référencement SEO/SEM", "Social Media", "Analytics & CRO"],
    },
  ]

  const advantages = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Expertise Certifiée",
      description: "100+ experts qualifiés et certifiés dans leur domaine",
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Qualité Garantie",
      description: "Satisfaction client de 98% et garantie sur tous nos projets",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Livraison Rapide",
      description: "Délais respectés et communication transparente",
    },
  ]

  const testimonials = [
    {
      quote: "Une équipe incroyable qui a su comprendre nos besoins et livrer un produit exceptionnel.",
      author: "Alice Martin",
      company: "CEO, Innovatech",
      image: "",
      rating: 5,
    },
    {
      quote: "Leur expertise en marketing digital a doublé notre trafic en 3 mois. Des résultats concrets !",
      author: "Julien Dubois",
      company: "Directeur Marketing, Solutions Vertes",
      image: "",
      rating: 5,
    },
    {
      quote: "Approche professionnelle et réactive. Notre site est plus rapide et nos ventes ont augmenté.",
      author: "Sofia Benali",
      company: "E-commerce Manager, Mode&Co",
      image: "",
      rating: 5,
    },
    {
      quote: "Excellent accompagnement de A à Z. L'équipe a été force de proposition et très pédagogue.",
      author: "Marc Leroy",
      company: "CTO, Financia",
      image: "",
      rating: 5,
    },
  ]

  const stats = [
    { value: "500+", label: "Projets Livrés", color: "text-blue-600" },
    { value: "250+", label: "Clients Satisfaits", color: "text-green-600" },
    { value: "100+", label: "Experts Qualifiés", color: "text-yellow-600" },
    { value: "98%", label: "Taux de Satisfaction", color: "text-purple-600" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section Professionnel */}
      <section className="relative py-12 md:py-20 overflow-hidden" onMouseMove={onMouseMoveHero}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 animate-gradient"></div>
        {/* Overlay d'icônes animées (ne touche pas au gradient) */}
        <div className="pointer-events-none select-none absolute inset-0 z-0">
          <svg width="100%" height="100%" style={{position:'absolute',inset:0,overflow:'visible'}}>
            <g className="animate-float-slow" style={{transform:`translate3d(${parallax.x * 10}px, ${parallax.y * 10}px, 0)`}}>
              <circle cx="8%" cy="18%" r="24" fill="#ffe066" fillOpacity={0.6} />
              <circle cx="90%" cy="27%" r="16" fill="#38bdf8" fillOpacity={0.5} />
              <rect x="38%" y="53%" width="32" height="32" fill="#7c3aed" opacity={0.17} rx="6"/>
            </g>
            <g className="animate-float-medium" style={{transform:`translate3d(${parallax.x * -14}px, ${parallax.y * -8}px, 0)`}}>
              <polygon points="230,70 240,90 210,90" fill="#f472b6" fillOpacity={0.7} />
              <polygon points="80,170 105,180 90,200" fill="#22d3ee" fillOpacity={0.55}/>
              <circle cx="15%" cy="85%" r="18" fill="#84cc16" fillOpacity={0.45} />
            </g>
            <g className="animate-float-fast" style={{transform:`translate3d(${parallax.x * 20}px, ${parallax.y * -16}px, 0)`}}>
              <rect x="75%" y="85%" width="14" height="14" fill="#eab308" rx="3" opacity={0.27}/>
              <polygon points="330,240 340,260 310,250" fill="#4c51bf" fillOpacity={0.65}/>
              <circle cx="60%" cy="10%" r="12" fill="#ec4899" fillOpacity={0.44} />
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30 px-4 py-2">
              🚀 Plateforme N°1 des Services Numériques
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transformez vos idées en
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                succès digital
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              De la conception à la réalisation, notre écosystème d'experts vous accompagne dans tous vos projets
              numériques avec excellence et innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 reveal">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shine-on-hover"
              >
                <Link href="/quote">
                  Obtenir un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent shine-on-hover"
              >
                <Link href="/services">Découvrir nos services</Link>
              </Button>
            </div>

            {/* Stats en ligne */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto reveal">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}><AnimatedStat stat={stat}/></div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Nos Domaines d'Excellence</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une expertise complète pour répondre à tous vos besoins numériques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto reveal">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shine-on-hover">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-slate-100 rounded-full w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6 bg-slate-900 hover:bg-slate-800">
                    <Link href="/services">En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Notre Processus</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Une méthodologie simple et efficace</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto reveal">
            {/* Lancement */}
            <div className="text-center group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <span className="text-lg font-bold text-blue-600">1</span>
                </div>
                <Badge className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold">LANCEMENT</Badge>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cahier des charges</h3>
              <p className="text-slate-600 text-sm">
                Définition détaillée des fonctionnalités et besoins de votre projet.
              </p>
            </div>

            {/* Production */}
            <div className="text-center group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                  <span className="text-lg font-bold text-green-600">2</span>
                </div>
                <Badge className="bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold">PRODUCTION</Badge>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Développement</h3>
              <p className="text-slate-600 text-sm">
                Création de votre site, application ou solution selon vos spécifications.
              </p>
            </div>

            {/* Livraison */}
            <div className="text-center group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-lg font-bold text-yellow-600">3</span>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-semibold">LIVRAISON</Badge>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Garantie 90 jours</h3>
              <p className="text-slate-600 text-sm">
                Mise en production avec garantie et correction des bugs pendant 90 jours.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 reveal">
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 px-6">
              <Link href="/quote">
                Démarrer votre projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Pourquoi Choisir DevDigitale ?</h2>{" "}
            {/* Changed to DevDigitale */}
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">L'excellence au service de votre réussite</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto reveal">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 hover:-translate-y-1 transition-transform duration-300 shine-on-hover">
                <div className="mx-auto mb-4 p-3 bg-slate-100 rounded-full w-fit">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{advantage.title}</h3>
                <p className="text-slate-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Ils Nous Font Confiance</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto reveal">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:-translate-y-1 transition-transform duration-300 shine-on-hover">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg?height=50&width=50"}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full object-cover mr-4"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Concrétiser Votre Vision ?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 250 entreprises qui ont fait confiance à notre expertise pour transformer leurs idées en
            succès digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold">
              <Link href="/quote">
                Obtenir un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
