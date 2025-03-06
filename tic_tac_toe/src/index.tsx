import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BoardProvider } from './context/boardContext';
import { PlayerProvider } from './context/playerContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PlayerProvider>
      <BoardProvider>
        <App />
      </BoardProvider>
    </PlayerProvider>
  </React.StrictMode>
);
