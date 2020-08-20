import React, { useRef } from 'react'
import Post from './post'
import useReadingTime from 'use-reading-time'

const App = () => {
  const post = useRef()
  const { readingTime, wordsCount } = useReadingTime(post)

  return (
    <div className="demo">
      <div className="demo-heading">
        <strong>
          {readingTime} <em>min</em> • {wordsCount} <em>words</em>
        </strong>
      </div>
      <Post paragraphs={30} ref={post} />
    </div>
  )
}

export default App
