

export function getPlayerOneAttacks(pieceKey: string, originalPositionKey: string): string {
  const [rowKey, position] = pieceKey.split('')
  let newMoves: string = ''

  switch(rowKey.toUpperCase()) {
    case 'A':
      console.log('NOTE: CANT ATTACK WHEN A PIECE IS IN H')
      break;
    case 'B':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'C1' ? 'A3' : 'A1'
          break;
        case 3:
          newMoves = originalPositionKey === 'C2' ? 'A4' : 'A2'
          break;
        case 4:
          newMoves = originalPositionKey === 'C3' ? 'A5' : 'A3'
          break;
        case 5:
          newMoves = originalPositionKey === 'C4' ? 'A6' : 'A4'
          break;
        case 6:
          newMoves = originalPositionKey === 'C5' ? 'A7' : 'A5'
          break;
        case 7:
          newMoves = originalPositionKey === 'C6' ? 'A8' : 'A6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'C':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'D1' ? 'B3' : 'B1'
          break;
        case 3:
          newMoves = originalPositionKey === 'D2' ? 'B4' : 'B2'
          break;
        case 4:
          newMoves = originalPositionKey === 'D3' ? 'B5' : 'B3'
          break;
        case 5:
          newMoves = originalPositionKey === 'D4' ? 'B6' : 'B4'
          break;
        case 6:
          newMoves = originalPositionKey === 'D5' ? 'B7' : 'B5'
          break;
        case 7:
          newMoves = originalPositionKey === 'D6' ? 'B8' : 'B6'
          break;
        default:
          console.log('no valid')
          break
      }
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
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'F1' ? 'D3' : 'D1'
          break;
        case 3:
          newMoves = originalPositionKey === 'F2' ? 'D4' : 'D2'
          break;
        case 4:
          newMoves = originalPositionKey === 'F3' ? 'D5' : 'D3'
          break;
        case 5:
          newMoves = originalPositionKey === 'F4' ? 'D6' : 'D4'
          break;
        case 6:
          newMoves = originalPositionKey === 'F5' ? 'D7' : 'D5'
          break;
        case 7:
          newMoves = originalPositionKey === 'F6' ? 'D8' : 'D6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'F':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'G1' ? 'E3' : 'E1'
          break;
        case 3:
          newMoves = originalPositionKey === 'G2' ? 'E4' : 'E2'
          break;
        case 4:
          newMoves = originalPositionKey === 'G3' ? 'E5' : 'E3'
          break;
        case 5:
          newMoves = originalPositionKey === 'G4' ? 'E6' : 'E4'
          break;
        case 6:
          newMoves = originalPositionKey === 'G5' ? 'E7' : 'E5'
          break;
        case 7:
          newMoves = originalPositionKey === 'G6' ? 'E8' : 'E6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'G':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'H1' ? 'F3' : 'F1'
          break;
        case 3:
          newMoves = originalPositionKey === 'H2' ? 'F4' : 'F2'
          break;
        case 4:
          newMoves = originalPositionKey === 'H3' ? 'F5' : 'F3'
          break;
        case 5:
          newMoves = originalPositionKey === 'H4' ? 'F6' : 'F4'
          break;
        case 6:
          newMoves = originalPositionKey === 'H5' ? 'F7' : 'F5'
          break;
        case 7:
          newMoves = originalPositionKey === 'H6' ? 'F8' : 'F6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'H':
      console.log('NOTE: No moves happen here')
      break
  }

  return newMoves
}

