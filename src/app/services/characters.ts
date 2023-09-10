import axios from 'axios'
import { CharactersApiUrl } from '@/app/constants'
import { type Response } from '@/app/types/characters'

export async function getCharacters (): Promise<Response> {
  const response = await axios.get<Response>(CharactersApiUrl)
  return response.data
}
