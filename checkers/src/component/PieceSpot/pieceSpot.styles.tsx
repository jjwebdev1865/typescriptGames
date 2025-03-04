import styled from 'styled-components';


export const StyledPieceSpot = styled.li<{ $tilecolor?: string; $textcolor?: string }>`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $tilecolor }) => $tilecolor ? $tilecolor : '#F5E6D3'};
  color: ${({ $textcolor }) => $textcolor ? $textcolor : '#000000'};
`

export const StyledChessPiece = styled.button<{ $piececolor?: string }>`
  padding: 5px 10px;
  z-index: 2;
  color: #FFFFFF;
  background-color: ${({ $piececolor }) => $piececolor ? $piececolor : '#000000'};
`
