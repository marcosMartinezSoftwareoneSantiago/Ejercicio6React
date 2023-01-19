import { useState } from "react";

const textIncreaseButton = "Aumentar";
const textDecreaseButton = "Disminuir";
const textResetButton = "Reset";

export const Counter = () =>
{
    const [number, setNumber] = useState(0)

    const increase = () =>{
        setNumber(number + 1 );
    }
    const decrease = () =>{
        setNumber(number - 1 );
    }
    const reset = () =>{
        setNumber(0);
    }

    return(
        <>
            <div>
                {number}
            </div>
            
            <button onClick={increase} className="" >
                {textIncreaseButton}
            </button>
            <button onClick={decrease} className="" >
                {textDecreaseButton}
            </button>
            <button onClick={reset} className="" >
                {textResetButton}
            </button>
        </>
)};