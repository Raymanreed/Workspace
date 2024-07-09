'use client'

import React from 'react'
import { HouseAdventure } from './components/game';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="container mx-auto w-1/2">
        <HouseAdventure />
      </div>
    </main>
  );
}
