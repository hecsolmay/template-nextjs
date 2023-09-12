'use client'

import UseCharacters from '@/hooks/useCharacters'
import CharacterCard from './character-card'

export function Characters () {
  const { charaters, isLoading } = UseCharacters()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='w-full px-4'>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4'>
        {charaters.map(character => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  )
}
