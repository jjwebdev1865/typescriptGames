

export function getPawnMoves(position: string) {

  switch (position) {
    case 'A2':
      return ['A3']
    case 'B2':
      return ['B3']
    case 'C2':
      return ['C3']
    case 'D2':
      return ['D3']
    case 'E2':
      return ['E3']
    case 'F2':
      return ['F3']
    case 'G2':
      return ['G3']
    case 'H2':
      return ['H3']

    // Pawns Row 3
    case 'A3':
      return ['A4']
    case 'B3':
      return ['B4']
    case 'C3':
      return ['C4']
    case 'D3':
      return ['D4']
    case 'E3':
      return ['E4']
    case 'F3':
      return ['F4']
    case 'G3':
      return ['G4']
    case 'H3':
      return ['H4']

    // Pawns Row 4
    case 'A4':
      return ['A5']
    case 'B4':
      return ['B5']
    case 'C4':
      return ['C5']
    case 'D4':
      return ['D5']
    case 'E4':
      return ['E5']
    case 'F4':
      return ['F5']
    case 'G4':
      return ['G5']
    case 'H4':
      return ['H5']

    // Pawns Row 5
    case 'A5':
      return ['A6']
    case 'B5':
      return ['B6']
    case 'C5':
      return ['C6']
    case 'D5':
      return ['D6']
    case 'E5':
      return ['E6']
    case 'F5':
      return ['F6']
    case 'G5':
      return ['G6']
    case 'H5':
      return ['H6']
    
     // Pawns Row 6
     case 'A6':
      return ['A7']
    case 'B6':
      return ['B7']
    case 'C6':
      return ['C7']
    case 'D6':
      return ['D7']
    case 'E6':
      return ['E7']
    case 'F6':
      return ['F7']
    case 'G6':
      return ['G7']
    case 'H6':
      return ['H7']

    
    default: 
      return null
  }
}

