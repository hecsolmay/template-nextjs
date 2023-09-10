import Link from 'next/link'
import { CalendaryIcon } from './icons'

export function HeaderButton ({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className='dark:focus:ring-[#1da1f2]/55 mb-2  mr-2 inline-flex scale-90 cursor-pointer flex-row items-center justify-center gap-x-2 rounded-lg bg-slate-800 px-5 py-2.5 text-center font-medium text-white opacity-90 transition-all duration-200 ease-in-out hover:scale-110 hover:bg-sky-600 hover:opacity-100 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#1da1f2]/50'
    >
      {children}
    </Link>
  )
}

export function CalendaryButton () {
  return (
    <HeaderButton href='/'>
      <CalendaryIcon />
      Ejemplo de link
    </HeaderButton>
  )
}
