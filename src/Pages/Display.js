import React, { useState } from 'react';
import '../Styles/Box.css';

export default function Display() {
    const [red, setRed] = useState("");
    const [green, setGreen] = useState("");
    const [blue, setBlue] = useState("");
    const [hexcode, setHexcode] = useState("");

    const arrayOfDigits = [
        "0","1","2","3","4","5","6","7","8","9",
        "A","B","C","D","E","F"
    ]

    const generateColor = () => {
        setRed(arrayOfDigits[Math.floor(Math.random() * 15)] + arrayOfDigits[Math.floor(Math.random() * 15)]);
        setGreen(arrayOfDigits[Math.floor(Math.random() * 15)] + arrayOfDigits[Math.floor(Math.random() * 15)]);
        setBlue(arrayOfDigits[Math.floor(Math.random() * 15)] + arrayOfDigits[Math.floor(Math.random() * 15)]);
        setHexcode("#"+red+green+blue);
    }

  return (
    <div>
        <div className="Box" style={{backgroundColor: hexcode}}/>
        <button onClick={generateColor}>Generate</button>
    </div>
  )
}
