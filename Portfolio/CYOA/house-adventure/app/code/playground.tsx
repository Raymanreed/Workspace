'use client'

import { generatedBasicButton } from "../components/buttonGenerator"

interface buttonTestContent {
    content: any
    name: string
    value: any
    // onClick(): any
    disabled?: boolean
  }

export const buttonBasic = (testContent: buttonTestContent) => {
    const handleClick = () => {
        alert("you Clicked me!")
    }
    const generatedButton = (
        <button
            name={testContent?.name}
            // type={testContent?.type}
            value={testContent?.value}
            disabled={testContent?.disabled}
            onClick={handleClick}
        >
            {testContent?.content}
        </button>
    );

    return generatedButton;
}

export const basicClick = () => {
    return alert("You Clicked Me!")
}


export const generateButton = (buttonContent: any, handleClick: any) => {
    console.log("Generating button")
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p>Hello World</p>
            {generatedBasicButton(buttonContent, handleClick)}
        </div>
    )
}