// import { useForm, SubmitHandler } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'

// import { z } from 'zod'

export function Form() {
  return (
    <form action="" className="flex flex-col items-center mt-8 w-full">
      <h3 className="text-2xl font-semibold">Entrar na lista de espera</h3>
      <p className="text-xs font-medium">
        você apenas será notificado com novidades, sem spam!
      </p>

      <div className="mt-[18px] flex items-center justify-center gap-1 w-full">
        <input
          type="email"
          placeholder="Digite seu email"
          className="max-w-[340px] w-full bg-[#07071C] border border-[#101033] rounded-md px-3 py-[10px] placeholder-silver text-sm font-medium"
        />
        <div
          role="complementary"
          className="flex items-center justify-center p-[1px] rounded-md bg-gradient-to-b from-[#F97E4B] to-[#9A401A] transition-opacity duration-200 hover:opacity-90"
        >
          <button
            type="submit"
            className="flex  rounded-md items-center justify-center px-6 py-[8px] bg-gradient-to-b from-orange to-dark-orange text-black font-medium text-base"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  )
}
