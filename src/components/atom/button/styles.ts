import styled, { css } from 'styled-components';

import { CssRecord } from '../../../utils/types/styles';
import { ButtonProps } from './types';

type ButtonComponentProps = Required<Pick<ButtonProps, 'variant' | 'size'>>;

const variantStyles: CssRecord<ButtonComponentProps['variant']> = {
  primary: css`
    background-color: var(--color-cyan);

    &:focus,
    &:hover {
      background-color: var(--color-cyan-dark);
    }
  `,
};

const sizeStyles: CssRecord<ButtonComponentProps['size']> = {
  normal: css`
    padding: var(--spacing-2) var(--spacing-4);
  `,
  small: css`
    padding: var(--spacing-1) var(--spacing-3);
  `,
};

const wrapperStyles = css<ButtonComponentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--color-white);
  border: none;
  border-radius: var(--border-4);
  font: var(--font-body--regular);
  transition: var(--transition--default);
  transition-property: background-color, color;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: inline-flex;
  }

  svg {
    display: block;
    margin-left: var(--spacing-1);
  }

  &:focus {
    outline: none;
  }

  ${({ size }) => sizeStyles[size]}
  ${({ variant }) => variantStyles[variant]}
`;

export const ButtonWrapper = styled.button<ButtonComponentProps>`
  ${wrapperStyles}
`;
