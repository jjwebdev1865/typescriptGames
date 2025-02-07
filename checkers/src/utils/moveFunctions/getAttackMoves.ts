

export function getPlayerOneAttacks(pieceKey: string, originalPositionKey: string): string {
  console.log('pieceKey', pieceKey)
  const [rowKey, position] = pieceKey.split('')
  let newMoves: string = ''

  switch(rowKey.toUpperCase()) {
    case 'A':
      console.log('a attack')
      break;
    case 'B':
      console.log('b attack')
      break
    case 'C':
      console.log('c attack')
      break
    case 'D':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'E1' ? 'C3' : 'C1'
          break;
        case 3:
          newMoves = originalPositionKey === 'E2' ? 'C4' : 'C2'
          break;
        case 4:
          newMoves = originalPositionKey === 'E3' ? 'C5' : 'C3'
          break;
        case 5:
          newMoves = originalPositionKey === 'E4' ? 'C6' : 'C4'
          break;
        case 6:
          newMoves = originalPositionKey === 'E5' ? 'C7' : 'C5'
          break;
        case 7:
          newMoves = originalPositionKey === 'E6' ? 'C8' : 'C6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'E':
      console.log('e attack')
      break
    case 'F':
      console.log('f attack')
      break
    case 'G':
      console.log('g attack')
      break
    case 'H':
      console.log('h attack')
      break
  }

  console.log('newMoves', newMoves)
  return newMoves
}