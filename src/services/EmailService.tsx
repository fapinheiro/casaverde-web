import emailClient from '@sendgrid/mail'

emailClient.setApiKey(process.env.SENDGRID_API_KEY)

const MSG = {
    to: 'fpinheiro@pinheirolabs.tech', // Change to your recipient
    from: 'fpinheiro@pinheirolabs.tech', // Change to your verified sender
    subject: 'Assinatura Newsletter',
    html: `
    Olá, [nome].
    </br>
    Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.
    </br>
    Até logo!"`,
}

export function EmailService() {
    return {
        sendMail(nome: string) {
            const MSG_WITH_NAME = {
                ...MSG,
                html: MSG.html.replace('[nome]', nome)
            }
            return emailClient.send(MSG_WITH_NAME)
        }
    }
}