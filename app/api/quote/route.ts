import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Formatage des données pour l'email
    const emailContent = `
      NOUVELLE DEMANDE DE DEVIS
      ========================

      INFORMATIONS PERSONNELLES:
      - Nom: ${data.lastName}
      - Prénoms: ${data.firstName}
      - Email: ${data.email}
      - Téléphone: ${data.phone}
      - Pays: ${data.country}${data.customCountry ? ` (${data.customCountry})` : ""}
      - Ville: ${data.city}
      - Adresse: ${data.address || "Non renseignée"}

      PROFIL:
      - Type: ${data.profileType}
      ${data.occupation ? `- Occupation: ${data.occupation}` : ""}
      ${data.entrepreneurSector ? `- Secteur d'activité: ${data.entrepreneurSector}` : ""}
      ${data.companyName ? `- Entreprise: ${data.companyName}` : ""}
      ${data.companySector ? `- Secteur d'activité: ${data.companySector}` : ""}
      ${data.employeeCount ? `- Nombre d'employés: ${data.employeeCount}` : ""}

      PROJET:
      - Service demandé: ${data.serviceType}
      - Description: ${data.projectDescription}

      BUDGET:
      - Devise: ${data.currency}
      - A un budget défini: ${data.hasBudget === "yes" ? "Oui" : "Non"}
      ${data.budgetAmount ? `- Montant: ${data.budgetAmount} ${data.currency}` : ""}

      Date de la demande: ${new Date().toLocaleString("fr-FR")}
    `

    // Envoi de l'email interne (équipe)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "contact@devdigitale.com", // Changed to DevDigitale
      subject: `Nouvelle demande de devis - DevDigitale - ${data.firstName} ${data.lastName}`, // Changed to DevDigitale
      text: emailContent,
    })

    // Accusé de réception au client
    await transporter.sendMail({
      from: 'no-reply@devdigitale.com',
      to: data.email,
      subject: 'DevDigitale - Confirmation de votre demande de devis',
      text: `Bonjour ${data.firstName},\n\nNous avons bien reçu votre demande de devis et vous remercions de votre intérêt.\nNotre équipe vous recontactera sous 24h ouvrées.\n\nRécapitulatif: \n- Service: ${data.serviceType}\n- Devise: ${data.currency}${data.budgetAmount ? `\n- Budget: ${data.budgetAmount} ${data.currency}` : ''}\n\nCeci est un email automatique, merci de ne pas répondre.\n\n— DevDigitale`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 })
  }
}
