<p align="center">
  <img src="https://user-images.githubusercontent.com/2853428/85798175-667dbf00-b713-11ea-8e5e-30ed45470c37.png" width="500">
  <p align="center"><em>React hook to show a reading time and number of words in your article</em></p>
  <p align="center">
    <a href="https://www.npmjs.com/package/use-reading-time"><img alt="npm" src="https://img.shields.io/npm/v/use-reading-time"></a> <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide" /></a>
  </p>
  <p align="center">
    <a href="https://diogomoretti.github.io/use-reading-time/"><h4 align="center">View demo ➔</h4></a>
  </p>
</p>
<br>

## Install

#### Using Yarn:

```bash
yarn add use-reading-time
```

#### Using NPM:

```bash
npm install --save use-reading-time
```

## Usage

```jsx
import React, { useRef } from 'react'

import useReadingTime from 'use-reading-time'

const Example = () => {
  const post = useRef()
  const [readingTime, words] = useReadingTime(post)

  return (
    <div>
      {readingTime} min • {words} words

      // You'll need to use `forwardRef` in this case
      <Post ref={post} />
    </div>
  )
}
```

## License

MIT © [diogomoretti](https://github.com/diogomoretti)
