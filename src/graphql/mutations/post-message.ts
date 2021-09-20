import { gql } from '@apollo/client';

const POST_MESSAGE_MUTATION = gql`
  mutation PostMessage($channelId: String!, $userId: String!, $text: String!) {
    postMessage(channelId: $channelId, userId: $userId, text: $text) {
      messageId
      text
      datetime
      userId
    }
  }
`;

export default POST_MESSAGE_MUTATION;
