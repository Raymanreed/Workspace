'use client'

import React from 'react'
import { HouseAdventure } from './components/game';
import { generatedBasicButton } from './components/buttonGenerator';
import { generateButton } from './code/playground';

// const testContent = {
//   content: "click me",
//   name: "basicButton",
//   value: "basicButton",
//   disabled: false
// }

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>Hello World</p>
        {
          generatedBasicButton(testContent, () => {
            generateButton(testContent, () => {alert("you generated me!")})
          })
        }
      </div> */}
      <div>
        <HouseAdventure />
      </div>
    </main>
  );
}
