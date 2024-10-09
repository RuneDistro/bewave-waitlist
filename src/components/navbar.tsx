// import Image from 'next/image'
import Link from 'next/link'

type NavbarMenuType = {
  name: string
  url: string
}

export function Navbar() {
  const menus: NavbarMenuType[] = [
    {
      name: 'Vantagens',
      url: '#',
    },
    {
      name: 'Dashboard',
      url: '#dashboard',
    },
  ]

  return (
    <header className="max-w-[1060px] w-full px-5 py-3 shadow-[0_-1px_0_1px_#131313] bg-black/30 backdrop-blur-[10px] fixed z-40 top-[18px] left-1/2 -translate-x-1/2 flex items-center justify-between rounded-2xl">
      <div>
        <Link
          href="/"
          className="font-bold font-nunito-sans text-[20px] text-white"
        >
          Bewave
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
