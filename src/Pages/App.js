import '../Styles/App.css';
import React, { useState } from 'react';
import Display from './Display';
import Answers from './Answers';
import Start from './Start';

function App() {
  const [hexcode, setHexcode] = useState("");
  const [gameOn, setGameOn] = useState(false);

  return (
    <div className="App">
      <Start/>
      {/* <Display
        hexcode={hexcode}
        setHexcode={setHexcode}
      />
      <Answers
        hexcode={hexcode}
      /> */}
    </div>
  );
}

export default App;
