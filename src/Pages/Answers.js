import React from 'react';
import '../Styles/Answers.css';

export default function Answers({ answer, choices, answerHandler }) {


  return (
    <div className="answers-container">
        {choices.map((choice, index) => (
            <div 
                className="answer"
                key={index} 
                onClick={(e) => answerHandler(e)}   
            >{choice}</div>
        ))}
    </div>
  )
}