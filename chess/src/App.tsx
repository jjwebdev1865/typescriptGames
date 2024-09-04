import React, { useContext } from 'react';
import { ChessBoard } from './components/chessBoard';
import { GameContext } from './context/game.context';
import { PlayersContext } from './context/players.context';
import { MovesTile } from './components/movesTile';
import { Graveyard } from './components/graveyard';

function App() {
  const { playerTurn } = useContext(GameContext)
  const { playerOne, playerTwo, loading} = useContext(PlayersContext)

  if (loading) {
    return <div>Loading</div>
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '0', fontSize: '1rem'}}>Jims Chess Board</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 12%'}}>
        <div style={{display: 'flex'}}>
          <p style={{ fontWeight: 'bold', marginLeft: '10%'}}>index:</p>
          <p style={{ color: 'red', whiteSpace: 'nowrap'}}>Player One</p>
          <p style={{ padding: '0 24px'}}>|</p>
          <p style={{ color: 'blue', whiteSpace: 'nowrap'}}>Player Two</p>
        </div>

        <div style={{ textAlign: 'center', padding: '0'}}>
          <p>player turn: {playerTurn}</p>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '2.5%'}}>
        <Graveyard player={playerOne} />
        <ChessBoard />
        <Graveyard player={playerTwo} />
      </div>
        <div style={{ display: 'flex', paddingLeft: '12.5%', alignContent: 'center'}}>
          <div>
            <p style={{ fontWeight: 'bold', paddingRight: '10px'}}>Move Options: </p>
          </div>
          <div style={{marginTop: '16px'}}>
            {playerTurn === 'p1' ? (
              <MovesTile player={playerOne} />
            ) : (
              <div>p2 turn</div>
            )}
          </div>
        </div>
    </div>
  );
}

export default App;
