import { Characters } from '@/app/components/characters'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <header className='mb-4'>
        <h1 className='text-4xl font-bold'>Rick and Morty Example</h1>
      </header>
      <Characters />
    </main>
  )
}
