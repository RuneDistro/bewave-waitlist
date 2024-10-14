import { Cards, CardsProps } from '../components/cards'
import { CTAButton } from '../components/cta-button'
import { ImageCarousel } from '../components/image-carousel'

import { AiOutlinePercentage } from 'react-icons/ai'
import { LuUser } from 'react-icons/lu'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { FaRegCircle } from 'react-icons/fa'

import Image from 'next/image'

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
      <div className="flex flex-col items-center justify-center h-[500px] sm:h-[480px] gap-2">
        <h1 className="text-[45px] font-bold text-center">
          O futuro da{' '}
          <span className="gradient-text text-transparent animate-gradient">
            distribuição
          </span>
        </h1>

        <p className="max-w-[675px] w-full text-center text-[18px] leading-7 pb-10 md:pb-2 z-10">
          A Bewave facilita a conexão entre artistas e as principais plataformas
          digitais, oferecendo distribuição global e suporte especializado
        </p>

        <CTAButton />
      </div>

      <section className="w-full pb-[120px]">
        <ImageCarousel />
      </section>

      <section className="w-full flex flex-col items-center justify-center lgp:items-start lgp:justify-start gap-8 lgp:gap-6 py-[120px]">
        <div className="w-full flex items-center justify-center gap-8 lgp:justify-between lgp:gap-0 flex-wrap">
          {infoCards.map((card) => (
            <Cards
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="bg-marfin text-black rounded-3xl p-8 flex flex-col md:flex-row items-center justify-center gap:6 md:justify-between md:gap-10">
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

          <div className="md:h-full hidden md:block">
            <IoArrowForwardCircleOutline size={40} />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-34 py-[120px]">
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
            Distribua Globalmente
          </h2>
          <h3 className="text-beige text-2xl font-madefor-display font-bold mb-4">
            Enviamos seu conteúdo para mais de 75 lojas ao redor do mundo
          </h3>
          <p className="text-[15px] leading-7">
            A Bewave é parceira das principais plataformas de distribuição
            musical no mundo, incluindo Spotify, YouTube, Deezer e muitas
            outras. Oferecemos diversas vantagens para maximizar a visibilidade
            do seu conteúdo. Nossa plataforma garante uma relação sólida e ágil
            com todas as lojas, permitindo entregas rápidas e eficientes. Com a
            Bewave, você terá uma experiência superior, com suporte dedicado e
            acesso a uma ampla rede global.
          </p>
        </div>

        <div className="max-w-[500px] w-full max-h-[500px] aspect-square rounded-2xl bg-[#333] flex items-center justify-center">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-2xl overflow-hidden relative">
            <Image
              src="/images/fake-image.png"
              alt="Fake image"
              className="object-scale-down"
              objectFit="cover"
              quality={100}
              fill
              sizes="(min-width: 726px) 70vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col-reverse lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-4 py-[120px]">
        <div className="image-wrapper">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-20 relative rounded-2xl overflow-hidden bg-[#111]">
            <Image
              src="/images/dark-background.png"
              alt="Imagem com um fundo preto e um gradiente de azul com tons metálicos"
              className="object-scale-down"
              objectFit="cover"
              quality={100}
              fill
              sizes="(min-width: 726px) 70vw, 100vw"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
            Esteja Atualizado
          </h2>
          <h3 className="text-purple text-2xl font-madefor-display font-bold mb-4">
            Dashboard simples e intuitiva
          </h3>
          <p className="text-[15px] leading-7">
            A Bewave foi desenvolvida para simplificar e focar no que realmente
            importa para nossos clientes. Cada etapa, desde o upload da sua
            primeira faixa até a distribuição nas lojas, conta com tutoriais
            interativos e em tempo real. Não exibimos informações desnecessárias
            e poluentes em sua dashboard, garantindo sempre um uptime de 24/7.
            Oferecemos alertas de atualizações e programas de parcerias
            disponíveis em nosso Marketplace, acessíveis diretamente na sua
            dashboard.
          </p>
        </div>
      </section>

      <section className="w-full flex flex-col lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-20 py-[120px]">
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
            Transforme 15 dias em 1
          </h2>
          <h3 className="text-blue text-2xl font-madefor-display font-bold mb-4">
            Prezamos pela eficiência
          </h3>
          <p className="text-[15px] leading-7 mb-5">
            Diga adeus ao processo padrão de distribuição. Com a Bewave, você
            pode licenciar seu conteúdo em questão de horas, sem precisar se
            preocupar com os longos dias de aprovação que outras distribuidoras
            exigem. Licencie seu conteúdo e veja-o disponível nas lojas
            selecionadas no mesmo dia.
          </p>

          <div className="w-full flex items-center gap-10 sm:gap-28">
            <div className="flex flex-col gap-2 text-white font-madefor-display font-bold text-2xl">
              <span className="text-[38px]">150+</span>
              Países
            </div>

            <div className="flex flex-col gap-2 text-white font-madefor-display font-bold text-2xl">
              <span className="text-[38px]">2B+</span>
              Streamings
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-full lgp:justify-between gap-8 lgp:gap-0 flex-wrap lgp:w-auto">
          <div className="max-w-[240px] w-full border border-[#333] rounded-xl text-[13px] p-3">
            <div className="flex items-center justify-between mb-3">
              <p>Distribuição padrão</p>
              <span>10 dias</span>
            </div>
            Outras distribuidoras
            <div className="flex items-center mt-6 gap-3">
              <div className="pl-2 flex flex-col items-center justify-center">
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
              </div>
              <div className="flex-grow flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-center gap-8">
                  <DistributionCards name="Aprovação" />
                  <span>3 dias</span>

                  <DistributionCards name="Envio" />
                  <span>7 dias</span>

                  <DistributionCards name="Disponível nas lojas" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[240px] w-full border border-[#333] rounded-xl text-[13px] p-3">
            <div className="flex items-center justify-between mb-3">
              <p>Futuro da distribuição</p>
              <span>1 dia</span>
            </div>
            Bewave
            <div className="flex items-center mt-6 gap-3">
              <div className="pl-2 flex flex-col items-center justify-center">
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
              </div>
              <div className="flex-grow flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-center gap-8">
                  <DistributionCards name="Aprovação" />
                  <span>120 minutos</span>

                  <DistributionCards name="Envio" />
                  <span>1 dia</span>

                  <DistributionCards name="Disponível nas lojas*" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function DistributionCards({ name }: { name: string }) {
  return (
    <div className="w-[154px] py-2 border border-[#333] rounded-3xl flex items-center justify-center text-[13px]">
      {name}
    </div>
  )
}

function Circle() {
  return (
    <div role="figure" className="flex items-center justify-center py-4">
      <FaRegCircle size={13} className="text-white" />
    </div>
  )
}

function DashedLine() {
  return (
    <div
      role="figure"
      className="border border-dashed border-white h-[75px]"
    ></div>
  )
}
