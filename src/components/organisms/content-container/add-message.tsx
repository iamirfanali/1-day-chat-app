import { useState } from 'react';

// import { useMutation } from '@apollo/client';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

// import POST_MESSAGE_MUTATION from '../../../graphql/mutations/post-message';
import { ADD_INTO_CHAT } from '../../../settings/constants';
import { useAppState } from '../../../store/store';
import Button from '../../atom/button';
import TextArea from '../../atom/text-area';
import { AddMessageWrapper } from './styles';

const AddMessage = () => {
  const { state, dispatch } = useAppState();
  const [chatMessage, setChatMesage] = useState<string>(localStorage.getItem('message') || '');

  // -- CORS Error -- But this the possible implementation of mutating data with Graphql API
  // const [saveMessage, { error: saveMessageError }] = useMutation(POST_MESSAGE_MUTATION);

  const sendMessageHandler = async () => {
    // -- CORS Error -- the possible implementation of mutating data
    // try {
    //   const saveChat = await saveMessage({
    //     variables: { channelId: state.channel.id, userId: state.user, text: state.message },
    //   });
    //   const { data, errors } = saveChat.data;
    // } catch (e) {}

    // This code can be moved to try block if the Graphql API is working
    if (chatMessage) {
      dispatch({
        type: ADD_INTO_CHAT,
        payload: {
          messageId: Math.random().toString(),
          userId: state.user,
          text: chatMessage,
          datetime: moment().format(),
          status: 'Sent', // status can be Sent|Error
        },
      });
      setChatMesage('');
    }
    return null;
  };

  const handleTextArea = (e: string) => {
    localStorage.setItem('message', e);
    setChatMesage(e);
  };

  return (
    <AddMessageWrapper>
      <TextArea
        rows={3}
        value={chatMessage}
        onChange={(e) => handleTextArea(e.target.value)}
        placeholder="Type your message here..."
      />
      <Button icon={<FontAwesomeIcon icon={faPaperPlane} />} onClick={sendMessageHandler}>
        Send Message
      </Button>
    </AddMessageWrapper>
  );
};

export default AddMessage;
