'use client'

import UseCharacters from '@/app/hooks/useCharacters'
import CharacterCard from './character-card'

export function Characters () {
  const { charaters, isLoading } = UseCharacters()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='grid grid-cols-3 gap-4'>
      {charaters.map(character => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  )
}
