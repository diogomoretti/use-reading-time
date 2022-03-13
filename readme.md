<p align="center">
  <img src="https://user-images.githubusercontent.com/2853428/88489869-a67fce00-cf6d-11ea-871f-76fb53cae2b2.png" width="500">
  <p align="center"><em>A react hook to show in how many time that content could be read</em></p>
  <p align="center">
    <a href="https://www.npmjs.com/package/use-reading-time"><img alt="npm" src="https://img.shields.io/npm/v/use-reading-time"></a> <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide" /></a>
  <a href="https://github.com/diogomoretti/use-reading-time/actions"><img src="https://github.com/diogomoretti/use-reading-time/actions/workflows/test.yml/badge.svg" /></a>
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
import Post from './post'

import useReadingTime from 'use-reading-time'

const Example = () => {
  const post = useRef()
  const {readingTime, wordsCount} = useReadingTime(post)

  return (
    <div>
      {readingTime} min • {wordsCount} words

      // You'll need to use `forwardRef` in this case
      <Post ref={post} />
    </div>
  )
}
```

## Options/Params
```jsx
useReadingTime(reference, wordsPerMinute)
```

| Argument  | Description | Type | Default | Required |
| --------- | ----------- | ---- | ------- | -------- |
`reference` | A React ref object | `Object` | – | Yes
`wordsPerMinute` | Number of words we can read per minute | `Number` | 260 ([Source](https://www.sciencedirect.com/science/article/pii/S0749596X19300786)) | No

## License

MIT © [diogomoretti](https://github.com/diogomoretti)
