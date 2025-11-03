import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="font-bold text-lg mb-4">DevDigitale</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Votre partenaire de confiance pour tous vos projets digitaux. Solutions innovantes, expertise reconnue.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/people/Devdigitalecom/61582951574631/?sk=about_privacy_and_legal_info" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  Qui sommes-nous?
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#design" className="text-sm text-muted-foreground hover:text-primary">
                  Design & Création
                </Link>
              </li>
              <li>
                <Link href="/services#tech" className="text-sm text-muted-foreground hover:text-primary">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="text-sm text-muted-foreground hover:text-primary">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="/services#video" className="text-sm text-muted-foreground hover:text-primary">
                  Vidéo & Animation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@devdigitale.com">
                  contact@devdigitale.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                
                
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Zoundja, Abomey-Calavi, République du Bénin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevDigitale. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/mentions-legales" className="text-sm text-muted-foreground hover:text-primary">
              Mentions légales
            </Link>
            <Link href="/legal/politique-confidentialite" className="text-sm text-muted-foreground hover:text-primary">
              Politique de confidentialité
            </Link>
            <Link href="/legal/conditions-utilisation" className="text-sm text-muted-foreground hover:text-primary">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
