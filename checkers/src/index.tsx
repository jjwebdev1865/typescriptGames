import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GameProvider } from './context/gameContext';
import { MovesProvider } from './context/movesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameProvider>
      <MovesProvider>
        <App />
      </MovesProvider>
    </GameProvider>
  </React.StrictMode>
);

