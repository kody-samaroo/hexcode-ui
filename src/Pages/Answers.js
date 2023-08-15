import React from 'react';
import '../Styles/Answers.css';

export default function Answers({ hexcode }) {

    const answers = [];

    const hexcodeDigits = [
        "0","1","2","3","4","5","6","7","8","9",
        "A","B","C","D","E","F"
    ]
    
    const generateHexcodes = () => {
        let red = hexcodeDigits[Math.floor(Math.random() * 15)] + hexcodeDigits[Math.floor(Math.random() * 15)];
        let green = hexcodeDigits[Math.floor(Math.random() * 15)] + hexcodeDigits[Math.floor(Math.random() * 15)];
        let blue = hexcodeDigits[Math.floor(Math.random() * 15)] + hexcodeDigits[Math.floor(Math.random() * 15)];
        return "#"+red+green+blue;
    }



  return (
    <div className="parent">
        <div className="child">Test</div>
        <div className="child">Test</div>
        <div className="child">Test</div>
        <div className="child">Test</div>
    </div>
  )
}
