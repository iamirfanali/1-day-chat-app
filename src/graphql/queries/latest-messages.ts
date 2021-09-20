import { gql } from '@apollo/client';

const LATEST_MESSAGES_QUERY = gql`
  query LatestMessages($channelId: String!) {
    fetchLatestMessages(channelId: $channelId) {
      messageId
      text
      datetime
      userId
    }
  }
`;

export default LATEST_MESSAGES_QUERY;
