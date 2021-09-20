import { ChatType, ChannelType } from '../utils/types/chat';

export type InitialState = {
  chat: ChatType[];
  channel: ChannelType;
  user: string;
  message: string | undefined;
};

export const initialState: InitialState = {
  chat: [],
  channel: {
    id: '1',
    name: 'General Channel',
  },
  user: 'Sam',
  message: undefined,
};
