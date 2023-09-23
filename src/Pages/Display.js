import React from 'react';
import '../Styles/Display.css';

export default function Display({ answer }) {    

  return (
    <div className="display-container">
      <div className="display-text">Guess the color</div>
      <div className="display-window" style={{backgroundColor: `${answer}`}}/>
    </div>
  )
}