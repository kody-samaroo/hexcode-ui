import '../Styles/App.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Display from './Display';
import Answers from './Answers';
import Start from './Start';

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hexcodeDigits = [
    "0","1","2","3","4","5","6","7","8","9",
    "A","B","C","D","E","F"
  ]

  let choices = [];
  let answer = "";

  const generateColor = () => {
    let red = hexcodeDigits[Math.floor(Math.random() * 15)] + hexcodeDigits[Math.floor(Math.random() * 15)];
    let green = hexcodeDigits[Math.floor(Math.random() * 15)] + hexcodeDigits[Math.floor(Math.random() * 15)];
    let blue = hexcodeDigits[Math.floor(Math.random() * 15)] + hexcodeDigits[Math.floor(Math.random() * 15)];
    let hexcode = "#"+red+green+blue;
    choices.push(hexcode);
  }
  
  while(choices.length < 4) {
    generateColor();
  }

  if(choices.length === 4){
    answer = choices[Math.floor(Math.random() * 5)]
  }

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const answerHandler = (e) => {
    handleShow();
  }
                                        
  return (
    <div className="app">
      {gameOn ?
      <div className="game-container">
        <Display
          gameOn={gameOn}
          setGameOn={setGameOn}
          choices={choices}
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
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
            I will not close if you click outside me. Don not even try to press
            escape key.
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">
                Understood
              </Button>
          </Modal.Footer>
        </Modal>
      </div>
      :
      <div className="start-container">
        <Start
          gameOn={gameOn}
          setGameOn={setGameOn}
        />
      </div>
      }
    </div>
  );
}

export default App;
