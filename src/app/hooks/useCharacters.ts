import { useQuery } from '@tanstack/react-query'
import { getCharacters } from '../services/characters'

export default function UseCharacters () {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => await getCharacters()
  })

  return {
    charaters: data?.results ?? [],
    isLoading,
    isError,
    refetch
  }
}
