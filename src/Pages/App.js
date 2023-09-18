import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import Game from './Game';
import Result from './Result';

function App() {
                                        
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="game" element={<Game/>} />
        <Route path="result" element={<Result/>}/>
      </Routes>
    </Router>
  );
}

export default App;
