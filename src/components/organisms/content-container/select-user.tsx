import { ADD_USER } from '../../../settings/constants';
import { useAppState } from '../../../store/store';
import Label from '../../atom/label';
import Select from '../../atom/select';
import { SelectUserWrapper } from './styles';

const users = ['Sam', 'Russell', 'Joyse'];

const SelectUser = () => {
  const { state, dispatch } = useAppState();

  const changeUser = (user: string) => dispatch({ type: ADD_USER, payload: user });

  return (
    <SelectUserWrapper>
      <Label htmlFor="users">1. Choose your user</Label>
      <Select
        id="users"
        value={state.user}
        options={users}
        onChange={(e) => changeUser(e.target.value)}
      />
    </SelectUserWrapper>
  );
};

export default SelectUser;
