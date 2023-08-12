import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import Display from './Pages/Display';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Display />
  </React.StrictMode>
);