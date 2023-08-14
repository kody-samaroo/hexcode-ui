import '../Styles/App.css';
import React, { useState } from 'react';
import Display from './Display';

function App() {
  const [hexcode, setHexcode] = useState("");

  return (
    <div className="App">
      <Display
        hexcode = {hexcode}
        setHexcode = {setHexcode}
      />
    </div>
  );
}

export default App;
