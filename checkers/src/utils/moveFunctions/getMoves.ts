

export function getPlayerOneMoves(pieceKey: string): string[] {
  const [rowKey, position] = pieceKey.split('')
  let newMoves: string[] = []
  
  switch(rowKey.toUpperCase()) {
    case 'A':
      console.log('a')
      break;
    case 'B':
      console.log('b')
      break;
    case 'C':
      console.log('c')
      break;
    case 'D':
      console.log('d')
      break;
    case 'E':
      console.log('e')
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
      console.log('g')
      break;
    case 'H':
      console.log('h')
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
      console.log('a')
      break;
    case 'B':
      console.log('b')
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
      console.log('d')
      break;
    case 'E':
      console.log('e')
      break;
    case 'F':
      console.log('f')
      break;
    case 'G':
      console.log('g')
      break;
    case 'H':
      console.log('h')
      break;
    default:
      console.log('not valid')
  }

  return newMoves
}