import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import { type Character } from '@/app/types/characters'

export default function CharacterCard ({ character }: { character: Character }) {
  const { name, image } = character
  return (
    <Card className='py-4 cursor-pointer'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-tiny uppercase font-bold'>Name</p>
        <small className='text-default-500'>{name}</small>
        <h4 className='font-bold text-large'>Image</h4>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  )
}
