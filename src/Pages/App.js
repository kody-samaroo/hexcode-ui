import '../Styles/App.css';
import React, { useState } from 'react';
import Display from './Display';
import Answers from './Answers';

function App() {
  const [hexcode, setHexcode] = useState("");

  return (
    <div className="App">
      <Display
        hexcode={hexcode}
        setHexcode={setHexcode}
      />
      <Answers
        hexcode={hexcode}
      />
    </div>
  );
}

export default App;
