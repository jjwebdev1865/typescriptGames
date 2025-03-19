import styled from 'styled-components';
import { PlayerOptions } from '../../models';

export const StyledBoardSpot = styled.li<{ $player?: PlayerOptions | null }>`
  padding: 25px;
  border: 1px solid black;
  min-height: 65px;
  min-width: 65px;
  background-color: ${({ $player }) => $player === null ? 'FFFFFF' : $player === 'P1' ? '#FFCCCB' : 'lightblue'};
`
