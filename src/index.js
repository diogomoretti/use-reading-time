import { useState, useEffect } from 'react'

export default function useReadingTime(ref, wordsPerMinute = 260) {
  const [wordsCount, setWordsCount] = useState(1)

  useEffect(() => {
    const elem = ref.current
    const words = elem.innerText.match(/\w+/g).length
    setWordsCount(words)
  }, [ref])

  return {readingTime: Math.ceil(wordsCount / wordsPerMinute), wordsCount}
}
