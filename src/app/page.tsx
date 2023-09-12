import { Characters } from '@/components/characters'
import HeaderHome from '@/components/header'

export default function Home () {
  return (
    <>
      <HeaderHome title='Rick And Morty Demo' />
      <Characters />
    </>
  )
}
