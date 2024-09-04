

export function getPawnAttacks(position: string) {
  switch (position) {
    case 'A2':
      return ["B3"]
    case 'B2':
      return ["A3", "C3"]
    case 'C2':
      return ["B3", "D3"]
    case 'D2':
      return ["C3", "E3"]
    case 'E2':
      return ["D3", "F3"]
    case 'F2':
      return ["E3", "G3"]
    case 'G2':
      return ["F3", "H3"]
    case 'H2':
      return ["G3"]

    // Pawns Row 3
    case 'A3':
      return ["B4"]
    case 'B3':
      return ["A4", "C4"]
    case 'C3':
      return ["B4", "D4"]
    case 'D3':
      return ["C4", "E4"]
    case 'E3':
      return ["D4", "F4"]
    case 'F3':
      return ["E4", "G4"]
    case 'G3':
      return ["F4", "H4"]
    case 'H3':
      return ["G4"]
    
    // Pawns Row 4
    case 'A4':
      return ["B5"]
    case 'B4':
      return ["A5", "C5"]
    case 'C4':
      return ["B5", "D5"]
    case 'D4':
      return ["C5", "E5"]
    case 'E4':
      return ["D5", "F5"]
    case 'F4':
      return ["E5", "G5"]
    case 'G4':
      return ["F5", "H5"]
    case 'H4':
      return ["G5"]

    // Pawns Row 5
    case 'A5':
      return ["B6"]
    case 'B5':
      return ["A6", "C6"]
    case 'C5':
      return ["B6", "D6"]
    case 'D5':
      return ["C6", "E6"]
    case 'E5':
      return ["D6", "F6"]
    case 'F5':
      return ["E6", "G6"]
    case 'G5':
      return ["F6", "H6"]
    case 'H5':
      return ["G6"]

    // Pawns Row 6
    case 'A6':
      return ["B7"]
    case 'B6':
      return ["A7", "C7"]
    case 'C6':
      return ["B7", "D7"]
    case 'D6':
      return ["C7", "E7"]
    case 'E6':
      return ["D7", "F7"]
    case 'F6':
      return ["E7", "G7"]
    case 'G6':
      return ["F7", "H7"]
    case 'H6':
      return ["G7"]
    
    // Pawns Row 7
    case 'A7':
      return ["B8"]
    case 'B7':
      return ["A8", "C8"]
    case 'C7':
      return ["B8", "D8"]
    case 'D7':
      return ["C8", "E8"]
    case 'E7':
      return ["D8", "F8"]
    case 'F7':
      return ["E8", "G8"]
    case 'G7':
      return ["F8", "H8"]
    case 'H7':
      return ["G8"]
  }
}

export function getKnightAttacks(position: string) {
  switch (position) {
    case 'B1':
      return ["A3", "C3"]
  }
}