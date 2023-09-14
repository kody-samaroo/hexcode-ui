import React from 'react';
import '../Styles/Display.css';

export default function Display({ gameOn, setGameOn, answer }) {

    const restartHandler = () => {
        setGameOn(!gameOn);
        answer = "";
    }
    
  return (
    <div className="display-container">
        <div className="display-window" style={{backgroundColor: answer}}/><br/>
        <button className="display-button" onClick={()=>{setGameOn(!gameOn)}}>Restart</button>
    </div>
  )
}