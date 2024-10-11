export type CardsProps = {
  icon: React.ReactNode
  title: string
  description: string
}

export function Cards({ icon, title, description }: CardsProps) {
  return (
    <div className="max-w-[330px] w-full min-h-[295px] max-h-[350px] border border-[#333] rounded-3xl p-4 flex flex-col items-start">
      <div className="">{icon}</div>
      <h3 className="text-base font-bold h-[42px] font-madefor-display leading-5 mt-1 mb-3">
        {title}
      </h3>
      <p className="text-[15px]">{description}</p>
    </div>
  )
}
