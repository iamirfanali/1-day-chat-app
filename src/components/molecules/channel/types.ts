import React from 'react';

export type CommonProps = {
  children: React.ReactNode;
  status: 'Active' | 'Inactive';
};

export type ChannelComponentProps = Required<Pick<CommonProps, 'status'>>;

export type RegularComponentProps = React.LiHTMLAttributes<HTMLLIElement>;

export type ChannelProps = CommonProps & RegularComponentProps;
