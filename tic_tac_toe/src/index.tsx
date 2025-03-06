import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BoardProvider } from './context/boardContext';
import { PlayerProvider } from './context/playerContext';
import { GamesProvider } from './context/gameContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GamesProvider>
      <PlayerProvider>
        <BoardProvider>
          <App />
        </BoardProvider>
      </PlayerProvider>
    </GamesProvider>
  </React.StrictMode>
);
