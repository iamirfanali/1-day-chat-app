import { PropsWithChildren } from 'react';

export type HeadingLevel = `h${1 | 2 | 3 | 4 | 5}`;
export type HeadingProps = PropsWithChildren<{
  level?: HeadingLevel;
  as?: HeadingLevel;
  centered?: boolean;
  className?: string;
}>;
