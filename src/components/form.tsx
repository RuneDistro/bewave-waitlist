'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { BiLoaderAlt } from 'react-icons/bi'
import { useState } from 'react'

import { z } from 'zod'
import { SendEmail } from '../services/resend/sendEmail'
import Link from 'next/link'

const createFormScheme = z.object({
  email: z.string().email('Deve ser um email válido'),
})

type formScheme = z.infer<typeof createFormScheme>

export function Form() {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<formScheme>({ resolver: zodResolver(createFormScheme) })

  const [isFetching, setIsFetching] = useState(false)

  const onSubmit: SubmitHandler<formScheme> = async (data) => {
    setIsFetching(true)
    const result = await SendEmail(data.email)

    if (result.status === 'error') {
      setIsFetching(false)
      toast.error(
        'Ocorreu um erro no processamento do email. Tente novamente, mais tarde',
      )
      return
    }

    setIsFetching(false)
    toast.success(
      'Você entrou na nossa lista de espera! Um email foi enviado confirmando sua inscrição.',
    )
    reset()
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center mt-8 w-full"
    >
      <h3 className="text-2xl mb-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-[#999]">
        Entre em contato conosco!
      </h3>

      <Link
        href={'https://contate.me/bewave'}
        className="lg:text-base text-base  underline underline-offset-4 text-center text-white transition-colors duration-200 hover:text-orange"
      >
        Clique aqui para entrar em contato pelo nosso Whatsapp.
      </Link>

      <div className="my-[10px] text-sm flex items-center justify-center gap-1">
        <div className="bg-gradient-to-l from-white to-white/20 w-10 h-[1px]"></div>
        <span>ou</span>
        <div className="bg-gradient-to-r from-white to-white/20 w-10 h-[1px]"></div>
      </div>
    </form>
  )
}
