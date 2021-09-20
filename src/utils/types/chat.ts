export interface ChatType {
  messageId: string;
  text: string;
  datetime: string;
  userId: string;
  status: 'Sent' | 'Error';
}

export type ChannelType = {
  id: string;
  name: string;
};
