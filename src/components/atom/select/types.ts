export type CommonProps = {
  options?: string[];
};

export type RegularSelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export type SelectProps = CommonProps & RegularSelectProps;
