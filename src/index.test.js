import { renderHook } from '@testing-library/react-hooks'
import useReadingTime from '.'

const paragraphText = 'test '.repeat(60).trim()

test('should return default values for empty ref', () => {
  const pageRef = { current: undefined }
  const { result } = renderHook(() => useReadingTime(pageRef))

  expect(result.current).toEqual({ readingTime: 1, wordsCount: 1 })
})

test('should return correct values for empty content', () => {
  const pageRef = { current: { innerText: '' } }
  const { result } = renderHook(() => useReadingTime(pageRef))

  expect(result.current).toEqual({ readingTime: 0, wordsCount: 0 })
})

test('should return correct values for non-empty content', () => {
  const pageRef = { current: { innerText: paragraphText } }
  const { result } = renderHook(() => useReadingTime(pageRef))

  expect(result.current).toEqual({ readingTime: 1, wordsCount: 60 })
})

test('should return correct values for slower wordsPerMinute', () => {
  const pageRef = { current: { innerText: paragraphText } }
  const { result } = renderHook(() => useReadingTime(pageRef, 20))

  expect(result.current).toEqual({ readingTime: 3, wordsCount: 60 })
})

test('should return correct value for faster wordsPerMinute', () => {
  const pageRef = { current: { innerText: paragraphText } }
  const { result } = renderHook(() => useReadingTime(pageRef, 600))

  expect(result.current).toEqual({ readingTime: 1, wordsCount: 60 })
})
