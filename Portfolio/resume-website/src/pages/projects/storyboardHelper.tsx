import { useState } from "react";

function StoryboardTool() {
    const [generatedElements, setGeneratedElements] = useState<number[]>([])  

    const generateNewPortion = () => {
        const generatedNumbers: number[] = [];
        let tally = 0;
        ++tally
        console.log("running")
        generatedNumbers.push(tally)
        console.log(generatedNumbers)
        return setGeneratedElements(generatedNumbers);
    };
    return (
        <div>
            <button onClick={generateNewPortion}>Generate!</button>
            <div>
                {generatedElements.map((num) =>
                    <h2>{num}</h2>
                )}
            </div>
        </div>
    );
};

export default StoryboardTool;