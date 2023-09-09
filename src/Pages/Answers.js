import React from 'react';
import '../Styles/Answers.css';

export default function Answers({ choices }) {



  return (
    <div className="answers-container">
        {choices.map(choice => (
            <div className="answer">{choice}</div>
        ))}
    </div>
  )
}
