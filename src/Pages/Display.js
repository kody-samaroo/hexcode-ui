import React, { useState } from 'react';
import '../Styles/Display.css';

export default function Display({hexcode, setHexcode}) {
    const [red, setRed] = useState("");
    const [green, setGreen] = useState("");
    const [blue, setBlue] = useState("");

    const hexcodeDigits = [
        "0","1","2","3","4","5","6","7","8","9",
        "A","B","C","D","E","F"
    ]
    
    const generateColor = () => {
        setRed(hexcodeDigits[Math.floor(Math.random() * 15)] + hexcodeDigits[Math.floor(Math.random() * 15)]);
        setGreen(hexcodeDigits[Math.floor(Math.random() * 15)] + hexcodeDigits[Math.floor(Math.random() * 15)]);
        setBlue(hexcodeDigits[Math.floor(Math.random() * 15)] + hexcodeDigits[Math.floor(Math.random() * 15)]);
        setHexcode("#"+red+green+blue);
    }

  return (
    <div>
        <div className="container" style={{backgroundColor: hexcode}}/>
        <button onClick={generateColor}>Generate</button>
    </div>
  )
}
