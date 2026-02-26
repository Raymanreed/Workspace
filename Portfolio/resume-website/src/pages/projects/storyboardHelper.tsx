import { useState } from "react";

function StoryboardTool() {
    // const [generatedElements, setGeneratedElements] = useState()  
    const generatedNumbers: number[] = []
    const displayArray: any[] = []

    const generateNewPortion = () => {
        (function(n) {
            return function() {
                n+=1;
                return generatedNumbers.push(n);
            }
        }(0))
        const areaWithSelect = (
            <div>
                <textarea name={`textarea-${generatedNumbers.at(-1)}`} rows={8} cols={30} wrap="soft" />
            </div>
        );
        console.log("running")
        displayArray.push(areaWithSelect)
        return areaWithSelect;
    };
    console.log(displayArray)

    return(
        <div>
            <button onClick={() => generateNewPortion()}>Generate!</button>
            <div>
                {displayArray}
            </div>
        </div>
    );
};

export default StoryboardTool;