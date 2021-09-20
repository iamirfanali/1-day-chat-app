import styled from 'styled-components';

import { SelectProps } from './types';

export const SelectWrapper = styled.select<SelectProps>`
  width: 100%;
  display: block;
  cursor: pointer;
  word-wrap: normal;
  background-clip: padding-box;
  background-color: var(--color-white);
  border: var(--border-1) solid var(--color-silver);
  border-radius: var(--border-4);
  padding: var(--spacing-4) var(--spacing-4);
  color: var(--select-color);
  font: var(--font-body--regula);
`;
