'use client'

import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import { type Character } from '@/types/characters'
import Link from 'next/link'

export default function CharacterCard ({ character }: { character: Character }) {
  const { name, image } = character
  return (
    <Card className='max-w-fit cursor-pointer py-4'>
      <Link href={`/character/${character.id}`}>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <p className='text-tiny font-bold uppercase'>Name</p>
          <small className='text-default-500'>{name}</small>
          <h4 className='text-large font-bold'>Image</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <Image
            alt='Card background'
            className='rounded-xl object-cover'
            src={image}
            width={270}
          />
        </CardBody>
      </Link>
    </Card>
  )
}
