import styled, { css } from 'styled-components';

import { CssRecord } from '../../../utils/types/styles';
import { HeadingProps } from './types';

type StyleProps = Required<Pick<HeadingProps, 'level' | 'centered'>>;

const sizes: CssRecord<StyleProps['level']> = {
  h1: css`
    font: var(--font-headline-1);
  `,
  h2: css`
    font: var(--font-headline-2);
  `,
  h3: css`
    font: var(--font-headline-3);
  `,
  h4: css`
    font: var(--font-headline-4);
  `,
  h5: css`
    font: var(--font-headline-5);
  `,
};
export const H = styled.h1<StyleProps>`
  text-align: ${({ centered }) => (centered ? 'center' : 'initial')};
  ${({ level }) => sizes[level]}
`;
