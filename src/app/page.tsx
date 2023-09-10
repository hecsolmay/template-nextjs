import { Characters } from '@/app/components/characters'
import HeaderHome from './components/header'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <HeaderHome title='Rick And Morty Demo' />
      <Characters />
    </main>
  )
}
