import { CalendaryButton } from './header-button'

export default function HeaderHome ({ title }: { title: string }) {
  return (
    <header className='mb-4 space-y-4'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <div className='m-auto flex max-w-4xl flex-col justify-around gap-x-4 md:flex-row'>
        <CalendaryButton />
      </div>
    </header>
  )
}
