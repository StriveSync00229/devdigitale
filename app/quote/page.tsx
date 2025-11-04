"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { servicesData } from "@/lib/data"
import { Upload, ArrowRight, ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Ajout interface QuoteFormData
interface QuoteFormData {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  country: string;
  customCountry: string;
  city: string;
  address: string;
  profileType: string;
  occupation: string;
  companyName: string;
  employeeCount: string;
  serviceType: string;
  projectDescription: string;
  currency: string;
  hasBudget: string;
  budgetAmount: string;
  entrepreneurSector: string;
  companySector: string;
  contactPreferences: string[];
  position: string;
}

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const { toast } = useToast()
  const [showSuccessScreen, setShowSuccessScreen] = useState(false)

  // Utilisation du typage propre QuoteFormData
  const [formData, setFormData] = useState<QuoteFormData>({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    country: "",
    customCountry: "",
    city: "",
    address: "",
    profileType: "",
    occupation: "",
    companyName: "",
    employeeCount: "",
    serviceType: "",
    projectDescription: "",
    currency: "EUR",
    hasBudget: "",
    budgetAmount: "",
    entrepreneurSector: "",
    companySector: "",
    contactPreferences: [],
    position: "",
  })

  // Typage errors pour qu'il accepte toutes les clés du formulaire et string supplémentaire
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData | string, string>>>({})

  const totalSteps = 4

  // Correction des typages
  const validateStep = (step: number) => {
    const newErrors: Partial<Record<keyof QuoteFormData | string, string>> = {}

    if (step === 1) {
      if (!formData.lastName) newErrors.lastName = "Le nom est requis"
      if (!formData.firstName) newErrors.firstName = "Le prénom est requis"
      if (!formData.email) newErrors.email = "L'email est requis"
      if (!formData.phone) newErrors.phone = "Le téléphone est requis"
      if (!formData.country) newErrors.country = "Le pays est requis"
      if (formData.country === "other" && !formData.customCountry) newErrors.customCountry = "Précisez votre pays"
      if (!formData.city) newErrors.city = "La ville est requise"
    }

    if (step === 2) {
      if (!formData.profileType) newErrors.profileType = "Le type de profil est requis"
      if (formData.profileType === "individual" && !formData.occupation)
        newErrors.occupation = "L'occupation est requise"
      if (formData.profileType === "company" && !formData.companyName)
        newErrors.companyName = "Le nom de l'entreprise est requis"
      if (formData.profileType === "company" && !formData.employeeCount)
        newErrors.employeeCount = "Le nombre d'employés est requis"
      if (formData.profileType === "entrepreneur" && !formData.entrepreneurSector)
        newErrors.entrepreneurSector = "Le secteur d'activité est requis"
      if (formData.profileType === "company" && !formData.companySector)
        newErrors.companySector = "Le secteur d'activité est requis"
      if (formData.profileType === "company" && !formData.position)
        newErrors.position = "La position dans l'entreprise est requise"
    }

    if (step === 3) {
      if (!formData.serviceType) newErrors.serviceType = "Le type de prestation est requis"
      if (!formData.projectDescription) newErrors.projectDescription = "La description du projet est requise"
    }

    if (step === 4) {
      if (!formData.hasBudget) newErrors.hasBudget = "Veuillez préciser si vous avez un budget"
      if (!formData.contactPreferences || formData.contactPreferences.length === 0)
        newErrors.contactPreferences = "Veuillez choisir au moins un moyen de contact"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccessScreen(true);
        setFormData({
          lastName: "",
          firstName: "",
          email: "",
          phone: "",
          country: "",
          customCountry: "",
          city: "",
          address: "",
          profileType: "",
          occupation: "",
          companyName: "",
          employeeCount: "",
          serviceType: "",
          projectDescription: "",
          currency: "EUR",
          hasBudget: "",
          budgetAmount: "",
          entrepreneurSector: "",
          companySector: "",
          contactPreferences: [],
          position: "",
        })
        setCurrentStep(1)
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccessScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Demande bien prise en compte !</h2>
          <p className="text-lg mb-6">Merci pour votre demande de devis.<br />Un expert de notre équipe vous contactera sous peu.<br />Un e-mail récapitulatif vient également de vous être envoyé.</p>
          <a href="/" className="inline-block mt-4 bg-blue-600 text-white font-semibold rounded px-6 py-3 hover:bg-blue-700 transition">Retour à l'accueil</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Demander un Devis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Décrivez-nous votre projet pour recevoir une estimation personnalisée et gratuite de nos experts.
          </p>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8 px-2 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`hidden sm:block h-1 w-10 sm:w-16 mx-2 transition-all ${
                        step < currentStep ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Informations</span>
              <span>Profil</span>
              <span>Projet</span>
              <span>Budget</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl px-4 md:px-0">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardTitle className="text-xl md:text-2xl">
                {currentStep === 1 && "Vos Informations Personnelles"}
                {currentStep === 2 && "Votre Profil"}
                {currentStep === 3 && "Détails du Projet"}
                {currentStep === 4 && "Budget et Finalisation"}
              </CardTitle>
              <CardDescription className="text-blue-100">
                Étape {currentStep} sur {totalSteps}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Étape 1: Informations personnelles */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-base font-semibold">
                          Nom *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Dupont"
                          className="h-12"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-base font-semibold">
                          Prénoms *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Jean Pierre"
                          className="h-12"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-semibold">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean.dupont@email.com"
                          className="h-12"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-semibold">
                          Numéro de téléphone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+33 6 12 34 56 78"
                          className="h-12"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-base font-semibold">
                          Pays *
                        </Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) => setFormData({ ...formData, country: value })}
                        >
                          <SelectTrigger id="country" className="h-12">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="france">France</SelectItem>
                            <SelectItem value="belgium">Belgique</SelectItem>
                            <SelectItem value="switzerland">Suisse</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="usa">États-Unis</SelectItem>
                            <SelectItem value="uk">Royaume-Uni</SelectItem>
                            <SelectItem value="kuwait">Koweït</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-base font-semibold">
                          Ville *
                        </Label>
                        <Input
                          id="city"
                          placeholder="Paris"
                          className="h-12"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-base font-semibold">
                          Adresse
                        </Label>
                        <Input
                          id="address"
                          placeholder="123 Rue de la Paix"
                          className="h-12"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        />
                      </div>
                    </div>

                    {formData.country === "other" && (
                      <div className="space-y-2">
                        <Label htmlFor="customCountry" className="text-base font-semibold">
                          Précisez votre pays *
                        </Label>
                        <Input
                          id="customCountry"
                          placeholder="Nom de votre pays"
                          className="h-12"
                          value={formData.customCountry}
                          onChange={(e) => setFormData({ ...formData, customCountry: e.target.value })}
                        />
                        {errors.customCountry && <p className="text-red-500 text-sm">{errors.customCountry}</p>}
                      </div>
                    )}
                  </div>
                )}

                {/* Étape 2: Profil */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Type de profil *</Label>
                      <RadioGroup
                        value={formData.profileType}
                        onValueChange={(value) => setFormData({ ...formData, profileType: value })}
                      >
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                          <RadioGroupItem value="entrepreneur" id="entrepreneur" />
                          <Label htmlFor="entrepreneur" className="flex-1 cursor-pointer">
                            <div className="font-medium">Entrepreneur</div>
                            <div className="text-sm text-muted-foreground">Travailleur indépendant, freelance</div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                          <RadioGroupItem value="individual" id="individual" />
                          <Label htmlFor="individual" className="flex-1 cursor-pointer">
                            <div className="font-medium">Particulier</div>
                            <div className="text-sm text-muted-foreground">Projet personnel</div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                          <RadioGroupItem value="company" id="company" />
                          <Label htmlFor="company" className="flex-1 cursor-pointer">
                            <div className="font-medium">Entreprise</div>
                            <div className="text-sm text-muted-foreground">Société, organisation</div>
                          </Label>
                        </div>
                      </RadioGroup>
                      {errors.profileType && <p className="text-red-500 text-sm">{errors.profileType}</p>}
                    </div>

                    {formData.profileType === "individual" && (
                      <div className="space-y-2">
                        <Label htmlFor="occupation" className="text-base font-semibold">
                          Occupation *
                        </Label>
                        <Input
                          id="occupation"
                          placeholder="Ex: Médecin, Enseignant, Étudiant..."
                          className="h-12"
                          value={formData.occupation}
                          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        />
                        {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation}</p>}
                      </div>
                    )}

                    {formData.profileType === "entrepreneur" && (
                      <div className="space-y-2">
                        <Label htmlFor="entrepreneurSector" className="text-base font-semibold">
                          Secteur d'activité *
                        </Label>
                        <Input
                          id="entrepreneurSector"
                          placeholder="Ex: Consulting, E-commerce, Services numériques..."
                          className="h-12"
                          value={formData.entrepreneurSector}
                          onChange={(e) => setFormData({ ...formData, entrepreneurSector: e.target.value })}
                        />
                        {errors.entrepreneurSector && (
                          <p className="text-red-500 text-sm">{errors.entrepreneurSector}</p>
                        )}
                      </div>
                    )}

                    {formData.profileType === "company" && (
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName" className="text-base font-semibold">
                            Nom de l'entreprise *
                          </Label>
                          <Input
                            id="companyName"
                            placeholder="DevDigital SARL"
                            className="h-12"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          />
                          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employeeCount" className="text-base font-semibold">
                            Nombre d'employés *
                          </Label>
                          <Select
                            value={formData.employeeCount}
                            onValueChange={(value) => setFormData({ ...formData, employeeCount: value })}
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-5">1-5 employés</SelectItem>
                              <SelectItem value="6-20">6-20 employés</SelectItem>
                              <SelectItem value="21-50">21-50 employés</SelectItem>
                              <SelectItem value="51-200">51-200 employés</SelectItem>
                              <SelectItem value="200+">Plus de 200 employés</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.employeeCount && <p className="text-red-500 text-sm">{errors.employeeCount}</p>}
                        </div>
                      </div>
                    )}

                    {formData.profileType === "company" && (
                      <div className="space-y-2">
                        <Label htmlFor="companySector" className="text-base font-semibold">
                          Secteur d'activité *
                        </Label>
                        <Input
                          id="companySector"
                          placeholder="Ex: Industrie, Finance, Santé, Technologie..."
                          className="h-12"
                          value={formData.companySector}
                          onChange={(e) => setFormData({ ...formData, companySector: e.target.value })}
                        />
                        {errors.companySector && <p className="text-red-500 text-sm">{errors.companySector}</p>}
                      </div>
                    )}

                    {formData.profileType === "company" && (
                      <div className="space-y-2">
                        <Label htmlFor="position" className="text-base font-semibold">
                          Votre position dans l'entreprise *
                        </Label>
                        <Input
                          id="position"
                          placeholder="Ex: Directeur Général, Responsable Marketing, Chef de projet..."
                          className="h-12"
                          value={formData.position}
                          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        />
                        {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
                      </div>
                    )}
                  </div>
                )}

                {/* Étape 3: Projet */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="serviceType" className="text-base font-semibold">
                        Type de prestation *
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      >
                        <SelectTrigger id="serviceType" className="h-12">
                          <SelectValue placeholder="Choisissez une catégorie de service" />
                        </SelectTrigger>
                        <SelectContent>
                          {servicesData.map((category) => (
                            <SelectItem key={category.id} value={category.title}>
                              {category.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectDescription" className="text-base font-semibold">
                        Description détaillée du projet *
                      </Label>
                      <Textarea
                        id="projectDescription"
                        placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, public cible, contraintes techniques, délais..."
                        rows={6}
                        className="resize-none"
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      />
                      {errors.projectDescription && <p className="text-red-500 text-sm">{errors.projectDescription}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base font-semibold">Fichiers joints</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <div className="space-y-2">
                          <p className="text-lg font-medium">Glissez-déposez vos fichiers ici</p>
                          <p className="text-sm text-muted-foreground">
                            ou <span className="text-blue-600 font-medium cursor-pointer">parcourez</span> vos fichiers
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF, images (JPG, PNG) - Maximum 10MB par fichier
                          </p>
                        </div>
                        <Input type="file" multiple className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 4: Budget */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="currency" className="text-base font-semibold">
                        Devise *
                      </Label>
                      <Select
                        value={formData.currency}
                        onValueChange={(value) => setFormData({ ...formData, currency: value })}
                      >
                        <SelectTrigger id="currency" className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EUR">Euro (€)</SelectItem>
                          <SelectItem value="USD">Dollar US ($)</SelectItem>
                          <SelectItem value="GBP">Livre Sterling (£)</SelectItem>
                          <SelectItem value="KWD">Dinar Koweïtien (KWD)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Avez-vous un budget défini ? *</Label>
                      <RadioGroup
                        value={formData.hasBudget}
                        onValueChange={(value) => setFormData({ ...formData, hasBudget: value })}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                          <RadioGroupItem value="yes" id="budget-yes" />
                          <Label htmlFor="budget-yes" className="flex-1 cursor-pointer">
                            <div className="font-medium">Oui, j'ai un budget défini</div>
                            <div className="text-sm text-muted-foreground">
                              Je connais le montant que je souhaite investir
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                          <RadioGroupItem value="no" id="budget-no" />
                          <Label htmlFor="budget-no" className="flex-1 cursor-pointer">
                            <div className="font-medium">Non, je n'ai pas de budget défini</div>
                            <div className="text-sm text-muted-foreground">Je souhaite connaître vos tarifs</div>
                          </Label>
                        </div>
                      </RadioGroup>
                      {errors.hasBudget && <p className="text-red-500 text-sm">{errors.hasBudget}</p>}
                    </div>

                    {formData.hasBudget === "yes" && (
                      <div className="space-y-2">
                        <Label htmlFor="budgetAmount" className="text-base font-semibold">
                          Montant de votre budget
                        </Label>
                        <div className="relative">
                          <Input
                            id="budgetAmount"
                            type="number"
                            placeholder="Ex: 5000"
                            className="h-12 pr-16"
                            value={formData.budgetAmount}
                            onChange={(e) => setFormData({ ...formData, budgetAmount: e.target.value })}
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium">
                            {formData.currency === "EUR" && "€"}
                            {formData.currency === "USD" && "$"}
                            {formData.currency === "GBP" && "£"}
                            {formData.currency === "KWD" && "KWD"}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Comment souhaitez-vous être contacté ? *</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                          <input
                            type="checkbox"
                            id="contact-email"
                            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked={formData.contactPreferences.includes("email")}
                            onChange={(e) => {
                              const preferences = [...formData.contactPreferences]
                              if (e.target.checked) {
                                preferences.push("email")
                              } else {
                                const index = preferences.indexOf("email")
                                if (index > -1) preferences.splice(index, 1)
                              }
                              setFormData({ ...formData, contactPreferences: preferences })
                            }}
                          />
                          <Label htmlFor="contact-email" className="flex-1 cursor-pointer">
                            <div className="font-medium">Email</div>
                            <div className="text-sm text-muted-foreground">Réponse par email professionnel</div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                          <input
                            type="checkbox"
                            id="contact-whatsapp"
                            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked={formData.contactPreferences.includes("whatsapp")}
                            onChange={(e) => {
                              const preferences = [...formData.contactPreferences]
                              if (e.target.checked) {
                                preferences.push("whatsapp")
                              } else {
                                const index = preferences.indexOf("whatsapp")
                                if (index > -1) preferences.splice(index, 1)
                              }
                              setFormData({ ...formData, contactPreferences: preferences })
                            }}
                          />
                          <Label htmlFor="contact-whatsapp" className="flex-1 cursor-pointer">
                            <div className="font-medium">WhatsApp</div>
                            <div className="text-sm text-muted-foreground">Contact rapide et sécurisé via WhatsApp</div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                          <input
                            type="checkbox"
                            id="contact-telegram"
                            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked={formData.contactPreferences.includes("telegram")}
                            onChange={(e) => {
                              const preferences = [...formData.contactPreferences]
                              if (e.target.checked) {
                                preferences.push("telegram")
                              } else {
                                const index = preferences.indexOf("telegram")
                                if (index > -1) preferences.splice(index, 1)
                              }
                              setFormData({ ...formData, contactPreferences: preferences })
                            }}
                          />
                          <Label htmlFor="contact-telegram" className="flex-1 cursor-pointer">
                            <div className="font-medium">Telegram</div>
                            <div className="text-sm text-muted-foreground">Discussion rapide et sécurisée via Telegram</div>
                          </Label>
                        </div>
                      </div>
                      {errors.contactPreferences && <p className="text-red-500 text-sm">{errors.contactPreferences}</p>}
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border">
                      <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Prochaines étapes
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            1
                          </div>
                          <div>
                            <p className="font-medium text-blue-900">Analyse de votre demande</p>
                            <p className="text-blue-700">Sous 24h ouvrées</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            2
                          </div>
                          <div>
                            <p className="font-medium text-blue-900">Appel de découverte</p>
                            <p className="text-blue-700">Avec nos experts techniques</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            3
                          </div>
                          <div>
                            <p className="font-medium text-blue-900">Proposition détaillée</p>
                            <p className="text-blue-700">Devis personnalisé et planning</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="w-full px-6 bg-transparent"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button type="button" onClick={nextStep} className="w-full px-6 bg-blue-600 hover:bg-blue-700">
                      Suivant
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting} className="w-full px-8 bg-green-600 hover:bg-green-700">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
