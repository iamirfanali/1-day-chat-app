import { ChannelWrapper } from './styles';
import { ChannelProps } from './types';

const Channel = ({ children, status, ...rest }: ChannelProps) => {
  return (
    <ChannelWrapper status={status} {...rest}>
      {children}
    </ChannelWrapper>
  );
};

export default Channel;
