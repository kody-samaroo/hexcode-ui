import '../Styles/App.css';
import React, { useEffect, useState } from 'react';
import Display from './Display';
import Answers from './Answers';
import Start from './Start';

function App() {
  const [hexcode, setHexcode] = useState("");
  const [gameOn, setGameOn] = useState(false);

  const hexcodeDigits = [
    "0","1","2","3","4","5","6","7","8","9",
    "A","B","C","D","E","F"
  ]

  let choices = [];

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

  return (
    <div className="app">
      {gameOn ?
      <div className="game-container">
        <Display
          gameOn={gameOn}
          setGameOn={setGameOn}
          choices={choices}
        />
        <Answers
          choices={choices}
        />
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
