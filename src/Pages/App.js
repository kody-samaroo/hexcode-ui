import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import Game from './Game';
import Result from './Result';
import Help from './Help';

function App() {
                                        
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="game" element={<Game/>} />
        <Route path="result" element={<Result/>}/>
        <Route path="help" element={<Help/>}/>
      </Routes>
    </Router>
  );
}

export default App;
