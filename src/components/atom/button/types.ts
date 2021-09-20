import React from 'react';

type CommonProps = {
  variant?: 'primary';
  size?: 'normal' | 'small';
  icon?: React.ReactNode;
};

export type RegularButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = CommonProps & RegularButtonProps;