export function getPlayerTwoAttacks(pieceKey: string, originalPositionKey: string): string {
  const [rowKey, position] = pieceKey.split('')
  let newMoves: string = ''

  switch(rowKey.toUpperCase()) {
    case 'A':
      console.log('NOTE: No moves happen here')
      break;
    case 'B':
      switch(Number(position)) {
        case 1:
        case 8:
          break; // TODO: probably need to have this as a null
        case 2:
          newMoves = originalPositionKey === 'A1' ? 'C3' : 'C1'
          break;
        case 3:
          newMoves = originalPositionKey === 'A2' ? 'C4' : 'C2'
          break;
        case 4:
          newMoves = originalPositionKey === 'A3' ? 'C5' : 'C3'
          break;
        case 5:
          newMoves = originalPositionKey === 'A4' ? 'C6' : 'C4'
          break;
        case 6:
          newMoves = originalPositionKey === 'A5' ? 'C7' : 'C5'
          break;
        case 7:
          newMoves = originalPositionKey === 'A6' ? 'C8' : 'C6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'C':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'B1' ? 'D3' : 'D1'
          break;
        case 3:
          newMoves = originalPositionKey === 'B2' ? 'D4' : 'D2'
          break;
        case 4:
          console.log('HERE HERE')
          console.log('originalPositionKey', originalPositionKey)
          newMoves = originalPositionKey === 'B3' ? 'D5' : 'D3'
          break;
        case 5:
          newMoves = originalPositionKey === 'B4' ? 'D6' : 'D4'
          break;
        case 6:
          newMoves = originalPositionKey === 'B5' ? 'D7' : 'D5'
          break;
        case 7:
          newMoves = originalPositionKey === 'B6' ? 'D8' : 'D6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'D':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'C1' ? 'E3' : 'E1'
          break;
        case 3:
          newMoves = originalPositionKey === 'C2' ? 'E4' : 'E2'
          break;
        case 4:
          newMoves = originalPositionKey === 'C3' ? 'E5' : 'E3'
          break;
        case 5:
          newMoves = originalPositionKey === 'C4' ? 'E6' : 'E4'
          break;
        case 6:
          newMoves = originalPositionKey === 'C5' ? 'E7' : 'E5'
          break;
        case 7:
          newMoves = originalPositionKey === 'C6' ? 'E8' : 'E6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'E':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'D1' ? 'F3' : 'F1'
          break;
        case 3:
          newMoves = originalPositionKey === 'D2' ? 'F4' : 'F2'
          break;
        case 4:
          newMoves = originalPositionKey === 'D3' ? 'F5' : 'F3'
          break;
        case 5:
          newMoves = originalPositionKey === 'D4' ? 'F6' : 'F4'
          break;
        case 6:
          newMoves = originalPositionKey === 'D5' ? 'F7' : 'F5'
          break;
        case 7:
          newMoves = originalPositionKey === 'D6' ? 'F8' : 'F6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'F':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'E1' ? 'G3' : 'G1'
          break;
        case 3:
          newMoves = originalPositionKey === 'E2' ? 'G4' : 'G2'
          break;
        case 4:
          newMoves = originalPositionKey === 'E3' ? 'G5' : 'G3'
          break;
        case 5:
          newMoves = originalPositionKey === 'E4' ? 'G6' : 'G4'
          break;
        case 6:
          newMoves = originalPositionKey === 'E5' ? 'G7' : 'G5'
          break;
        case 7:
          newMoves = originalPositionKey === 'E6' ? 'G8' : 'G6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'G':
      switch(Number(position)) {
        case 1:
        case 8:
          break;
        case 2:
          newMoves = originalPositionKey === 'F1' ? 'H3' : 'H1'
          break;
        case 3:
          newMoves = originalPositionKey === 'F2' ? 'H4' : 'H2'
          break;
        case 4:
          newMoves = originalPositionKey === 'F3' ? 'H5' : 'H3'
          break;
        case 5:
          newMoves = originalPositionKey === 'F4' ? 'H6' : 'H4'
          break;
        case 6:
          newMoves = originalPositionKey === 'F5' ? 'H7' : 'H5'
          break;
        case 7:
          newMoves = originalPositionKey === 'F6' ? 'H8' : 'H6'
          break;
        default:
          console.log('no valid')
          break
      }
      break
    case 'H':
      alert('NOTE: CANT ATTACK WHEN A PIECE IS IN H')
      break
  }

  return newMoves
}