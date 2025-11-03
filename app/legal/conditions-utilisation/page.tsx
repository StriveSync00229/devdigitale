import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, CreditCard, Shield, AlertTriangle, Scale, Globe } from "lucide-react"

export default function ConditionsUtilisationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Badge className="bg-yellow-600 text-white px-4 py-2">
              <FileText className="h-4 w-4 mr-2" />
              Conditions Générales
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions d'Utilisation</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conditions générales d'utilisation de la plateforme DevDigitale et de nos services{" "}
            {/* Changed to DevDigitale */}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* Préambule */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
                  <FileText className="h-6 w-6" />
                  Préambule
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme
                  DevDigitale accessible à l'adresse www.devdigitale.com, éditée par DevDigitale.{" "}
                  {/* Changed to DevDigitale */}
                </p>
                <p className="text-slate-700 leading-relaxed">
                  L'utilisation de la plateforme implique l'acceptation pleine et entière des présentes conditions
                  générales d'utilisation. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos
                  services.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    <strong>Date d'entrée en vigueur :</strong>{" "}
                    {new Date().toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Définitions */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-green-900">
                  <Globe className="h-6 w-6" />
                  Définitions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Plateforme</h4>
                        <p className="text-slate-700 text-sm">Le site web DevDigitale et tous ses services associés</p>{" "}
                        {/* Changed to DevDigitale */}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Utilisateur</h4>
                        <p className="text-slate-700 text-sm">
                          Toute personne physique ou morale utilisant la plateforme
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Client</h4>
                        <p className="text-slate-700 text-sm">
                          Utilisateur qui commande des prestations via la plateforme
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Experts</h4>
                        <p className="text-slate-700 text-sm">Professionnel qui réalise les prestations commandées</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Services</h4>
                        <p className="text-slate-700 text-sm">L'ensemble des prestations proposées sur la plateforme</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Compte</h4>
                        <p className="text-slate-700 text-sm">Espace personnel de l'utilisateur sur la plateforme</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accès et inscription */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-purple-900">
                  <Users className="h-6 w-6" />
                  Accès et inscription
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">2.1 Conditions d'accès</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>L'accès à la plateforme est gratuit pour la consultation</li>
                    <li>Certains services nécessitent la création d'un compte</li>
                    <li>L'utilisateur doit être majeur ou avoir l'autorisation de ses représentants légaux</li>
                    <li>L'inscription est réservée aux personnes physiques et morales</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">2.2 Création de compte</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Les informations fournies doivent être exactes et à jour</li>
                    <li>L'utilisateur est responsable de la confidentialité de ses identifiants</li>
                    <li>Un seul compte par utilisateur est autorisé</li>
                    <li>DevDigitale se réserve le droit de suspendre ou supprimer un compte</li>{" "}
                    {/* Changed to DevDigitale */}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Services proposés */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-yellow-900">
                  <Shield className="h-6 w-6" />
                  Services proposés
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">3.1 Description des services</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    DevDigitale propose une plateforme de mise en relation entre clients et prestataires spécialisés{" "}
                    {/* Changed to DevDigitale */}
                    dans :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                      <li>Graphisme et design</li>
                      <li>Développement web et mobile</li>
                      <li>Marketing digital</li>
                      <li>Rédaction et traduction</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                      <li>Vidéo et animation</li>
                      <li>Audio et musique</li>
                      <li>Intelligence artificielle</li>
                      <li>Conseil et business</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">3.2 Modalités de prestation</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Chaque prestation est réalisée par notre équipe d’experts dédiée, au sein de DevDigitale.</li>{" "}
                    {/* Changed to DevDigitale */}
                    <li>DevDigitale facilite la mise en relation et assure le suivi qualité</li>{" "}
                    {/* Changed to DevDigitale */}
                    <li>Chaque projet fait l'objet d'un devis personnalisé</li>
                    <li>Les délais sont convenus entre le client et notre équipe d’experts dédiée </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Obligations des utilisateurs */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-red-900">
                  <AlertTriangle className="h-6 w-6" />
                  Obligations des utilisateurs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">4.1 Obligations générales</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Respecter les lois et règlements en vigueur</li>
                    <li>Ne pas porter atteinte aux droits de tiers</li>
                    <li>Maintenir la confidentialité de ses identifiants</li>
                    <li>Signaler tout dysfonctionnement ou abus</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">4.2 Contenus interdits</h3>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <p className="text-red-800 mb-2 font-medium">Il est strictement interdit de :</p>
                    <ul className="list-disc list-inside space-y-1 text-red-700 text-sm ml-4">
                      <li>Publier des contenus illégaux, diffamatoires ou offensants</li>
                      <li>Violer les droits de propriété intellectuelle</li>
                      <li>Transmettre des virus ou codes malveillants</li>
                      <li>Utiliser la plateforme à des fins frauduleuses</li>
                      <li>Contourner les mesures de sécurité</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conditions financières */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-indigo-900">
                  <CreditCard className="h-6 w-6" />
                  Conditions financières
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">5.1 Tarification</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Les prix sont indiqués en euros toutes taxes comprises</li>
                    <li>Chaque prestation fait l'objet d'un devis détaillé</li>
                    <li>Les prix peuvent être modifiés à tout moment</li>
                    <li>DevDigitale prélève une commission sur chaque transaction</li> {/* Changed to DevDigitale */}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">5.2 Modalités de paiement</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Paiement par carte bancaire, virement ou wallet</li>
                    <li>Le paiement est sécurisé par nos partenaires certifiés</li>
                    <li>Facturation automatique à la validation du projet</li>
                    <li>Possibilité de paiement échelonné selon les projets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">5.3 Remboursement</h3>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <p className="text-indigo-800 text-sm">
                      En cas de non-conformité avérée, un remboursement partiel ou total peut être accordé selon notre
                      politique de satisfaction client.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-2xl text-orange-900">Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">6.1 Droits sur la plateforme</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Tous les éléments de la plateforme (textes, images, logos, codes) sont protégés par le droit
                    d'auteur et appartiennent à DevDigitale ou à ses partenaires. {/* Changed to DevDigitale */}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">6.2 Droits sur les créations</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Les droits sur les créations sont transférés au client après paiement complet</li>
                    <li>Le prestataire conserve le droit de présenter son travail dans son portfolio</li>
                    <li>Toute utilisation commerciale nécessite l'accord du créateur</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-slate-50">
                <CardTitle className="flex items-center gap-3 text-2xl text-slate-900">
                  <Scale className="h-6 w-6" />
                  Limitation de responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">7.1 Responsabilité de DevDigitale</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>DevDigitale s'engage à fournir un service de qualité</li> {/* Changed to DevDigitale */}
                    <li>La responsabilité est limitée au montant de la transaction</li>
                    <li>Aucune garantie sur les résultats commerciaux des prestations</li>
                    <li>Exclusion de responsabilité en cas de force majeure</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">7.2 Responsabilité des utilisateurs</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Chaque utilisateur est responsable de ses actions sur la plateforme</li>
                    <li>Obligation de respecter les droits de propriété intellectuelle</li>
                    <li>Responsabilité en cas de dommages causés à des tiers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Résiliation */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-900">Résiliation</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">8.1 Résiliation par l'utilisateur</h3>
                  <p className="text-slate-700 leading-relaxed">
                    L'utilisateur peut supprimer son compte à tout moment depuis son espace personnel ou en contactant
                    notre support.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">8.2 Résiliation par DevDigitale</h3>
                  <p className="text-slate-700 leading-relaxed">
                    DevDigitale peut suspendre ou résilier un compte en cas de violation des présentes conditions, avec{" "}
                    {/* Changed to DevDigitale */}
                    ou sans préavis selon la gravité.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-slate-50">
                <CardTitle className="text-2xl text-slate-900">Droit applicable et juridiction</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Les présentes conditions générales sont régies par le droit Béninois. En cas de litige, et après
                  tentative de résolution amiable, les tribunaux de Paris seront seuls compétents.
                </p>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <p className="text-slate-800">
                    <strong>Médiation :</strong> Conformément à la réglementation, nous proposons un service de
                    médiation pour résoudre les litiges :
                    <br />
                    Médiateur de la consommation: contact@devdigitale.com
                  </p>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Dernière mise à jour :</strong>{" "}
                  {new Date().toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
