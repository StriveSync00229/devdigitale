"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [customSubject, setCustomSubject] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: selectedSubject === "Autre" ? customSubject : selectedSubject,
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        if (e.currentTarget && typeof e.currentTarget.reset === "function") {
          e.currentTarget.reset()
        }
        setSelectedSubject("")
        setCustomSubject("")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une question ? Un projet ? Notre équipe est là pour vous accompagner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Nom <span className="text-red-500">*</span>
                    </Label>
                    <Input id="name" name="name" placeholder="Dupont" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Prénoms <span className="text-red-500">*</span>
                    </Label>
                    <Input id="name" name="name" placeholder="Jean " required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input id="email" name="email" type="email" placeholder="jean.dupont@exemple.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Téléphone <span className="text-red-500">*</span>
                    </Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+33 6 12 34 56 78" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Objet <span className="text-red-500">*</span>
                    </Label>
                    <Select value={selectedSubject} onValueChange={setSelectedSubject} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un objet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Demande d'information">Demande d'information</SelectItem>
                        <SelectItem value="Question technique">Question technique</SelectItem>
                        <SelectItem value="Partenariat">Partenariat</SelectItem>
                        <SelectItem value="Support">Support</SelectItem>
                        <SelectItem value="Réclamation">Réclamation</SelectItem>
                        <SelectItem value="Autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedSubject === "Autre" && (
                    <div className="space-y-2">
                      <Label htmlFor="customSubject">
                        Précisez l'objet <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="customSubject"
                        value={customSubject}
                        onChange={(e) => setCustomSubject(e.target.value)}
                        placeholder="Votre objet personnalisé"
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Votre message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre besoin ou votre question..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 text-green-800 rounded-md">
                      Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 text-red-800 rounded-md">
                      Une erreur s'est produite. Veuillez réessayer plus tard.
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting || !selectedSubject}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer le message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Coordonnées</CardTitle>
                  <CardDescription>Vous pouvez également nous contacter directement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@devdigitale.com" className="text-muted-foreground hover:text-primary">
                        contact@devdigitale.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    
                    <div>
                      
                      
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-muted-foreground">
                      
                        Zoundja, Abomey-Calavi, République du Bénin
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Horaires d'ouverture</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lundi - Vendredi</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samedi</span>
                    <span className="font-medium">08h00 - 15h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
