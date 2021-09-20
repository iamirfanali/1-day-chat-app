import { ChatType } from '../../../utils/types/chat';

export interface ChatMessageProps extends ChatType {
  direction: 'Left' | 'Right';
  isCurrentUser: boolean;
}

export type ChatMessageComponentProps = Required<Pick<ChatMessageProps, 'direction'>>;
export type ChatMessageStatusProps = Required<Pick<ChatMessageProps, 'status'>>;
