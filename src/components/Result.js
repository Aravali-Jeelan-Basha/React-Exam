import React, { useState } from 'react';

function Result() {
    const [colour1, setColour] = useState("red");
     
    const data = () => {
        if (colour1 === "red") {
            setColour("orange");
        } else {
            setColour("red");
            console.log("Hello");
        }
    };
    
    return (
        <div style={{ backgroundColor: colour1,fontSize:"30px"}}>
            <p style={{ backgroundColor: colour1 }}>The current theme is {colour1}</p>
            <button onClick={data}>Toggle Theme</button>
        </div>
    );
}

export default Result;
