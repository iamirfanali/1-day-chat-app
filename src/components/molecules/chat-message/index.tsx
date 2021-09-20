import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import {
  ChatWrapper,
  AvatarWrapper,
  ChatBoxWrapper,
  ChatHourWrapper,
  ChatStatusWrapper,
} from './styles';
import { ChatMessageProps } from './types';

const ChatMessage = ({
  direction,
  userId,
  text,
  datetime,
  status,
  isCurrentUser,
}: ChatMessageProps) => {
  return (
    <ChatWrapper direction={direction}>
      <AvatarWrapper direction={direction}>
        <img src="https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Russell.png" alt="avatar" />
        <div>{userId}</div>
      </AvatarWrapper>
      <ChatBoxWrapper direction={direction}>{text}</ChatBoxWrapper>
      <ChatHourWrapper direction={direction}>
        {moment(datetime).format('hh:mm')}
        {isCurrentUser && status && (
          <ChatStatusWrapper status={status}>
            <FontAwesomeIcon icon={status === 'Error' ? faExclamationCircle : faCheckCircle} />
            <span>{status}</span>
          </ChatStatusWrapper>
        )}
      </ChatHourWrapper>
    </ChatWrapper>
  );
};

export default ChatMessage;
