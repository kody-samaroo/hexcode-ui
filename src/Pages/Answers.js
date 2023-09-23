import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Answers.css';

export default function Answers({ choices, answer }) {

    return (
        <div className="answers-container">
            {choices.map((choice, index) => (
                <Link to="/result" style={{textDecoration: "none"}}key={index} state={{ choice: choice, answer: answer }}>
                    <div className="answer-button">
                    {choice}</div>
                </Link>
            ))}
        </div>
    )
}