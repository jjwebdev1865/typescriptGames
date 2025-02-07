

export function getPlayerOneMoves(pieceKey: string): string[] {
  const [rowKey, position] = pieceKey.split('')
  let newMoves: string[] = []
  
  switch(rowKey.toUpperCase()) {
    case 'A':
      alert('TODO: top row for player one. need to set up king status')
      break;
    case 'B':
      switch(Number(position)) {
        case 1:
          newMoves = ['A2']
          break;
        case 2:
          newMoves = ['A1', 'A3']
          break;
        case 3:
          newMoves = ['A2', 'A4']
          break;
        case 4:
          newMoves = ['A3', 'A5']
          break;
        case 5:
          newMoves = ['A4', 'A6']
          break;
        case 6:
          newMoves = ['A5', 'A7']
          break;
        case 7:
          newMoves = ['A6', 'A8']
          break;
        case 8:
          newMoves = ['A7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'C':
      switch(Number(position)) {
        case 1:
          newMoves = ['B2']
          break;
        case 2:
          newMoves = ['B1', 'B3']
          break;
        case 3:
          newMoves = ['B2', 'B4']
          break;
        case 4:
          newMoves = ['B3', 'B5']
          break;
        case 5:
          newMoves = ['B4', 'B6']
          break;
        case 6:
          newMoves = ['B5', 'B7']
          break;
        case 7:
          newMoves = ['B6', 'B8']
          break;
        case 8:
          newMoves = ['B7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'D':
      switch(Number(position)) {
        case 1:
          newMoves = ['C2']
          break;
        case 2:
          newMoves = ['C1', 'C3']
          break;
        case 3:
          newMoves = ['C2', 'C4']
          break;
        case 4:
          newMoves = ['C3', 'C5']
          break;
        case 5:
          newMoves = ['C4', 'C6']
          break;
        case 6:
          newMoves = ['C5', 'C7']
          break;
        case 7:
          newMoves = ['C6', 'C8']
          break;
        case 8:
          newMoves = ['C7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'E':
      switch(Number(position)) {
        case 1:
          newMoves = ['D2']
          break;
        case 2:
          newMoves = ['D1', 'D3']
          break;
        case 3:
          newMoves = ['D2', 'D4']
          break;
        case 4:
          newMoves = ['D3', 'D5']
          break;
        case 5:
          newMoves = ['D4', 'D6']
          break;
        case 6:
          newMoves = ['D5', 'D7']
          break;
        case 7:
          newMoves = ['D6', 'D8']
          break;
        case 8:
          newMoves = ['D7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'F':
      switch(Number(position)) {
        case 1:
          newMoves = ['E2']
          break;
        case 2:
          newMoves = ['E1', 'E3']
          break;
        case 3:
          newMoves = ['E2', 'E4']
          break;
        case 4:
          newMoves = ['E3', 'E5']
          break;
        case 5:
          newMoves = ['E4', 'E6']
          break;
        case 6:
          newMoves = ['E5', 'E7']
          break;
        case 7:
          newMoves = ['E6', 'E8']
          break;
        case 8:
          newMoves = ['E7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'G':
      switch(Number(position)) {
        case 1:
          newMoves = ['F2']
          break;
        case 2:
          newMoves = ['F1', 'F3']
          break;
        case 3:
          newMoves = ['F2', 'F4']
          break;
        case 4:
          newMoves = ['F3', 'F5']
          break;
        case 5:
          newMoves = ['F4', 'F6']
          break;
        case 6:
          newMoves = ['F5', 'F7']
          break;
        case 7:
          newMoves = ['F6', 'F8']
          break;
        case 8:
          newMoves = ['F7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'H':
      switch(Number(position)) {
        case 1:
          newMoves = ['G2']
          break;
        case 2:
          newMoves = ['G1', 'G3']
          break;
        case 3:
          newMoves = ['G2', 'G4']
          break;
        case 4:
          newMoves = ['G3', 'G5']
          break;
        case 5:
          newMoves = ['G4', 'G6']
          break;
        case 6:
          newMoves = ['G5', 'G7']
          break;
        case 7:
          newMoves = ['G6', 'G8']
          break;
        case 8:
          newMoves = ['G7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    default:
      console.log('not valid')
  }

  return newMoves
}

export function getPlayerTwoMoves(pieceKey: string): string[] {
  const [rowKey, position] = pieceKey.split('')
  let newMoves: string[] = []
  
  switch(rowKey.toUpperCase()) {
    case 'A':
      switch(Number(position)) {
        case 1:
          newMoves = ['B2']
          break;
        case 2:
          newMoves = ['B1', 'B3']
          break;
        case 3:
          newMoves = ['B2', 'B4']
          break;
        case 4:
          newMoves = ['B3', 'B5']
          break;
        case 5:
          newMoves = ['B4', 'B6']
          break;
        case 6:
          newMoves = ['B5', 'B7']
          break;
        case 7:
          newMoves = ['B6', 'B8']
          break;
        case 8:
          newMoves = ['B7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'B':
      switch(Number(position)) {
        case 1:
          newMoves = ['C2']
          break;
        case 2:
          newMoves = ['C1', 'C3']
          break;
        case 3:
          newMoves = ['C2', 'C4']
          break;
        case 4:
          newMoves = ['C3', 'C5']
          break;
        case 5:
          newMoves = ['C4', 'C6']
          break;
        case 6:
          newMoves = ['C5', 'C7']
          break;
        case 7:
          newMoves = ['C6', 'C8']
          break;
        case 8:
          newMoves = ['C7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'C':
      switch(Number(position)) {
        case 1:
          newMoves = ['D2']
          break;
        case 2:
          newMoves = ['D1', 'D3']
          break;
        case 3:
          newMoves = ['D2', 'D4']
          break;
        case 4:
          newMoves = ['D3', 'D5']
          break;
        case 5:
          newMoves = ['D4', 'D6']
          break;
        case 6:
          newMoves = ['D5', 'D7']
          break;
        case 7:
          newMoves = ['D6', 'D8']
          break;
        case 8:
          newMoves = ['D7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'D':
      switch(Number(position)) {
        case 1:
          newMoves = ['E2']
          break;
        case 2:
          newMoves = ['E1', 'E3']
          break;
        case 3:
          newMoves = ['E2', 'E4']
          break;
        case 4:
          newMoves = ['E3', 'E5']
          break;
        case 5:
          newMoves = ['E4', 'E6']
          break;
        case 6:
          newMoves = ['E5', 'E7']
          break;
        case 7:
          newMoves = ['E6', 'E8']
          break;
        case 8:
          newMoves = ['E7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'E':
      switch(Number(position)) {
        case 1:
          newMoves = ['F2']
          break;
        case 2:
          newMoves = ['F1', 'F3']
          break;
        case 3:
          newMoves = ['F2', 'F4']
          break;
        case 4:
          newMoves = ['F3', 'F5']
          break;
        case 5:
          newMoves = ['F4', 'F6']
          break;
        case 6:
          newMoves = ['F5', 'F7']
          break;
        case 7:
          newMoves = ['F6', 'F8']
          break;
        case 8:
          newMoves = ['F7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'F':
      switch(Number(position)) {
        case 1:
          newMoves = ['G2']
          break;
        case 2:
          newMoves = ['G1', 'G3']
          break;
        case 3:
          newMoves = ['G2', 'G4']
          break;
        case 4:
          newMoves = ['G3', 'G5']
          break;
        case 5:
          newMoves = ['G4', 'G6']
          break;
        case 6:
          newMoves = ['G5', 'G7']
          break;
        case 7:
          newMoves = ['G6', 'G8']
          break;
        case 8:
          newMoves = ['G7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'G':
      switch(Number(position)) {
        case 1:
          newMoves = ['H2']
          break;
        case 2:
          newMoves = ['H1', 'H3']
          break;
        case 3:
          newMoves = ['H2', 'H4']
          break;
        case 4:
          newMoves = ['H3', 'H5']
          break;
        case 5:
          newMoves = ['H4', 'H6']
          break;
        case 6:
          newMoves = ['H5', 'H7']
          break;
        case 7:
          newMoves = ['H6', 'H8']
          break;
        case 8:
          newMoves = ['H7']
          break;
        default:
          console.log('no valid')
          break
      }
      break;
    case 'H':
      alert('TODO: top row for player one. need to set up king status')
      break;
    default:
      alert('NOT VALID')
  }

  return newMoves
}