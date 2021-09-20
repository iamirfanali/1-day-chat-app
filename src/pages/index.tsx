import ContentContainer from '../components/organisms/content-container';
import TitleContainer from '../components/organisms/title-container';
import { Container } from '../settings/styles/container';

const Index = () => {
  return (
    <Container>
      <TitleContainer />
      <ContentContainer />
    </Container>
  );
};

export default Index;
