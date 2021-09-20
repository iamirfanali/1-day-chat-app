import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  /* General tokens */
  --color-white: #ffffff;
  --color-grey: #f4f5fb;
  --color-dark-gray: #e6ecf3;
  --color-dark-gray--meduim: #f0f4f8;
  --color-dark-gray--bold: #999999;
  --color-cyan: #17a2b8;
  --color-cyan-dark: #138496;
  --color-dark: #212529;
  --color-silver: #ced4da;
  --color-green: #9ec94a;
  --color-red: #b71e3c;

  --font-serif: -apple-system, system-ui, "Segoe UI", "Roboto", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  --font-body--bold: 600 0.85rem / 1.5rem var(--font-serif);
  --font-body--small: 300 1rem / 1.5rem var(--font-serif);
  --font-body--small--regular: 400 0.75rem / 1.125rem var(--font-serif); 
  --font-body--small--meduim: 400 0.8rem / 1.2rem var(--font-serif);
  --font-body--regular: 400 1rem / 1.5rem var(--font-serif);
  --font-headline-1: 800 5.25rem / 5.5rem var(--font-serif);
  --font-headline-2: 700 4.25rem / 4.5rem var(--font-serif);
  --font-headline-3: 600 3.25rem / 3.5rem var(--font-serif);
  --font-headline-4: 400 1rem / 1.5rem var(--font-serif);
  --font-headline-5: 500 1.25rem / 1.5rem var(--font-serif);

  --transition--default: 0.2s ease-in-out;
  --transition--short: 0.12s ease-in-out;

  --container-max-width: 1140px;

  --grid-column-count: 12;
  --grid-gutter: 1px;
  --grid-margin: 2px;

  --spacing-1: 4px;
  --spacing-2: 6px;
  --spacing-3: 8px;
  --spacing-4: 12px;
  --spacing-5: 16px;
  --spacing-6: 20px;
  --spacing-7: 24px;
  --spacing-8: 40px;
  --spacing-9: 96px;

  --border-0: 0px;
  --border-1: 1px;
  --border-2: 2px;
  --border-3: 3px;
  --border-4: 4px;
  --border-10: 10px;
  --border-30: 30px;

  --position-0: 0px;
  --position-10: 10px;
  --position--20: -20px;


  /* Specific tokens */
  --avatar-dimension: 48px;
  --border-color-1: transparent transparent transparent var(--color-white);
  --border-color-2: transparent var(--color-white) transparent transparent;
  --channel-active: -webkit-linear-gradient(right, #f7f9fb, #ffffff);
  --channel-hover: -webkit-linear-gradient(right, #e9eff5, #ffffff);
  --select-color: #495057;
}

  body {
    margin: 0;
    font-size: 16px;
    color: var(---color-dark);
    font-family: var(--font-serif);
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: var(--spacing-5);
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: var(--spacing-3);
  }
  `;
