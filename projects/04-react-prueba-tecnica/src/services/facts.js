import { API_KEY, CAT_ENDPOINT_RANDOM_FACT } from '../constants/constants'
import { getFirstThreeWordsWithSplitOnly } from '../logic/getWords'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getRandomImage = (newFact) => {
  const threeFirstWords = getFirstThreeWordsWithSplitOnly(newFact)
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${threeFirstWords}&per_page=3`)
    .then(res => res.json())
    .then(response => {
      const { previewURL } = response.hits[0]
      return previewURL
    })
}
