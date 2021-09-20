import { LabelWrapper } from './styles';
import { LabelProps, RegularLabelProps } from './types';

const Label = ({ children, ...restPops }: LabelProps) => (
  <LabelWrapper {...(restPops as RegularLabelProps)}>{children}</LabelWrapper>
);
export default Label;
