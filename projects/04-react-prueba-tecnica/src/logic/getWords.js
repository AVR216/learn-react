export function getFirstWord (fact) {
  if (!fact) return

  if (fact.lenght <= 0) return

  return fact.split(' ')[0]
}

export function getFirstThreeWords (fact) {
  if (!fact) return

  if (fact.lenght <= 0) return

  return fact.split(' ').slice(0, 3).join(' ')
}

export function getFirstThreeWordsWithSplitOnly (fact) {
  if (!fact) return

  if (fact.lenght <= 0) return

  return fact.split(' ', 3).join(' ')
}
