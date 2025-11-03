import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, Users, Award, Rocket, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Qui sommes-nous ? | DevDigitale - Agence Digitale",
  description:
    "Découvrez DevDigitale, votre partenaire de confiance pour la transformation digitale. Plus de 200 clients satisfaits, 300 projets réalisés et une équipe de 50+ experts.",
  keywords: "agence digitale, transformation digitale, expertise web, développement, design, marketing digital",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Qui sommes-nous ?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DevDigitale est votre partenaire de confiance pour la transformation digitale. Nous combinons expertise
              technique, créativité et passion pour donner vie à vos projets les plus ambitieux.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fondée en 2020, DevDigitale est née de la vision de rendre les services numériques accessibles et de
                  qualité pour toutes les entreprises, qu'elles soient startups innovantes ou grandes entreprises
                  établies.
                </p>
                <p>
                  Depuis nos débuts, nous avons accompagné plus de 200 clients dans leur transformation digitale,
                  développé plus de 300 projets et constitué une équipe de talents passionnés par l'innovation.
                </p>
                <p>
                  Aujourd'hui, DevDigitale est reconnue comme un acteur majeur du digital en France et à
                  l'international, avec une présence dans plus de 15 pays.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/modern-office-collaboration.png"
                alt="Notre équipe DevDigitale"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous visons l'excellence dans chaque projet, en dépassant les attentes de nos clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Lightbulb className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Nous restons à la pointe des technologies pour offrir des solutions innovantes et performantes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Nous travaillons main dans la main avec nos clients pour créer des solutions sur-mesure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualité</h3>
                <p className="text-muted-foreground">
                  Nous garantissons un niveau de qualité optimal dans tous nos livrables.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Accompagner les entreprises dans leur transformation digitale en créant des solutions innovantes et
              performantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Rocket className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Propulser votre croissance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre mission est de vous fournir les outils digitaux nécessaires pour accélérer votre croissance.
                  Nous créons des solutions sur-mesure qui s'adaptent à vos besoins spécifiques et évoluent avec votre
                  entreprise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Maximiser votre impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous vous aidons à maximiser votre présence en ligne et à atteindre vos objectifs business. Chaque
                  projet est conçu pour générer des résultats mesurables et un retour sur investissement optimal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Approche</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée qui garantit le succès de vos projets digitaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Écoute & Analyse</h3>
                <p className="text-muted-foreground">
                  Nous commençons par comprendre vos besoins, vos objectifs et votre vision pour définir la meilleure
                  stratégie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Conception & Design</h3>
                <p className="text-muted-foreground">
                  Nos designers créent des maquettes et prototypes qui allient esthétique moderne et expérience
                  utilisateur optimale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Développement</h3>
                <p className="text-muted-foreground">
                  Notre équipe technique développe votre solution avec les technologies les plus performantes et
                  sécurisées.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Suivi & Optimisation</h3>
                <p className="text-muted-foreground">
                  Nous assurons un suivi continu et optimisons votre solution pour garantir des performances maximales.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-background rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Nos Engagements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Transparence totale</h4>
                  <p className="text-muted-foreground text-sm">
                    Communication claire et régulière tout au long du projet
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Respect des délais</h4>
                  <p className="text-muted-foreground text-sm">
                    Livraison dans les temps convenus avec un planning précis
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Support réactif</h4>
                  <p className="text-muted-foreground text-sm">
                    Assistance technique disponible et réactive après livraison
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Qualité garantie</h4>
                  <p className="text-muted-foreground text-sm">Tests rigoureux et contrôle qualité à chaque étape</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-sm md:text-base opacity-90">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
              <div className="text-sm md:text-base opacity-90">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base opacity-90">Experts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base opacity-90">Pays</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
