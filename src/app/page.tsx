import { Footer } from '../components/footer'
import { Form } from '../components/form'
import { FrequencyIcon } from '../components/frequency-icon'
import { Navbar } from '../components/navbar'
import { TopGradient } from '../components/top-gradient'

export default function App() {
  return (
    <div className="relative h-screen flex flex-col justify-between px-4 sm:px-6 md:px-12">
      <TopGradient />
      <Navbar />

      <main className="flex flex-col items-center">
        <FrequencyIcon />

        <h1 className="-mt-10 bg-clip-text text-transparent text-center bg-gradient-to-b from-orange to-dark-orange font-extrabold text-7xl md:text-8xl tracking-[-8px] md:tracking-[-10px] w-[320px] md:w-[358px]">
          Bewave
        </h1>

        <p className="text-sm sm:text-base font-semibold text-center">
          Lançar sua música e gerenciar sua carreira nunca foi tão fácil.
        </p>

        <p className="text-sm sm:text-base font-semibold text-center">
          Juntos, vamos revolucionar a maneira como você administra suas
          criações!
        </p>

        <Form />
      </main>
      <Footer />
    </div>
  )
}
