import '../Styles/Start.css';
import { Link } from "react-router-dom";
import React from 'react';

export default function Start() {


  return (
    <div className="start-container">
      <Link to="/game" style={{textDecoration: "none"}}>
      <div className="start-button">
          Start
      </div>
      </Link>
      <br/>
      <Link to="/help" style={{textDecoration: "none"}}>
      <div className="help-button">
          About
      </div>
      </Link>
    </div>
  )
}
