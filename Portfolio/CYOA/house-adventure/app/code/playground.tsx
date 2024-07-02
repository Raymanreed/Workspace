'use client'

interface buttonTestContent {
    content: any
    name: string
    // type: "submit" | "reset" | "button" | undefined
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


const generateButton = (someFunction: Function) => {

}