import styled from 'styled-components';

import { LabelProps } from './types';

export const LabelWrapper = styled.label<LabelProps>`
  width: 100%;
  display: inline-block;
  margin-bottom: var(--spacing-3);
`;
