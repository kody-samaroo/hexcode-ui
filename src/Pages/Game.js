import '../Styles/Game.css';
import { Link } from "react-router-dom";
import React from 'react';
import Display from './Display';
import Answers from './Answers';
import Timer from './Timer';


export default function Game() {
    const hexcodeDigits = [
        "0","1","2","3","4","5","6","7","8","9",
        "A","B","C","D","E","F"
    ];
    let choices = [];
    let answer = "";
    
    const generateColor = () => {
        let hexcode = "#";
        while(hexcode.length < 7){
            hexcode += hexcodeDigits[Math.floor(Math.random() * 15)];
        }
        return hexcode;
    }

    const loadGame = () => {
        while(choices.length < 4){
            choices.push(generateColor());
        }
        answer = choices[Math.floor(Math.random() * 4)];
        return {answer, choices};
    }

    loadGame();

    return (
        <div className="game-container">
            <Timer
                answer={answer}
            />
            <Link to="/help">
                <button className="about-button">?</button>
            </Link>
            <Display 
                answer={answer}
            />
            <Answers
                choices={choices}
                answer={answer}
            />
        </div>
    )
}