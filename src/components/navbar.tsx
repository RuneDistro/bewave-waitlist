// import Image from 'next/image'
import Link from 'next/link'
import Image from 'next/image'

import bewave from '../../public/logo-wordmark.png'

type NavbarMenuType = {
  name: string
  url: string
}

export function Navbar() {
  const menus: NavbarMenuType[] = [
    {
      name: 'Vantagens',
      url: '/#vantagens',
    },
    {
      name: 'Dashboard',
      url: '/#dashboard',
    },
  ]

  return (
    <header className="max-w-[1060px] w-full px-5 py-3 shadow-[0_-1px_0_1px_#33333350] bg-black/30 backdrop-blur-[10px] fixed z-40 top-[18px] left-1/2 -translate-x-1/2 flex items-center justify-between rounded-2xl">
      <div className="w-[80px] h-[17px] relative">
        <Link href="/" className="w-full h-full">
          <Image src={bewave} alt="Bewave logo" fill priority quality={100} />
        </Link>
      </div>

      <ul className="flex items-center justify-center gap-6">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            href={menu.url}
            className="text-marfin hover:text-white hover:underline focus:text-white focus:underline underline-offset-2 transition-all duration-200"
          >
            <li className="text-sm font-nunito-sans font-normal">
              {menu.name}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  )
}
