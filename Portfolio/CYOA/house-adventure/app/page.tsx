'use client'

import React from 'react'
import { buttonBasic } from './code/playground';

const testContent = {
  content: "click me",
  name: "basicButton",
  // type: button",
  value: "basicButton",
  disabled: false
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>Hello World</p>
        {buttonBasic(testContent)}
      </div>
    </main>
  );
}
