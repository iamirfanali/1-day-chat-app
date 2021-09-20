import { useEffect } from 'react';

// import { useLazyQuery, useQuery } from '@apollo/client';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import LATEST_MESSAGES_QUERY from '../../../graphql/queries/latest-messages';
// import MORE_MESSAGES_QUERY from '../../../graphql/queries/more-messages';
import { LOAD_CHATS, ADD_OLD_MESSAGES, ADD_NEW_MESSAGES } from '../../../settings/constants';
import { useAppState } from '../../../store/store';
import Button from '../../atom/button';
import ChatMessage from '../../molecules/chat-message';
import { ChatListWrapper, ReadMoreButtonWrapper } from './styles';

/* Getting -- CORS Error -- for provided Graphql API
 * conveyed this to HR didn't received any response on that
 * so, I have added test only data to depict the actual app functionality
 */
const chats = [
  {
    messageId: '0',
    userId: 'Russell',
    text: 'Hello, i am Russell. How can I help you today?',
    datetime: '2021-09-19T23:33:44+05:00',
  },
  {
    messageId: '1',
    userId: 'Russell',
    text: 'Hello, i am Russell. How can I help you today?',
    datetime: '2021-09-19T23:33:44+05:00',
  },
  {
    messageId: '2',
    userId: 'Russell',
    text: 'Hello, i am Russell. How can I help you today?',
    datetime: '2021-09-19T23:33:44+05:00',
  },
  {
    messageId: '3',
    userId: 'Sam',
    text: 'Hello, i am Sam. How can I help you today?',
    datetime: '2021-09-19T23:33:44+05:00',
  },
  {
    messageId: '4',
    userId: 'Joyse',
    text: 'Hello, i am Joyse. How can I help you today?',
    datetime: '2021-09-19T23:33:44+05:00',
  },
];

const ChatList = () => {
  const { state, dispatch } = useAppState();

  // -- CORS Error -- But this the the possible implementation of querying data from Graphql
  // const { data, error } = useQuery(LATEST_MESSAGES_QUERY, {
  //   variables: { channelId: state.channel.id },
  // });

  // Get last element of chats array
  // const lastChatMessage = state?.chat.slice(-1)[0];

  // Get first element of chats array
  // const firstChatMessage = state?.chat[0];

  // -- CORS Error -- But this the the possible implementation of querying newer chat from Graphql
  // const [getNewMessages, { data: newMessages, error: newMessagesError }] = useLazyQuery(
  //   MORE_MESSAGES_QUERY,
  //   {
  //     variables: {
  //       channelId: state.channel.id,
  //       messageId: lastChatMessage?.messageId,
  //       old: false,
  //     },
  //   }
  // );

  // -- CORS Error -- But this the the possible implementation of querying older chat from Graphql
  // const [getOldMessages, { data: oldMessages, error: oldMessagesError }] = useLazyQuery(
  //   MORE_MESSAGES_QUERY,
  //   {
  //     variables: {
  //       channelId: state.channel.id,
  //       messageId: firstChatMessage?.messageId,
  //       old: true,
  //     },
  //   }
  // );

  useEffect(() => {
    // -- CORS Error -- As the real data is not present so used setTimeout to depict async behaviour
    setTimeout(() => {
      return dispatch({
        type: LOAD_CHATS,
        payload: chats, // This needs to be replaced with "data" instead of dummy chats data
      });
    }, 1000);
  }, [dispatch]);

  const loadOldChat = () => {
    // -- CORS Error -- Added old message payload as dummy as we are not getting real data
    // This can be replaced to the data received from Graphql API

    // getOldMessages();

    dispatch({
      type: ADD_OLD_MESSAGES,
      payload: [
        {
          messageId: '0',
          userId: 'Russell',
          text: 'OLD MESSAGE',
          datetime: '2021-09-19T23:33:44+05:00',
        },
      ],
    });
  };

  const loadNewChat = () => {
    // -- CORS Error -- Added old message payload as dummy as we are not getting real data
    // This can be replaced to the data received from Graphql API

    // getNewMessages();

    return dispatch({
      type: ADD_NEW_MESSAGES,
      payload: [
        {
          messageId: '0',
          userId: 'Sam',
          text: 'NEW MESSAGE',
          datetime: '2021-09-19T23:33:44+05:00',
        },
      ],
    });
  };

  return (
    <ChatListWrapper>
      <ReadMoreButtonWrapper>
        <Button icon={<FontAwesomeIcon icon={faArrowUp} />} onClick={loadOldChat}>
          Read More
        </Button>
      </ReadMoreButtonWrapper>
      {state.chat.map((chat) => {
        const isSelectedUser = chat.userId === state.user;
        return (
          <ChatMessage
            key={chat.messageId}
            direction={isSelectedUser ? 'Right' : 'Left'}
            isCurrentUser={isSelectedUser}
            {...chat}
          />
        );
      })}
      <div>
        <Button icon={<FontAwesomeIcon icon={faArrowDown} />} onClick={loadNewChat}>
          Read More
        </Button>
      </div>
    </ChatListWrapper>
  );
};

export default ChatList;
