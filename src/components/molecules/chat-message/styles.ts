import styled, { css } from 'styled-components';

import { CssRecord } from '../../../utils/types/styles';
import { ChatMessageComponentProps, ChatMessageStatusProps } from './types';

const chatWrappervariant: CssRecord<ChatMessageComponentProps['direction']> = {
  Left: css`
    flex-direction: row;
  `,
  Right: css`
    flex-direction: row-reverse;
  `,
};

export const ChatWrapper = styled.div<ChatMessageComponentProps>`
  display: flex;
  flex: 1;
  margin-bottom: var(--spacing-8);

  ${({ direction }) => chatWrappervariant[direction]};
`;

const avatarWrapperVariantStyles: CssRecord<ChatMessageComponentProps['direction']> = {
  Left: css`
    margin-right: var(--spacing-6);
  `,
  Right: css`
    margin-right: 0;
    margin-left: var(--spacing-6);
  `,
};

export const AvatarWrapper = styled.div<ChatMessageComponentProps>`
  text-align: center;
  color: var(--color-dark-gray--bold);
  font: var(--font-body--small--regular);

  img {
    height: var(--avatar-dimension);
    width: var(--avatar-dimension);
    border-radius: var(--border-30);
  }

  ${({ direction }) => avatarWrapperVariantStyles[direction]};
`;

const chatBoxWrapperVariantStyles: CssRecord<ChatMessageComponentProps['direction']> = {
  Left: css``,
  Right: css`
    :before {
      left: inherit;
      right: var(--position--20);
      border-color: var(--border-color-1);
    }
  `,
};

export const ChatBoxWrapper = styled.div<ChatMessageComponentProps>`
  padding: var(--spacing-2) var(--spacing-5);
  border-radius: var(--border-4);
  background: var(--color-white);
  font: var(--font-body--small);
  position: relative;

  :before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: var(--position-10);
    left: var(--position--20);
    border: var(--border-10) solid;
    border-color: var(--border-color-2);
  }

  ${({ direction }) => chatBoxWrapperVariantStyles[direction]};
`;

export const ChatHourWrapper = styled.div<ChatMessageComponentProps>`
  padding: 0;
  margin-left: var(--spacing-3);
  margin-right: var(--spacing-3);
  font: var(--font-body--small--meduim);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const chatMessageStatusVariantStyles: CssRecord<ChatMessageStatusProps['status']> = {
  Sent: css`
    svg {
      color: var(--color-green);
    }
  `,
  Error: css`
    svg {
      color: var(--color-red);
    }
  `,
};

export const ChatStatusWrapper = styled.div<ChatMessageStatusProps>`
  color: var(--color-dark-gray--bold);
  margin-left: var(--spacing-1);
  ${({ status }) => chatMessageStatusVariantStyles[status]};
`;
