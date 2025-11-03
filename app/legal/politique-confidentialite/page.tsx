import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Users, Database, Settings, AlertTriangle } from "lucide-react"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Badge className="bg-green-600 text-white px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Conforme RGPD
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles conformément au
            RGPD
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
                  <Eye className="h-6 w-6" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  DevDigitale, en tant que responsable de traitement, accorde une grande importance à la protection de{" "}
                  {/* Changed to DevDigitale */}
                  vos données personnelles et au respect de votre vie privée.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons,
                  stockons et protégeons vos données personnelles lorsque vous utilisez notre site web et nos services,
                  conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    <strong>Dernière mise à jour :</strong>{" "}
                    {new Date().toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Responsable de traitement */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-green-900">
                  <Users className="h-6 w-6" />
                  Responsable de traitement
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Identité</h3>
                    <p className="text-slate-700">DevDigitale</p> {/* Changed to DevDigitale */}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Adresse</h3>
                    <p className="text-slate-700">
                     
                      Adresse : Zoundja, Abomey-Calavi Bénin
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
                    <p className="text-slate-700">Email : contact@devdigitale.com {/* Changed to DevDigitale */}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Données collectées */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-purple-900">
                  <Database className="h-6 w-6" />
                  Données personnelles collectées
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">1. Données d'identification</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                    <li>Informations sur votre entreprise (le cas échéant)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">2. Données de navigation</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées et temps passé</li>
                    <li>Données de géolocalisation approximative</li>
                    <li>Cookies et technologies similaires</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">3. Données de projet</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Description de vos projets</li>
                    <li>Budget et préférences</li>
                    <li>Fichiers et documents partagés</li>
                    <li>Historique des communications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Finalités du traitement */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-yellow-900">
                  <Settings className="h-6 w-6" />
                  Finalités du traitement
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Gestion des services</h4>
                      <p className="text-blue-800 text-sm">
                        Traitement de vos demandes de devis, gestion des projets, facturation
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Communication</h4>
                      <p className="text-green-800 text-sm">Réponse à vos questions, support client, newsletters</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Amélioration des services</h4>
                      <p className="text-purple-800 text-sm">
                        Analyse d'usage, optimisation de l'expérience utilisateur
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Obligations légales</h4>
                      <p className="text-red-800 text-sm">
                        Respect des obligations comptables, fiscales et réglementaires
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Marketing</h4>
                      <p className="text-yellow-800 text-sm">
                        Envoi d'informations commerciales (avec votre consentement)
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-2">Sécurité</h4>
                      <p className="text-slate-800 text-sm">Prévention de la fraude, sécurisation des accès</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Base légale */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-2xl text-indigo-900">Base légale du traitement</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">
                      Contrat
                    </Badge>
                    <p className="text-slate-700">Exécution du contrat de prestation de services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">
                      Consentement
                    </Badge>
                    <p className="text-slate-700">Marketing direct et cookies non essentiels</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">
                      Intérêt légitime
                    </Badge>
                    <p className="text-slate-700">Amélioration de nos services et prospection commerciale</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">
                      Obligation légale
                    </Badge>
                    <p className="text-slate-700">Respect des obligations comptables et fiscales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Durée de conservation */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-2xl text-orange-900">Durée de conservation</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Clients actifs</h4>
                      <p className="text-slate-700">Pendant toute la durée de la relation contractuelle + 3 ans</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Prospects</h4>
                      <p className="text-slate-700">3 ans à compter du dernier contact</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Données comptables</h4>
                      <p className="text-slate-700">10 ans conformément aux obligations légales</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Cookies</h4>
                      <p className="text-slate-700">13 mois maximum</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vos droits */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-green-900">
                  <Shield className="h-6 w-6" />
                  Vos droits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-slate-700 leading-relaxed">
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold text-blue-900 mb-2">Droit d'accès</h4>
                    <p className="text-blue-800 text-sm">Obtenir une copie de vos données personnelles</p>
                  </div>
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h4 className="font-semibold text-green-900 mb-2">Droit de rectification</h4>
                    <p className="text-green-800 text-sm">Corriger des données inexactes ou incomplètes</p>
                  </div>
                  <div className="p-4 border-l-4 border-red-500 bg-red-50">
                    <h4 className="font-semibold text-red-900 mb-2">Droit d'effacement</h4>
                    <p className="text-red-800 text-sm">Demander la suppression de vos données</p>
                  </div>
                  <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                    <h4 className="font-semibold text-yellow-900 mb-2">Droit à la portabilité</h4>
                    <p className="text-yellow-800 text-sm">Récupérer vos données dans un format structuré</p>
                  </div>
                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold text-purple-900 mb-2">Droit d'opposition</h4>
                    <p className="text-purple-800 text-sm">Vous opposer au traitement de vos données</p>
                  </div>
                  <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50">
                    <h4 className="font-semibold text-indigo-900 mb-2">Droit de limitation</h4>
                    <p className="text-indigo-800 text-sm">Limiter le traitement de vos données</p>
                  </div>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <p className="text-slate-800">
                    <strong>Pour exercer vos droits :</strong> Contactez-nous à l'adresse contact@devdigitale.com en{" "}
                    {/* Changed to DevDigitale */}
                    précisant votre demande et en joignant une copie de votre pièce d'identité.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sécurité */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-red-900">
                  <Lock className="h-6 w-6" />
                  Sécurité des données
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
                  données personnelles contre :
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>L'accès non autorisé</li>
                  <li>La divulgation, la modification ou la destruction</li>
                  <li>La perte accidentelle</li>
                  <li>Les cyberattaques</li>
                </ul>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-800">
                    <AlertTriangle className="h-4 w-4 inline mr-2" />
                    <strong>En cas de violation de données :</strong> Nous nous engageons à vous informer dans les 72
                    heures si vos données sont concernées par une violation de sécurité.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact et réclamations */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-slate-50">
                <CardTitle className="text-2xl text-slate-900">Contact et réclamations</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Délégué à la Protection des Données (DPO)</h3>
                    <p className="text-slate-700">
                      Email : contact@devdigitale.com {/* Changed to DevDigitale */}
                      <br />
                      Adresse : Zoundja, Abomey-Calavi Bénin
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Autorité de contrôle</h3>
                    <p className="text-slate-700">
                      Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
                      auprès de notre assistant support :<br />
                       République du Bénin
                      <br />
                      Email: contact@devdigitale.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
