import { TextAreaWrapper } from './styles';
import { RegularTextAreaProps } from './types';

const TextArea = (props: RegularTextAreaProps) => (
  <TextAreaWrapper {...(props as RegularTextAreaProps)} />
);
export default TextArea;
