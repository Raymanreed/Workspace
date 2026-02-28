import { useState } from "react";

const options = [
    { value: "andThen", label: "And then..."},
    { value: "but", label: "But..."},
    { value: "however", label: "However..." },
    { value: "end", label: "The End"}
]

function StoryboardTool() {
    const [generatedElements, setGeneratedElements] = useState<number[]>([1]);
    const savedSelectValues: any[] = [];

    const generateContinuation = () => {
        // @ts-expect-error
        const continuation = generatedElements.at(-1) + 1;
        setGeneratedElements(generatedElements => [...generatedElements, continuation]);
        return;
    }

    const handleSelectChoice = (event: any) => {
        savedSelectValues.push(event.target.value);
        return;
    };

    return (
        <div>
            <div>
                {generatedElements.map((num) =>
                    <>
                        <h2>{num}</h2>
                        <div>
                            <textarea rows={3} cols={50} id={`id-${num}`} />
                            <select value={ savedSelectValues[num]} onChange={handleSelectChoice}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                )}
                <button onClick={generateContinuation}>Continue</button>
            </div>
        </div>
    );
};

export default StoryboardTool;