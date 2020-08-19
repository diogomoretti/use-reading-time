import { MutableRefObject } from 'react'

export default function useReadingTime<T extends HTMLElement>(
  ref: MutableRefObject<T>,
  wordsPerMinute?: number
): { readingTime: number; wordsCount: number }
