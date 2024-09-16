

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

export function getRookMoves(position: string) {
  switch (position) {
    // Rook Row 1
    case 'A1':
      return ['A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1']
    case 'B1':
      return ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'A1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1']
    case 'C1':
      return ['C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'A1', 'B1', 'D1', 'E1', 'F1', 'G1', 'H1']
    case 'D1':
      return ['D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'A1', 'B1', 'C1', 'E1', 'F1', 'G1', 'H1']
    case 'E1':
      return ['E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'A1', 'B1', 'C1', 'D1', 'F1', 'G1', 'H1']
    case 'F1':
      return ['F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'A1', 'B1', 'C1', 'D1', 'E1', 'G1', 'H1']
    case 'G1':
      return ['G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'H1']
    case 'H1':
      return ['H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1']  

    // Rook Row 2
    case 'A2':
      return ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2']
    case 'B2':
      return ['B1', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'A2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2']
    case 'C2':
      return ['C1', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'A2', 'B2', 'D2', 'E2', 'F2', 'G2', 'H2']
    case 'D2':
      return ['D1', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'A2', 'B2', 'C2', 'E2', 'F2', 'G2', 'H2']
    case 'E2':
      return ['E1', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'A2', 'B2', 'C2', 'D2', 'F2', 'G2', 'H2']
    case 'F2':
      return ['F1', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'A2', 'B2', 'C2', 'D2', 'E2', 'G2', 'H2']
    case 'G2':
      return ['G1', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'H2']
    case 'H2':
      return ['H1', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2']
  
    // Rook Row 3
    case 'A3':
      return ['A1', 'A2', 'A4', 'A5', 'A6', 'A7', 'A8', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3']
    case 'B3':
      return ['B1', 'B2', 'B4', 'B5', 'B6', 'B7', 'B8', 'A3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3']
    case 'C3':
      return ['C1', 'C2', 'C4', 'C5', 'C6', 'C7', 'C8', 'A3', 'B3', 'D3', 'E3', 'F3', 'G3', 'H3']
    case 'D3':
      return ['D1', 'D2', 'D4', 'D5', 'D6', 'D7', 'D8', 'A3', 'B3', 'C3', 'E3', 'F3', 'G3', 'H3']
    case 'E3':
      return ['E1', 'E2', 'E4', 'E5', 'E6', 'E7', 'E8', 'A3', 'B3', 'C3', 'D3', 'F3', 'G3', 'H3']
    case 'F3':
      return ['F1', 'F2', 'F4', 'F5', 'F6', 'F7', 'F8', 'A3', 'B3', 'C3', 'D3', 'E3', 'G3', 'H3']
    case 'G3':
      return ['G1', 'G2', 'G4', 'G5', 'G6', 'G7', 'G8', 'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'H3']
    case 'H3':
      return ['H1', 'H2', 'H4', 'H5', 'H6', 'H7', 'H8', 'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3']
  
    // Rook Row 4
    case 'A4':
      return ['A1', 'A2', 'A3', 'A5', 'A6', 'A7', 'A8', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4']
    case 'B4':
      return ['B1', 'B2', 'B3', 'B5', 'B6', 'B7', 'B8', 'A4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4']
    case 'C4':
      return ['C1', 'C2', 'C3', 'C5', 'C6', 'C7', 'C8', 'A4', 'B4', 'D4', 'E4', 'F4', 'G4', 'H4']
    case 'D4':
      return ['D1', 'D2', 'D3', 'D5', 'D6', 'D7', 'D8', 'A4', 'B4', 'C4', 'E4', 'F4', 'G4', 'H4']
    case 'E4':
      return ['E1', 'E2', 'E3', 'E5', 'E6', 'E7', 'E8', 'A4', 'B4', 'C4', 'D4', 'F4', 'G4', 'H4']
    case 'F4':
      return ['F1', 'F2', 'F3', 'F5', 'F6', 'F7', 'F8', 'A4', 'B4', 'C4', 'D4', 'E4', 'G4', 'H4']
    case 'G4':
      return ['G1', 'G2', 'G3', 'G5', 'G6', 'G7', 'G8', 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'H4']
    case 'H4':
      return ['H1', 'H2', 'H3', 'H5', 'H6', 'H7', 'H8', 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4']
  
    // Rook Row 5
    case 'A5':
      return ['A1', 'A2', 'A3', 'A4', 'A6', 'A7', 'A8', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5']
    case 'B5':
      return ['B1', 'B2', 'B3', 'B4', 'B6', 'B7', 'B8', 'A5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5']
    case 'C5':
      return ['C1', 'C2', 'C3', 'C4', 'C6', 'C7', 'C8', 'A5', 'B5', 'D5', 'E5', 'F5', 'G5', 'H5']
    case 'D5':
      return ['D1', 'D2', 'D3', 'D4', 'D6', 'D7', 'D8', 'A5', 'B5', 'C5', 'E5', 'F5', 'G5', 'H5']
    case 'E5':
      return ['E1', 'E2', 'E3', 'E4', 'E6', 'E7', 'E8', 'A5', 'B5', 'C5', 'D5', 'F5', 'G5', 'H5']
    case 'F5':
      return ['F1', 'F2', 'F3', 'F4', 'F6', 'F7', 'F8', 'A5', 'B5', 'C5', 'D5', 'E5', 'G5', 'H5']
    case 'G5':
      return ['G1', 'G2', 'G3', 'G4', 'G6', 'G7', 'G8', 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'H5']
    case 'H5':
      return ['H1', 'H2', 'H3', 'H4', 'H6', 'H7', 'H8', 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5']

    // Rook Row 6
    case 'A6':
      return ['A1', 'A2', 'A3', 'A4', 'A5', 'A7', 'A8', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6']
    case 'B6':
      return ['B1', 'B2', 'B3', 'B4', 'B5', 'B7', 'B8', 'A6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6']
    case 'C6':
      return ['C1', 'C2', 'C3', 'C4', 'C5', 'C7', 'C8', 'A6', 'B6', 'D6', 'E6', 'F6', 'G6', 'H6']
    case 'D6':
      return ['D1', 'D2', 'D3', 'D4', 'D5', 'D7', 'D8', 'A6', 'B6', 'C6', 'E6', 'F6', 'G6', 'H6']
    case 'E6':
      return ['E1', 'E2', 'E3', 'E4', 'E5', 'E7', 'E8', 'A6', 'B6', 'C6', 'D6', 'F6', 'G6', 'H6']
    case 'F6':
      return ['F1', 'F2', 'F3', 'F4', 'F5', 'F7', 'F8', 'A6', 'B6', 'C6', 'D6', 'E6', 'G6', 'H6']
    case 'G6':
      return ['G1', 'G2', 'G3', 'G4', 'G5', 'G7', 'G8', 'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'H6']
    case 'H6':
      return ['H1', 'H2', 'H3', 'H4', 'H5', 'H7', 'H8', 'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6']
  
    // Rook Row 7
    case 'A7':
      return ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A8', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7']
    case 'B7':
      return ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B8', 'A7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7']
    case 'C7':
      return ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C8', 'A7', 'B7', 'D7', 'E7', 'F7', 'G7', 'H7']
    case 'D7':
      return ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D8', 'A7', 'B7', 'C7', 'E7', 'F7', 'G7', 'H7']
    case 'E7':
      return ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E8', 'A7', 'B7', 'C7', 'D7', 'F7', 'G7', 'H7']
    case 'F7':
      return ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F8', 'A7', 'B7', 'C7', 'D7', 'E7', 'G7', 'H7']
    case 'G7':
      return ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G8', 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'H7']
    case 'H7':
      return ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H8', 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7']
  
    // Rook Row 8
    case 'A8':
      return ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8']
    case 'B8':
      return ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'A8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8']
    case 'C8':
      return ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'A8', 'B8', 'D8', 'E8', 'F8', 'G8', 'H8']
    case 'D8':
      return ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'A8', 'B8', 'C8', 'E8', 'F8', 'G8', 'H8']
    case 'E8':
      return ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'A8', 'B8', 'C8', 'D8', 'F8', 'G8', 'H8']
    case 'F8':
      return ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'A8', 'B8', 'C8', 'D8', 'E8', 'G8', 'H8']
    case 'G8':
      return ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'H8']
    case 'H8':
      return ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8']
  }
}

export function getBishopMoves(position: string) {
  switch (position) {
    case 'A1':
      return ['B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8']
    case 'B1': 
      return ['A2', 'C2', 'D3', 'E4', 'F5', 'G6', 'H7']
    case 'C1':
      return ['B2', 'A3', 'D2', 'E3', 'F4', 'G5', 'H6']
    case 'D1': 
      return ['A4', 'B3', 'C2', 'E2', 'F3', 'G4', 'H5']
    case 'E1':
      return ['A5', 'B4', 'C3', 'D2', 'F2', 'G3', 'H4']
    case 'F1': 
      return ['A6', 'B5', 'C4', 'D3', 'E2', 'G2', 'H3']
    case 'G1': 
      return ['A7', 'B6', 'C5', 'D4', 'E3', 'F2', 'H2']
    case 'H1':
      return ['G2', 'F3', 'E4', 'D5', 'C6', 'B7', 'A8']
    
    // Bishop Row 2
    case 'A2': 
      return ['B1', 'B3', 'C4', 'D5', 'E6', 'F7', 'G8']
    case 'B2':
      return ['A1', 'A3', 'C1', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8']
    case 'C2': 
      return ['A4', 'B1', 'B3', 'D1', 'D3', 'E4', 'F5', 'G6', 'H7']
    case 'D2':
      return ['C1', 'C3', 'B4', 'A5', 'E1', 'E3', 'F4', 'G5', 'H6']
    case 'E2': 
      return ['A6', 'B5', 'C4', 'D1', 'D3', 'F1', 'F3', 'G4', 'H5']
    case 'F2': 
      return ['A7', 'B6', 'C5', 'D4', 'E1', 'E3', 'G1', 'G3', 'H4']
    case 'G2': 
      return ['A8', 'B7', 'C6', 'D5', 'E4', 'F1', 'F3', 'H1', 'H3']
    case 'H2': 
      return ['B8', 'C7', 'D6', 'E5', 'F4', 'G1', 'G3']

    // Bishop Row 3
    case 'A3':
      return ['B2', 'C1', 'B4', 'C5', 'D6', 'E7', 'F8']
    case 'B3': 
      return ['A2', 'A4', 'C2', 'C4', 'D1', 'D5', 'E6', 'F7', 'G8']
    case 'C3': 
      return ['A1', 'A5', 'B2', 'B4', 'D2', 'D4', 'E1', 'E5', 'F6', 'G7', 'H8']
    case 'D3': 
      return ['A6', 'B1', 'B5', 'C2', 'C4', 'E2', 'E4', 'F1', 'F5', 'G6', 'H7']
    case 'E3':
      return ['D2', 'C1', 'D4', 'C5', 'B6', 'A7', 'F2', 'G1', 'F4', 'G5', 'H6']
    case 'F3': 
      return ['A8', 'B7', 'C6', 'D1', 'D5', 'E2', 'E4', 'G2', 'G4', 'H1', 'H5']
    case 'G3': 
      return ['B8', 'C7', 'D6', 'E1', 'E5', 'F2', 'F4', 'H2', 'H4']
    case  'H3': 
      return ['C8', 'D7', 'E6', 'F1', 'F5', 'G2', 'G4']
    
    // Bishop Row 4
    case 'A4': 
      return ['B3', 'B5', 'C2', 'C6', 'D1', 'D7', 'E8']
    case 'B4': 
      return ['A3', 'A5', 'C3', 'C5', 'D2', 'D6', 'E1', 'E7', 'F8']
    case 'C4': 
      return ['A2', 'A6', 'B3', 'B5', 'D3', 'D5', 'E2', 'E6', 'F1', 'F7', 'G8']
    case 'D4': 
      return ['A1', 'A7', 'B2', 'B6', 'C3', 'C5', 'E3', 'E5', 'F2', 'F6', 'G1', 'G7', 'H8']
    case 'E4': 
      return ['A8', 'B1', 'B7', 'C2', 'C6', 'D3', 'D5', 'F3', 'F5', 'G2', 'G6', 'H1', 'H7']
    case 'F4':
      return ['E3', 'D2', 'C1', 'E5', 'D6', 'C7', 'B8', 'G3', 'H2', 'G5', 'H6']
    case 'G4': 
      return ['C8', 'D1', 'D7', 'E2', 'E6', 'F3', 'F5', 'H3', 'H5']
    case 'H4': 
      return ['D8', 'E1', 'E7', 'F2', 'F6', 'G3', 'G5']
    
    // Bishop Row 5
    case 'A5': 
      return['B4', 'B6', 'C3', 'C7', 'D2', 'D8', 'E1']
    case 'B5': 
      return['A4', 'A6', 'C4', 'C6', 'D3', 'D7', 'E2', 'E8', 'F1']
    case 'C5': 
      return ['A3', 'A7', 'B4', 'B6', 'D4', 'D6', 'E3', 'E7', 'F2', 'F8', 'G1']
    case 'D5': 
      return ['A2', 'A8', 'B3', 'B7', 'C4', 'C6', 'E4', 'E6', 'F3', 'F7', 'G2', 'G8', 'H1']
    case 'E5': 
      return ['A1', 'B2', 'B8', 'C3', 'C7', 'D4', 'D6', 'F4', 'F6', 'G3', 'G7', 'H2', 'H8']
    case 'F5': 
      return ['B1', 'C2', 'C8', 'D3', 'D7', 'E4', 'E6', 'G4', 'G6', 'H3', 'H7']
    case 'G5':
      return ['F4', 'E3', 'D2', 'C1', 'F6', 'E7', 'D8', 'H4', 'H6']
    case 'H5': 
      return ['D1', 'E2', 'E8', 'F3', 'F7', 'G4', 'G6']
    
    // Bishop Row 6
    case 'A6': 
      return ['B5', 'B7', 'C4', 'C8', 'D3', 'E2', 'F1']
    case 'B6': 
      return ['A5', 'A7', 'C5', 'C7', 'D4', 'D8', 'E3', 'F2', 'G1']
    case 'C6': 
      return ['A4', 'A8', 'B5', 'B7', 'D5', 'D7', 'E4', 'E8', 'F3', 'G2', 'H1']
    case 'D6': 
      return ['A3', 'B4', 'B8', 'C5', 'C7', 'E5', 'E7', 'F4', 'F8', 'G3', 'H2']
    case 'E6': 
      return ['A2', 'B3', 'C4', 'C8', 'D5', 'D7', 'F5', 'F7', 'G4', 'G8', 'H3']
    case 'F6': 
      return ['A1', 'B2', 'C3', 'D4', 'D8', 'E5', 'E7', 'G5', 'G7', 'H4', 'H8']
    case 'G6': 
      return ['B1', 'C2', 'D3', 'E4', 'E8', 'F5', 'F7', 'H5', 'H7']
    case 'H6':
      return ['G5', 'F4', 'E3', 'D2', 'C1', 'G7', 'F8']
    
    // Bishop Row 7
    case 'A7': 
      return ['B6', 'B8', 'C5', 'D4', 'E3', 'F2', 'G1']
    case 'B7': 
      return ['A6', 'A8', 'C6', 'C8', 'D5', 'E4', 'F3', 'G2', 'H1']
    case 'C7': 
      return ['A5', 'B6', 'B8', 'D6', 'D8', 'E5', 'F4', 'G3', 'H2']
    case 'D7': 
      return ['A4', 'B5', 'C6', 'C8', 'E6', 'E8', 'F5', 'G4', 'H3']
    case 'E7': 
      return ['A3', 'B4', 'C5', 'D6', 'D8', 'F6', 'F8', 'G5', 'H4']
    case 'F7': 
      return ['A2', 'B3', 'C4', 'D5', 'E6', 'E8', 'G6', 'G8', 'H5']
    case 'G7': 
      return ['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'F8', 'H6', 'H8']
    case 'H7':
      return ['B1', 'C2', 'D3', 'E4', 'F5', 'G6', 'G8']
    
    // Bishop Row 8
    case 'A8': 
      return ['B7', 'C6', 'D5', 'E4', 'F3', 'G2', 'H1']
    case 'B8': 
      return ['A7', 'C7', 'D6', 'E5', 'F4', 'G3', 'H2']
    case 'C8': 
      return ['A6', 'B7', 'D7', 'E6', 'F5', 'G4', 'H3']
    case 'D8': 
      return ['A5', 'B6', 'C7', 'E7', 'F6', 'G5', 'H4']
    case 'E8': 
      return ['A4', 'B5', 'C6', 'D7', 'F7', 'G6', 'H5']
    case 'F8': 
      return ['A3', 'B4', 'C5', 'D6', 'E7', 'G7', 'H6']
    case 'G8': 
      return ['A2', 'B3', 'C4', 'D5', 'E6', 'F7', 'H7']
    case 'H8': 
      return ['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7']
  }
}

export function getKingMoves(position: string) {
  switch (position) {
    case 'A1':
      return ['A2', 'B1', 'B2']
    case 'B1':
      return ['A1', 'A2', 'B2', 'C1', 'C2']
    case 'C1':
      return ['B1', 'B2', 'C2', 'D1', 'D2']
    case 'D1':
      return ['C1', 'C2', 'D2', 'E1', 'E2']
    case 'E1':
      return ['D1', 'D2', 'E2', 'F1', 'F2']
    case 'F1':
      return ['E1', 'E2', 'F2', 'G1', 'G2']
    case 'G1':
      return ['F1', 'F2', 'G2', 'H1', 'H2']
    case 'H1':
      return ['G1', 'G2', 'H2']

    // King row 2
    case 'A2':
      return ['A1', 'A3', 'B1', 'B2', 'B3']
    case 'B2':
      return ['A1', 'A2', 'A3', 'B1', 'B3', 'C1', 'C2', 'C3']
    case 'C2':
      return ['B1', 'B2', 'B3', 'C1', 'C3', 'D1', 'D2', 'D3']
  }
}