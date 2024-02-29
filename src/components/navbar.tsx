import { FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

interface SocialType {
  name: string
  url?: string
  icon: React.ReactNode
}

const socials: SocialType[] = [
  {
    name: 'TikTok',
    url: 'https://github.com/RuneDistro',
    icon: <FaTiktok size={18} />,
  },
  {
    name: 'Youtube',
    url: 'https://github.com/RuneDistro',
    icon: <FaYoutube size={18} />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/pietro_rhyann',
    icon: <FaInstagram size={18} />,
  },
  {
    name: 'X',
    url: 'https://twitter.com/pietrorhyan2',
    icon: <FaXTwitter size={18} />,
  },
]

export function Navbar() {
  return (
    <header className="max-w-[1300px] w-full mx-auto py-[18px] px-4 sm:px-6 md:px-12 flex items-center justify-between z-10">
      <div>
        <h2 className="text-2xl sm:text-[32px] font-extrabold text-narvikn tracking-[-3px]">
          Bewave
        </h2>
      </div>

      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-center gap-1 sm:gap-2">
          {socials.map((social) => (
            <a
              className="appearance-none p-1 sm:p-2 transition-colors duration-200 hover:text-orange"
              target="_blank"
              key={social.name}
              href={social.url ? social.url : '/'}
              rel="noreferrer"
            >
              <li className="flex items-center justify-center list-none">
                {social.icon}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </header>
  )
}
