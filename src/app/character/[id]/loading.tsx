'use client'
import { CircularProgress } from '@nextui-org/react'

export default function Loading () {
  return (
    <div className='grid h-full w-full place-items-center'>
      <CircularProgress color='default' aria-label='Loading...' />
    </div>
  )
}
