import {
  ADD_MESSAGE,
  ADD_INTO_CHAT,
  ADD_CHANNEL,
  ADD_USER,
  LOAD_CHATS,
  ADD_OLD_MESSAGES,
  ADD_NEW_MESSAGES,
} from '../settings/constants';
import { InitialState } from './initial-state';

export type Action = {
  type: string;
  payload: any;
};

export const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case LOAD_CHATS: {
      return { ...state, chat: action.payload };
    }
    case ADD_INTO_CHAT: {
      const { chat } = state;
      chat.push(action.payload);
      return { ...state, chat };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case ADD_OLD_MESSAGES: {
      const { chat } = state;
      const computedChats = action.payload.concat(chat);
      return {
        ...state,
        chat: computedChats,
      };
    }
    case ADD_NEW_MESSAGES: {
      const { chat } = state;
      const computedChats = chat.concat(action.payload);
      return {
        ...state,
        chat: computedChats,
      };
    }
    case ADD_CHANNEL: {
      return {
        ...state,
        channel: action.payload,
      };
    }
    case ADD_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
