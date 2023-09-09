import '../Styles/App.css';
import React, { useState } from 'react';
import Display from './Display';
import Answers from './Answers';
import Start from './Start';

function App() {
  const [hexcode, setHexcode] = useState("");
  const [gameOn, setGameOn] = useState(false);

  return (
    <div className="app">
      {gameOn ?
      <div className="game-container">
        <Display
          gameOn={gameOn}
          setGameOn={setGameOn}
        />
        <Answers/>
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
