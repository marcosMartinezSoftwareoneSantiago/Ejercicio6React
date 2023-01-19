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
            <div className="d-flex justify-content-center"style={{height : "70px"}}>
                <div className="text-center text-white bg-dark w-25 h1">
                    {number}
                </div>
            </div>
            <br />
            <button onClick={increase} className="btn btn-light m-2" >
                {textIncreaseButton}
            </button>
            <button onClick={decrease} className="btn btn-light m-2" >
                {textDecreaseButton}
            </button>
            <button onClick={reset} className="btn btn-light m-2" >
                {textResetButton}
            </button>
        </>
)};