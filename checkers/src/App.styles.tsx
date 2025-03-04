import styled from 'styled-components';


export const PlayerActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 25%;
`;

export const StyledBoardRowContainer = styled.li`
  list-style: none;
`;

export const StyledBoardRow = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  grid-template-rows: repeat(1, 55px);
`;

export const StyledAvailableMovesList = styled.ul`
  display: flex;
  gap: 10px
`;