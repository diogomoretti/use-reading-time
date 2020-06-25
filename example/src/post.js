import React, { forwardRef } from 'react'

const Paragraph = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
)

const Post = forwardRef(({ paragraphs = 1 }, ref) => {
  const numberOfParagraphs = Array.from({ length: paragraphs })

  return (
    <div className='demo-text' ref={ref}>
      {numberOfParagraphs.map(( item, index ) => (
        <Paragraph key={index} />
      ))}
    </div>
  )
})

export default Post
