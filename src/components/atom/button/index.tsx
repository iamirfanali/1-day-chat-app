import { ButtonWrapper } from './styles';
import { ButtonProps, RegularButtonProps } from './types';

const Button = ({
  variant = 'primary',
  size = 'normal',
  icon,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonWrapper {...(restProps as RegularButtonProps)} variant={variant} size={size}>
      {children}
      {icon && icon}
    </ButtonWrapper>
  );
};
export default Button;
