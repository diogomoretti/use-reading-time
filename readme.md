<p align="center">
  <img src="https://user-images.githubusercontent.com/2853428/85798175-667dbf00-b713-11ea-8e5e-30ed45470c37.png" width="500">
  <p align="center">Description here</p>
  <p align="center">
    <a href="https://www.npmjs.com/package/use-reading-time"><img alt="npm" src="https://img.shields.io/npm/v/use-reading-time?style=for-the-badge"></a> <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge" alt="JavaScript Style Guide" /></a>
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
import React, { Component } from 'react'

import useReadingTime from 'use-reading-time'

const Example = () => {
  const post = useRef()
  const [readingTime, words] = useReadingTime(post)
  
  return (
    <div>
      <p>
        {readingTime} min • {words} words
      </p>
      
      // You need to use `forwardingRef` for this case
      <Post ref={post} />
    </div>
  )
}
```

## License

MIT © [diogomoretti](https://github.com/diogomoretti)
