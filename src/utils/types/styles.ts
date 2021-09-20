import { css } from 'styled-components';

export type CssRecord<T extends string> = Record<T, ReturnType<typeof css>>;
