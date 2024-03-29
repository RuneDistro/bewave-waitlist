'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { BiLoaderAlt } from 'react-icons/bi'
import { useState } from 'react'

import { z } from 'zod'
import { SendEmail } from '../services/resend/sendEmail'

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
      <h3 className="text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-[#999]">
        Entrar na lista de espera
      </h3>
      <p className="text-xs font-medium text-center">
        você apenas será notificado com novidades, sem spam!
      </p>

      <div className="mt-[18px] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-1 w-full">
        <input
          type="email"
          placeholder="Digite seu email"
          disabled={isFetching}
          {...register('email')}
          className={`max-w-[340px] w-full bg-[#07071C] outline-none border transition-all duration-200 ${errors.email ? 'border-red-600' : 'border-[#101033]'}  rounded-md px-3 py-[10px] disabled:cursor-not-allowed placeholder-silver text-sm font-medium`}
        />
        <div
          role="complementary"
          className="flex items-center justify-center p-[1px] rounded-md bg-gradient-to-b from-[#F97E4B] to-[#9A401A] transition-opacity duration-200 hover:opacity-90"
        >
          <button
            type="submit"
            disabled={isFetching}
            className="flex rounded-md items-center justify-center w-[99px] h-[40px] bg-gradient-to-b disabled:cursor-not-allowed from-orange to-dark-orange text-black font-medium text-base"
          >
            {isFetching ? (
              <BiLoaderAlt size={18} className="animate-spin" />
            ) : (
              <span>Enviar</span>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}
