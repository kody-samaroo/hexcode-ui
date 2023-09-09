import '../Styles/Start.css';
import React from 'react';

export default function Start({ gameOn, setGameOn }) {


  return (
    <div className="start-button" style={{color:"#1e9bff"}} onClick={()=>{setGameOn(!gameOn)}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Start
    </div>
  )
}
