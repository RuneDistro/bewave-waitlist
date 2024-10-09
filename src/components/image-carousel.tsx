'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'

export function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoscroll({
      speed: 4,
    }),
  ])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-8">
        <div className="flex-[0_0_40%] bg-[#111] min-w-0 rounded-lg">
          Slide 1
        </div>
        <div className="flex-[0_0_40%] bg-[#111] min-w-0 rounded-lg">
          Slide 2
        </div>
        <div className="flex-[0_0_40%] bg-[#111] min-w-0 rounded-lg">
          Slide 3
        </div>
        <div className="flex-[0_0_40%] bg-[#111] min-w-0 rounded-lg">
          Slide 4
        </div>
        <div className="flex-[0_0_40%] bg-[#111] min-w-0 rounded-lg">
          Slide 5
        </div>
        <div className="flex-[0_0_40%] bg-[#111] min-w-0 rounded-lg mr-8">
          Slide 6
        </div>
      </div>
    </div>
  )
}
