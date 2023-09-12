import CharacterCard from '@/components/character-card'
import { getCharacter } from '@/services/characters'

interface Params {
  id: string
}

interface Props {
  params: Params
}

export default async function CharacterPage ({ params }: Props) {
  const { id } = params

  const character = await getCharacter(id)

  console.log(character)

  return (
    <div>
      <CharacterCard character={character}/>
    </div>
  )
}
