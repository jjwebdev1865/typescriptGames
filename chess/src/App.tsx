import React, { useContext } from 'react';
import { ChessBoard } from './components/chessBoard';
import { GameContext } from './context/game.context';
import { PlayersContext } from './context/players.context';
import { MovesTile } from './components/movesTile';

function App() {
  const { playerTurn } = useContext(GameContext)
  const { playerOne, handlePieceMove, loading} = useContext(PlayersContext)

  if (loading) {
    return <div>Loading</div>
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center'}}>Jims Chess Board</h1>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
        <ChessBoard />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 12%'}}>
        <div style={{display: 'flex'}}>
          <p style={{ fontWeight: 'bold', marginLeft: '10%'}}>index:</p>
          <p style={{ color: 'red', whiteSpace: 'nowrap'}}>Player One</p>
          <p style={{ padding: '0 24px'}}>|</p>
          <p style={{ color: 'blue', whiteSpace: 'nowrap'}}>Player Two</p>
        </div>

        <div style={{ textAlign: 'center', padding: '0'}}>
          <h2>Player moves</h2>
          <p>player turn: {playerTurn}</p>
        </div>

        <div style={{ textAlign: 'center', padding: '0'}}>
          <h2>Move Options</h2>
          <div>
            {playerTurn === 'p1' ? (
              <MovesTile player={playerOne} />
            ) : (
              <div>p2 turn</div>
            )}
          </div>
        </div>
        
      </div>

      
    </div>
  );
}

export default App;
