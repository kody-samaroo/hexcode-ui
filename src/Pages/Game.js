import '../Styles/Game.css';
import React, { useState } from 'react';
import Display from './Display';
import Answers from './Answers';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Game() {
    const [showModal, setShowModal] = useState(false);
    const [guess, setGuess] = useState("");

    let choices = [];
    let answer = "";

    const hexcodeDigits = [
        "0","1","2","3","4","5","6","7","8","9",
        "A","B","C","D","E","F"
    ]
    
    const generateColor = () => {
        let hexcode = "#";
        while(hexcode.length < 7){
            hexcode += hexcodeDigits[Math.floor(Math.random() * 15)];
        }
        return hexcode;
    }  

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const answerHandler = (e) => {
        handleShow();
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
            <Display 
                answer={answer}
            />
            <Answers
                choices={choices}
                answer={answer}
                answerHandler={answerHandler}
            />
            <Modal 
            show={showModal} 
            onHide={handleClose}
            backdrop={true}
            keyboard={false}
            >
            <Modal.Header closeButton>
                { answer === guess ? "Correct" : "Incorrect" }
            </Modal.Header>
            <Modal.Body>
                <div className="guess-body">
                    <div className="guess-square" style={{background: `${guess}`}}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Next question
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}
