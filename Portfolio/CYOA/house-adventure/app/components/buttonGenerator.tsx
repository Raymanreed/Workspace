interface ButtonContent {
    content: any
    name: string
    value: any
    disabled?: boolean
}

const buttonBasic = (buttonContent: ButtonContent, clickHandler: any) => {
    const handleClick = () => {
        alert("you Clicked me!")
    }

    return (
        <button
            name={buttonContent?.name}
            value={buttonContent?.value}
            disabled={buttonContent?.disabled}
            onClick={clickHandler}
        >
            {buttonContent?.content}
        </button>
    );;
}

export const generatedBasicButton = buttonBasic;