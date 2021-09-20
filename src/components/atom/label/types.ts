import { ReactNode } from 'react';

export type CommonProps = {
  children: ReactNode;
};

export type RegularLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export type LabelProps = CommonProps & RegularLabelProps;
