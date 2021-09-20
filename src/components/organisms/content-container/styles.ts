import styled from 'styled-components';

import { Grid, GridColumn } from '../../../settings/styles/grid';

export const ContentWrapper = styled(Grid)`
  background: var(--color-grey);
  border-radius: var(--border-2);
  min-height: 85vh;
`;

export const UserContainer = styled(GridColumn)`
  --column: auto / span 4;
  border-right: var(--border-1) solid var(--color-dark-gray);
  padding: var(--spacing-6) 0;
`;

export const ChatContainer = styled(GridColumn)`
  --column: auto / span 8;
`;

export const SelectUserWrapper = styled.div`
  margin-bottom: var(--spacing-5);
`;

export const SelectChannelWrapper = styled.div`
  margin-bottom: var(--spacing-5);
`;

export const HeaderWrapper = styled.div`
  border-bottom: var(--border-1) solid var(--color-dark-gray);
  padding: var(--spacing-5);
`;

export const ChatListWrapper = styled.div`
  padding: var(--spacing-6) var(--spacing-5);
  max-height: 60vh;
  overflow: auto;
`;

export const ReadMoreButtonWrapper = styled.div`
  margin-bottom: var(--spacing-8);
`;

export const TextArea = styled.textarea`
  width: 96%;
  padding: var(--spacing-2) var(--spacing-4);
  color: var(--select-color);
  background-color: var(--color-white);
  border: var(--border-1) solid #ced4da;
  border-radius: var(--border-4);
  overflow: auto;
  resize: vertical;
  font: var(--font-headline-4);
`;

export const AddMessageWrapper = styled.div`
  padding: 0 var(--spacing-5) var(--spacing-5);
`;
