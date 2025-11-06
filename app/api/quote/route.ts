import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    let data, files = [];
    let isMultipart = false;

    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('multipart/form-data')) {
      isMultipart = true;
      const formData = await request.formData();
      data = {} as Record<string, any>;
      for (const [key, value] of formData.entries()) {
        if (key === 'attachments') {
          files.push(value);
        } else {
          // tente de parser JSON pour array/objets (checkbox etc.)
          try {
            data[key] = typeof value === 'string' && (value.startsWith('[') || value.startsWith('{')) ? JSON.parse(value) : value;
          } catch {
            data[key] = value;
          }
        }
      }
      console.log('FICHIERS JOINTS:', files);
      for (const [i, file] of files.entries()) {
        if (typeof file === 'object' && 'name' in file && 'size' in file) {
          console.log(`[API QUOTE] Fichier[${i}] name: ${file.name}, size: ${file.size}`);
        } else {
          console.log(`[API QUOTE] Fichier[${i}] (type inconnu):`, file);
        }
      }
      for (const [key, value] of Object.entries(data)) {
        console.log(`[API QUOTE] Champ reçu '${key}':`, value);
      }
    } else {
      data = await request.json();
    }
    console.log('[DEMANDE DE DEVIS] Données reçues :', data)

    // Nouvelle config: SMTP Hostinger
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT as string, 10),
      secure: process.env.EMAIL_PORT === '465', // SSL pour 465, sinon TLS
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

    // Préparer attachements nodemailer pour l'équipe
    let equipeAttachments = [];
    if (isMultipart && files.length > 0) {
      for (let f of files) {
        if (typeof f === 'object' && 'arrayBuffer' in f) {
          const arrBuf = await f.arrayBuffer();
          equipeAttachments.push({
            filename: f.name || 'document.pdf',
            content: Buffer.from(arrBuf),
          });
        }
      }
    }

    // Envoi de l'email interne (équipe)
    const mailEquipe = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "contact@devdigitale.com", // Changed to DevDigitale
      subject: `Nouvelle demande de devis - DevDigitale - ${data.firstName} ${data.lastName}`, // Changed to DevDigitale
      text: emailContent,
      attachments: equipeAttachments, // <= joindre fichiers s'il y en a
    })
    console.log('[DEMANDE DE DEVIS] Mail équipe envoyé:', mailEquipe.messageId);

    // Accusé de réception au client
    const mailClient = await transporter.sendMail({
      from: 'no-reply@devdigitale.com',
      to: data.email,
      subject: 'DevDigitale - Confirmation de votre demande de devis',
      text: `Bonjour ${data.firstName},\n\nNous avons bien reçu votre demande de devis et vous remercions de votre intérêt.\nNotre équipe vous recontactera sous 24h ouvrées.\n\nRécapitulatif: \n- Service: ${data.serviceType}\n- Devise: ${data.currency}${data.budgetAmount ? `\n- Budget: ${data.budgetAmount} ${data.currency}` : ''}\n\nCeci est un email automatique, merci de ne pas répondre.\n\n— DevDigitale`,
    })
    console.log('[DEMANDE DE DEVIS] Accusé client envoyé:', mailClient.messageId);

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    if (error instanceof Error) console.error(error.stack)
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 })
  }
}
