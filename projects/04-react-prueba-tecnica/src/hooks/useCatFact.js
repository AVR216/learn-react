import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Effect to get three first words of a random fact
  useEffect(refreshFact, []) // The effect is only excute once, when the component is rendering

  return { fact, refreshFact }
}
