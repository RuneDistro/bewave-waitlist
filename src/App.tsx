import { Footer } from './components/foooter'
import { Form } from './components/form'
import { FrequencyIcon } from './components/frequency-icon'
import { Navbar } from './components/navbar'
import { TopGradient } from './components/top-gradient'

export function App() {
  return (
    <div className="bg-black relative h-screen flex flex-col justify-between px-12">
      <TopGradient />
      <Navbar />

      <main className="h-full flex flex-col items-center">
        <FrequencyIcon />

        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-orange to-dark-orange font-extrabold text-8xl tracking-[-10px] w-[358px]">
          Bewave
        </h1>

        <p className="text-base font-semibold text-center">
          Lançar sua música e gerenciar sua carreira nunca foi tão fácil.
        </p>
        <p className="text-base font-semibold text-center">
          Junto, vamos revolucionar a maneira como você administra suas
          criações!
        </p>

        <Form />
      </main>

      <Footer />
    </div>
  )
}
