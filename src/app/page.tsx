import { Cards, CardsProps } from '../components/cards'
import { CTAButton } from '../components/cta-button'
import { ImageCarousel } from '../components/image-carousel'

import { AiOutlinePercentage } from 'react-icons/ai'
import { LuUser } from 'react-icons/lu'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

const infoCards: CardsProps[] = [
  {
    icon: <AiOutlinePercentage size={42} color="#F5F5F5" />,
    title: 'Menor Porcentagem, Melhores Ganhos',
    description:
      'Cortar custos é o primeiro passo para aumentar seus ganhos. Aproveite nossa comissão competitiva, serviços de alta qualidade e profundo conhecimento do mercado digital para expandir seu conteúdo digitalmente',
  },
  {
    icon: <LuUser size={42} color="#F5F5F5" />,
    title: 'Suporte Dedicado',
    description:
      'Nosso suporte te ajudará em cada etapa do caminho. Estamos comprometidos em resolver qualquer problema ou dúvida que possa surgir, garantindo que você tenha o apoio necessário para seu sucesso',
  },
  {
    icon: <HiOutlineLightningBolt size={42} color="#F5F5F5" />,
    title: 'Menor Tempo de Aprovação',
    description:
      'Coloque seus conteúdos nas lojas rapidamente, aproveitando novas oportunidades de divulgação e produção. Nossa equipe está dedicada a aprovar seu conteúdo em menos de 24 horas',
  },
]

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

      <section className="w-full mb-[240px]">
        <ImageCarousel />
      </section>

      <section className="w-full flex flex-col gap-6">
        <div className="w-full flex items-center justify-between">
          {infoCards.map((card) => (
            <Cards
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="bg-marfin text-black rounded-3xl p-8 flex items-center justify-between gap-10">
          <div className="flex flex-col gap-2 max-w-[915px]">
            <h3 className="text-[18px] font-madefor-display font-bold text-black">
              Label? Explore Todos os Benefícios para Seus Artistas
            </h3>
            <p className="text-[15px]">
              Trazer seu catálogo para a Bewave oferece inúmeros benefícios.
              Aproveite nossa comissão competitiva, serviços de alta qualidade e
              profundo conhecimento do mercado digital para expandir seu alcance
              globalmente. Nossa plataforma proporciona ganhos melhores, menor
              tempo de aprovação e um suporte dedicado para garantir que seus
              artistas recebem o apoio necessário em cada etapa do caminho.
              Clique em &quot;Venha fazer parte&quot; e descubra tudo que a
              Bewave pode fazer para levar seus artistas ao próximo nível
            </p>
          </div>

          <div className="h-full border-black">
            <IoArrowForwardCircleOutline size={40} />
          </div>
        </div>
      </section>
    </main>
  )
}
