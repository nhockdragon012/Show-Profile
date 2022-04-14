import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ToggleContext from './components/ToggleContext'
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render (
  <React.StrictMode>
    <ToggleContext>
      <App />
    </ToggleContext>
  </React.StrictMode>
)