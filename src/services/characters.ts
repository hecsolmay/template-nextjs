import axios from 'axios'
import { CharactersApiUrl } from '@/constants'
import { type Character, type Response } from '@/types/characters'

export async function getCharacters (): Promise<Response> {
  const response = await axios.get<Response>(CharactersApiUrl)
  return response.data
}

export async function getCharacter (id: string): Promise<Character> {
  const response = await axios.get<Character>(`${CharactersApiUrl}/${id}`)
  return response.data
}
