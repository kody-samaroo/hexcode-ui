import React, { useState, useEffect } from 'react';
import '../Styles/Display.css';

export default function Display({ gameOn, setGameOn, choices}) {

    const restartHandler = () => {
        setGameOn(!gameOn);
        choices = [];
    }
    
  return (
    <div className="display-container">
        <div className="display-window" style={{backgroundColor: choices[0]}}/><br/>
        <button className="display-button" onClick={()=>{setGameOn(!gameOn)}}>Restart</button>
    </div>
  )
}