import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PlayersProvider } from './context/players.context';
import { GameProvider } from './context/game.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameProvider>
      <PlayersProvider>
        <App />
      </PlayersProvider>
    </GameProvider>
    
  </React.StrictMode>
);