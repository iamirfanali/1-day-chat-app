import { SelectWrapper } from './styles';
import { SelectProps, RegularSelectProps } from './types';

const Select = ({ options, ...restPops }: SelectProps) => (
  <SelectWrapper {...(restPops as RegularSelectProps)}>
    {options?.map((option) => (
      <option key={option}>{option}</option>
    ))}
  </SelectWrapper>
);
export default Select;
