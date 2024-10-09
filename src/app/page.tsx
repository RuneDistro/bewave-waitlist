import { CTAButton } from '../components/cta-button'
import { ImageCarousel } from '../components/image-carousel'

export default function Home() {
  return (
    <main className="max-w-[1060px] w-full mx-auto">
      <div className="flex flex-col items-center justify-center h-[480px] gap-2">
        <h1 className="text-[45px] font-bold text-center">
          O futuro da distribuição
        </h1>

        <p className="max-w-[675px] w-full text-center text-[18px] leading-7 mb-2">
          A Bewave facilita a conexão entre artistas e as principais plataformas
          digitais, oferecendo distribuição global e suporte especializado
        </p>

        <CTAButton />
      </div>

      <section className="w-full">
        <ImageCarousel />
      </section>

      <div className="w-full h-screen text-center">Sexoo</div>
    </main>
  )
}
