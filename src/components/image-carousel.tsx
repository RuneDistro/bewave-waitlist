'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'

type ImageTypes = {
  imageUrl: string
  alt: string
}

export function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoscroll({
      speed: 1,
    }),
  ])

  const images: ImageTypes[] = [
    {
      imageUrl: '/images/spotify.png',
      alt: 'Spotify logo',
    },
    {
      imageUrl: '/images/tidal.png',
      alt: 'Tidal logo',
    },
    {
      imageUrl: '/images/apple-music.png',
      alt: 'Apple Music logo',
    },
    {
      imageUrl: '/images/deezer.png',
      alt: 'Deezer logo',
    },
    {
      imageUrl: '/images/tiktok.png',
      alt: 'TikTok logo',
    },
    {
      imageUrl: '/images/youtube.png',
      alt: 'Youtube logo',
    },
  ]

  return (
    <div className="container-carousel mt-[50px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image) => (
            <div
              key={image.alt}
              className="flex-[0_0_20%] h-[100px] min-w-0 flex items-center justify-center"
            >
              <div className="w-[160px] h-[40px] relative">
                <Image
                  src={image.imageUrl}
                  alt={image.alt}
                  fill
                  objectFit="cover"
                  quality={100}
                  priority
                  className="aspect-square"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
