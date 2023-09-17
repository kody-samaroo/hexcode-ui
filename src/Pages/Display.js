import React from 'react';
import '../Styles/Display.css';

export default function Display({ answer }) {    

  
    return (
      <div className="display-container">
          <div className="display-window" style={{backgroundColor: `${answer}`}}/>
      </div>
    )
}