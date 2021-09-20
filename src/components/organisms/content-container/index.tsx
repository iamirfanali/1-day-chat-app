import AddMessage from './add-message';
import ChatList from './chat-list';
import Header from './header';
import SelectChannel from './select-channel';
import SelectUser from './select-user';
import { ContentWrapper, UserContainer, ChatContainer } from './styles';

const ContentContainer = () => {
  return (
    <ContentWrapper>
      <UserContainer>
        <SelectUser />
        <SelectChannel />
      </UserContainer>
      <ChatContainer>
        <Header />
        <ChatList />
        <AddMessage />
      </ChatContainer>
    </ContentWrapper>
  );
};

export default ContentContainer;
