import React from 'react';

import { H } from './styles';
import { HeadingProps } from './types';

const Heading = ({ level = 'h1', as, children, centered = false, className }: HeadingProps) => (
  <H as={as ?? level} level={level} centered={centered} className={className}>
    {children}
  </H>
);
export default Heading;
