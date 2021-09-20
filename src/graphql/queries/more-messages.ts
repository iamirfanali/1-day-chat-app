import { gql } from '@apollo/client';

const MORE_MESSAGES_QUERY = gql`
  query FetchMoreMessages($channelId: String!, $messageId: String!, $old: Boolean!) {
    fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {
      messageId
      text
      datetime
      userId
    }
  }
`;

export default MORE_MESSAGES_QUERY;
