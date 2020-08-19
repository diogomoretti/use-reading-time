import React, { useRef, useState } from "react";
import { render } from "react-dom";
import useReadingTime from "./use-reading-time";

const speed = 200;

function App() {
  const page = useRef<HTMLDivElement>(null);
  const { readingTime, wordsCount } = useReadingTime(page, speed);

  return (
    <div ref={page}>
      <strong>
        {readingTime} <em>min</em> • {wordsCount} <em>words</em>
      </strong>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

render(<App />, document.body);
