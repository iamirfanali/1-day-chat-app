import styled from 'styled-components';

export const Grid = styled.div`
  box-sizing: content-box;
  display: grid;
  grid-template-columns: repeat(var(--grid-column-count), 1fr);
  grid-column-gap: var(--grid-gutter);
  margin: 0 auto;

  > * {
    grid-column: 1 / -1;
  }
`;

export const GridColumn = styled.div`
  --column: 1 / -1;

  grid-column: var(--column) !important;
`;
