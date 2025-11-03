import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales - DevDigitale", // Changed to DevDigitale
  description: "Mentions légales de DevDigitale - Informations légales et réglementaires", // Changed to DevDigitale
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Mentions Légales</h1>

            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  Informations sur l'entreprise
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Dénomination sociale</h3>
                    <p className="text-slate-700">DevDigitale</p> {/* Changed to DevDigitale */}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Forme juridique</h3>
                    <p className="text-slate-700">
                      Entreprise immatriculée au Registre du Commerce et du Crédit Mobilier
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Capital social</h3>
                    <p className="text-slate-700">750 000 € (sept cent cinquante mille euros)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">IFU</h3>
                    <p className="text-slate-700">0202318726546</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">RCCM</h3>
                    <p className="text-slate-700">RB/ABC/23 A 90710</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  Coordonnées
                </h2>
                <div className="space-y-4">
                  <div>
                    
                    <h3 className="font-semibold text-slate-900 mb-2">Adresse 1</h3>
                    <p className="text-slate-700">Zoundja, Abomey-Calavi, République du Bénin</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-700">contact@devdigitale.com</p> {/* Changed to DevDigitale */}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Téléphone</h3>
                    <p className="text-slate-700">+229 XX XX XX XX</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  Propriété intellectuelle
                </h2>
                <p className="text-slate-700 mb-4">
                  L'ensemble de ce site relève de la législation béninoise et internationale sur le droit d'auteur et la
                  propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
                  téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-slate-700 mb-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p className="text-slate-700">
                  Les marques et logos figurant sur le site sont déposés par DevDigitale ou éventuellement par ses{" "}
                  {/* Changed to DevDigitale */}
                  partenaires. Toute reproduction totale ou partielle de ces marques ou de ces logos effectuée à partir
                  des éléments du site sans l'autorisation expresse de DevDigitale est donc prohibée au sens de la{" "}
                  {/* Changed to DevDigitale */}
                  législation béninoise sur la propriété intellectuelle.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  Responsabilité
                </h2>
                <p className="text-slate-700 mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à
                  différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="text-slate-700 mb-4">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir
                  le signaler par email, à l'adresse contact@devdigitale.com, en décrivant le problème de la manière la{" "}
                  {/* Changed to DevDigitale */}
                  plus précise possible.
                </p>
                <p className="text-slate-700">
                  DevDigitale ne pourra en aucun cas être tenu responsable de tout dommage de quelque nature qu'il soit{" "}
                  {/* Changed to DevDigitale */}
                  résultant de l'interprétation ou de l'utilisation des informations et/ou documents disponibles sur ce
                  site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  Liens hypertextes
                </h2>
                <p className="text-slate-700 mb-4">
                  Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources
                  présentes sur le réseau Internet ne sauraient engager la responsabilité de DevDigitale.{" "}
                  {/* Changed to DevDigitale */}
                </p>
                <p className="text-slate-700">
                  De même, DevDigitale ne saurait être tenu responsable du contenu des sites qui auraient un lien vers{" "}
                  {/* Changed to DevDigitale */}
                  le présent site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  Collecte et traitement de données personnelles
                </h2>
                <p className="text-slate-700 mb-4">
                  Conformément à la loi béninoise sur la protection des données personnelles, vous disposez d'un droit
                  d'accès, de rectification et de suppression des données vous concernant.
                </p>
                <p className="text-slate-700">
                  Pour exercer ce droit, contactez-nous à l'adresse : contact@devdigitale.com{" "}
                  {/* Changed to DevDigitale */}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">Cookies</h2>
                <p className="text-slate-700 mb-4">
                  Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et
                  d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que
                  vous visitez.
                </p>
                <p className="text-slate-700">
                  Vous pouvez configurer votre navigateur pour qu'il vous avertisse de la présence de cookies et vous
                  permette de les refuser.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  Droit applicable et juridiction
                </h2>
                <p className="text-slate-700 mb-4">
                  Tout litige en relation avec l'utilisation du site www.devdigitale.com est soumis au droit béninois.{" "}
                  {/* Changed to DevDigitale */}
                </p>
                <p className="text-slate-700">
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Cotonou, République du
                  Bénin.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