export function getKnightMoves(position: string) {
  switch (position) {

    // Knights Row 1
    case 'A1':
      return ['C2', 'B3']
    case 'B1':
      return ['D2', 'A3', 'C3']
    case 'C1':
      return ['A2', 'E2', 'B3', 'D3']
    case 'D1':
      return ['B2', 'F2', 'C3', 'E3']
    case 'E1':
      return ['C2', 'G2', 'D3', 'F3']
    case 'F1':
      return ['D2', 'H2', 'E3', 'G3']
    case 'G1':
      return ['E2', 'F3', 'H3']
    case 'H1':
      return ['F2', 'G3']

    // Knights Row 2
    case 'A2':
      return ['C1', 'C3', 'B4']
    case 'B2':
      return ['D1', 'D3', 'C4', 'A4']
    case 'C2':
      return ['A1', 'E1', 'A3', 'E3', 'B4', 'D4']
    case 'D2':
      return ['B1', 'F1', 'B3', 'F3', 'C4', 'E4']
    case 'E2':
      return ['C1', 'G1', 'C3', 'G3', 'D4', 'F4']
    case 'F2':
      return ['D1', 'H1', 'D3', 'H3', 'E4', 'G4']
    case 'G2':
      return ['E1', 'E3', 'F4', 'H4']
    case 'H2':
      return ['F1', 'F3', 'G4']
    
    // Knights Row 3
    case 'A3':
      return ['B1', 'C2', 'C4', 'B5']
    case 'B3':
      return ['A1', 'C1', 'D2', 'D4', 'A5', 'C5']
    case 'C3':
      return ['B1', 'D1', 'A2', 'E2', 'A4', 'E4', 'B5', 'D5']
    case 'D3':
      return ['C1', 'E1', 'B2', 'F2', 'B4', 'F4', 'C5', 'E5']
    case 'E3':
      return ['D1', 'F1', 'C2', 'G2', 'C4', 'G4', 'D5', 'F5']
    case 'F3':
      return ['E1', 'G1', 'D2', 'H2', 'D4', 'H4', 'E5', 'G5']
    case 'G3':
      return ['F1', 'H1', 'E2', 'E4', 'F5', 'H5']
    case 'H3':
      return ['G1', 'F2', 'F4', 'G5']
    
    // Knights Row 4
    case 'A4':
      return ['B2', 'C3', 'C5', 'B6']
    case 'B4':
      return ['A2', 'C2', 'D3', 'D5', 'A6', 'C6']
    case 'C4':
      return ['B2', 'D2', 'A3', 'E3', 'A5', 'E5', 'B6', 'D6']
    case 'D4':
      return ['C2', 'E2', 'B3', 'F3', 'B5', 'F5', 'C6', 'E6']
    case 'E4':
      return ['D2', 'F2', 'C3', 'G3', 'C5', 'G5', 'D6', 'F6']
    case 'F4':
      return ['E2', 'G2', 'D3', 'H3', 'D5', 'H5', 'E6', 'G6']
    case 'G4':
      return ['F2', 'H2', 'E3', 'E5', 'F6', 'H6']
    case 'H4':
      return ['G2', 'F3', 'F5', 'G6']

    // Knights Row 5
    case 'A5':
      return ['B3', 'C4', 'C6', 'B7']
    case 'B5':
      return ['A3', 'C3', 'D4', 'D6', 'A7', 'C7']
    case 'C5':
      return ['B3', 'D3', 'A4', 'E4', 'A6', 'E6', 'B7', 'D7']
    case 'D5':
      return ['C3', 'E3', 'B4', 'F4', 'B6', 'F6', 'C7', 'E7']
    case 'E5':
      return ['D3', 'F3', 'C4', 'G4', 'C6', 'G6', 'D7', 'F7']
    case 'F5':
      return ['E3', 'G3', 'D4', 'H4', 'D6', 'H6', 'E7', 'G7']
    case 'G5':
      return ['F3', 'H3', 'E4', 'E6', 'F7', 'H7']
    case 'H5':
      return ['G3', 'F4', 'F6', 'G7']

    // Knights Row 6
    case 'A6':
      return ['B4', 'C5', 'C7', 'B8']
    case 'B6':
      return ['A4', 'C4', 'D5', 'D7', 'A7', 'C7']
    case 'C6':
      return ['B4', 'D4', 'A5', 'E5', 'A7', 'E7', 'B8', 'D8']
    case 'D6':
      return ['C4', 'E4', 'B5', 'F5', 'B7', 'F7', 'C8', 'E8']
    case 'E6':
      return ['D4', 'F4', 'C5', 'G5', 'C7', 'G7', 'D8', 'F8']
    case 'F6':
      return ['E4', 'G4', 'D5', 'H5', 'D7', 'H7', 'E8', 'G8']
    case 'G6':
      return ['F4', 'H4', 'E5', 'E7', 'F8', 'H8']
    case 'H6':
      return ['G4', 'F5', 'F7', 'G8']

    // Knights Row 7
    case 'A7':
      return ['B5', 'C6', 'C8']
    case 'B7':
      return ['A5', 'C5', 'D6', 'D8']
    case 'C7':
      return ['B5', 'D5', 'A6', 'E6', 'A8', 'E8']
    case 'D7':
      return ['C5', 'E5', 'B6', 'F6', 'B8', 'F8']
    case 'E7':
      return ['D5', 'F5', 'C6', 'G6', 'C8', 'G8']
    case 'F7':
      return ['E5', 'G5', 'D6', 'H6', 'D8', 'H8']
    case 'G7':
      return ['F5', 'H5', 'E6', 'E8']
    case 'H7':
      return ['G5', 'F6', 'F8']

    // Knights Row 8
    case 'A8':
      return ['B6', 'C7']
    case 'B8':
      return ['A6', 'C6', 'D7']
    case 'C8':
      return ['B6', 'D6', 'A7', 'E7']
    case 'D8':
      return ['C6', 'E6', 'B7', 'F7']
    case 'E8':
      return ['D6', 'F6', 'C7', 'G7']
    case 'F8':
      return ['E6', 'G6', 'D7', 'H7']
    case 'G8':
      return ['F6', 'H6', 'E7']
    case 'H8':
      return ['G6', 'F7']
  }
}