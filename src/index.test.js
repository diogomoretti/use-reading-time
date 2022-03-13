import { renderHook } from '@testing-library/react-hooks'
import randomWords from 'random-words'
import useReadingTime from './'

describe('useReadingTime', () => {
  let post, ref, postContent

  beforeEach(() => {
    post = document.createElement('p')
    postContent = post.innerText = randomWords({ exactly: 1, join: ' ' })
    ref = { current: post }
  })

  it('should reading time is 1 (min) when have 1 word', () => {
    postContent = post.innerText = randomWords({ exactly: 1, join: ' ' })
    const { result } = renderHook(() => useReadingTime(ref))
    const { readingTime } = result.current
    
    expect(readingTime).toBe(1)
  })

  it('should reading time is 2 (min) when have 300 words', () => {
    postContent = post.innerText = randomWords({ exactly: 300, join: ' ' })
    const { result } = renderHook(() => useReadingTime(ref))
    const { readingTime } = result.current
    
    expect(readingTime).toBe(2)
  })

  it('should word count is 1 (word) when have 1 words', () => {
    postContent = post.innerText = randomWords({ exactly: 1, join: ' ' })
    const { result } = renderHook(() => useReadingTime(ref))
    const { wordsCount } = result.current
    
    expect(wordsCount).toBe(1)
  })

  it('should words count is 230 (words) when have 230 words', () => {
    postContent = post.innerText = randomWords({ exactly: 230, join: ' ' })
    const { result } = renderHook(() => useReadingTime(ref))
    const { wordsCount } = result.current
    
    expect(wordsCount).toBe(230)
  })
})
