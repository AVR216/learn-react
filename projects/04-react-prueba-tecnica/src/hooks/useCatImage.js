import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/facts'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Effect to get a image
  useEffect(() => {
    if (!fact) return
    const actualFact = fact
    getRandomImage(actualFact).then(setImageUrl)
  }, [fact])

  return { imageUrl }
}
