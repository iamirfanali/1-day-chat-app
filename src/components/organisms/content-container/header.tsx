import { useAppState } from '../../../store/store';
import Heading from '../../atom/heading';
import { HeaderWrapper } from './styles';

const Header = () => {
  const { state } = useAppState();

  return (
    <HeaderWrapper>
      <Heading level="h4">{state.channel.name}</Heading>
    </HeaderWrapper>
  );
};

export default Header;
