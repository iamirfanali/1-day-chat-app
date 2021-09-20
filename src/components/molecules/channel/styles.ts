import styled, { css } from 'styled-components';

import { CssRecord } from '../../../utils/types/styles';
import { ChannelComponentProps } from './types';

const channelWrappervariant: CssRecord<ChannelComponentProps['status']> = {
  Active: css`
    background: var(--color-white);
    background-image: var(--channel-active);
  `,
  Inactive: css`
    :hover {
      background-image: var(--channel-hover);
    }
  `,
};

export const ChannelWrapper = styled.li<ChannelComponentProps>`
  cursor: pointer;
  position: relative;
  padding: var(--spacing-5);
  border-bottom: var(--border-1) solid var(--color-dark-gray--meduim);
  font: var(--font-body--bold);

  ${({ status }) => channelWrappervariant[status]};
`;
