import '../Styles/Game.css';
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
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

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Help
        </Tooltip>
      );

    loadGame();

    return (
        <div className="game-container">
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}>
            <Link to="/help">
                <button className="about-button">?</button>
            </Link>
            </OverlayTrigger>
            <Timer
                answer={answer}
            />
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
