'use client'

import Link from 'next/link'

export function Form() {
  return (
    <form>
      <h3 className="text-2xl mb-[18px] font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-[#999]">
        Entre em contato conosco!
      </h3>

      <Link
        href={'https://contate.me/bewave'}
        className="lg:text-base text-base  underline underline-offset-4 text-center text-white transition-colors duration-200 hover:text-orange"
      >
        Clique aqui para entrar em contato pelo nosso Whatsapp.
      </Link>
    </form>
  )
}
