import { ADD_CHANNEL } from '../../../settings/constants';
import { useAppState } from '../../../store/store';
import { ChannelType } from '../../../utils/types/chat';
import Label from '../../atom/label';
import Channel from '../../molecules/channel';
import { SelectChannelWrapper } from './styles';

const channels = [
  {
    id: '1',
    name: 'General Channel',
  },
  {
    id: '2',
    name: 'Technology Channel',
  },
  {
    id: '3',
    name: 'LGTM Channel',
  },
];

const SelectChannel = () => {
  const { state, dispatch } = useAppState();

  const changeChannel = (channel: ChannelType) => dispatch({ type: ADD_CHANNEL, payload: channel });

  return (
    <SelectChannelWrapper>
      <Label>2. Choose your Channel</Label>
      <ul>
        {channels.map((channel) => {
          return (
            <Channel
              role="button"
              key={channel.id}
              onClick={() => changeChannel(channel)}
              status={state.channel.id === channel.id ? 'Active' : 'Inactive'}
            >
              {channel.name}
            </Channel>
          );
        })}
      </ul>
    </SelectChannelWrapper>
  );
};

export default SelectChannel;
