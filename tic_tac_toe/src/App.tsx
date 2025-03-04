import React from 'react';

function App() {

  return (
    <div className="App" style={{ textAlign: 'center'}}>
      <h1>Tic Tac Toe</h1>
      <h2>Goal is to incorporate AI to play against</h2>
      <h3>This is a best of 3 game</h3>

      <div >
        <ul style={{ listStyle: 'none', display: 'flex', margin: 0}}>
          <li style={{ padding: '25px', border: '1px solid black'}}>
            spot
          </li>
          <li style={{ padding: '25px', border: '1px solid black'}}>
            spot
          </li>
          <li style={{ padding: '25px', border: '1px solid black'}}>
            spot
          </li>
        </ul>
        <ul style={{ listStyle: 'none', display: 'flex', margin: 0}}>
          <li style={{ padding: '25px', border: '1px solid black'}}>
            spot
          </li>
          <li style={{ padding: '25px', border: '1px solid black'}}>
            spot
          </li>
          <li style={{ padding: '25px', border: '1px solid black'}}>
            spot
          </li>
        </ul>
        <ul style={{ listStyle: 'none', display: 'flex', margin: 0}}>
          <li style={{ padding: '25px', border: '1px solid black'}}>
            spot
          </li>
          <li style={{ padding: '25px', border: '1px solid black'}}>
            spot
          </li>
          <li style={{ padding: '25px', border: '1px solid black'}}>
            spot
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
