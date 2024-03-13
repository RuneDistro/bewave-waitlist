'use server'

import { Resend } from 'resend'
import WaitlistEmail from '../../../emails/waitlist-email'

export async function SendEmail(email: string) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: 'Bewave Music <contact@bewavemusic.com>',
      to: email,
      subject: 'Agradecemos pela sua inscrição na lista de espera 🎵',
      react: WaitlistEmail(),
    })

    if (error) {
      console.log(error)
      return { status: 'error', message: 'Erro no processo de envio do email.' }
    }

    return {
      status: 'success',
      message: 'Email enviado com sucesso.',
      emailId: data?.id,
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      message: 'Um erro inesperado ocorreu. Tente novamente.',
    }
  }
}
