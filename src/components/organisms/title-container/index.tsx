import Heading from '../../atom/heading';
import { TitleWrapper } from './styles';

const TitleContainer = () => {
  return (
    <TitleWrapper>
      <Heading level="h5">1 day chat App</Heading>
      <p>All messages will be deleted at every 00:00 UTC</p>
    </TitleWrapper>
  );
};

export default TitleContainer;
