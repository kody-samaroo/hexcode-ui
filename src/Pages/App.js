import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import Game from './Game';

function App() {
                                        
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="game" element={<Game/>} />
      </Routes>
    </Router>
  );
}

export default App;
