

export function getPieceMoves(position: string) {

  switch (position) {
    case 'A2':
      return 'A3'
    case 'B2':
      return 'B3'
    case 'C2':
      return 'C3'
    case 'D2':
      return 'D3'
    case 'E2':
      return 'E3'
    case 'F2':
      return 'F3'
    case 'G2':
      return 'G3'
    case 'H2':
      return 'H3'

    // Pawns Row 3
    case 'A3':
      return 'A4'
    case 'B3':
      return 'B4'
    case 'C3':
      return 'C4'
    case 'D3':
      return 'D4'
    case 'E3':
      return 'E4'
    case 'F3':
      return 'F4'
    case 'G3':
      return 'G4'
    case 'H3':
      return 'H4'

    // Pawns Row 4
    case 'A4':
      return 'A5'
    case 'B4':
      return 'B5'
    case 'C4':
      return 'C5'
    case 'D4':
      return 'D5'
    case 'E4':
      return 'E5'
    case 'F4':
      return 'F5'
    case 'G4':
      return 'G5'
    case 'H4':
      return 'H5'

    // Pawns Row 5
    case 'A5':
      return 'A6'
    case 'B5':
      return 'B6'
    case 'C5':
      return 'C6'
    case 'D5':
      return 'D6'
    case 'E5':
      return 'E6'
    case 'F5':
      return 'F6'
    case 'G5':
      return 'G6'
    case 'H5':
      return 'H6'
    

    
    default: 
      return null
  }
}