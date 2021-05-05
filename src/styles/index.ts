import { css } from '@emotion/react';

export const globalStyle = css`
  :root {
    --white-color: #ffffff;
    --black-color: #353535;
    --primary-color: #1ea7fd;
  }

  body {
    font-family: 'Helvetica Neue', 'Helvetica', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN',
      'Arial', 'Yu Gothic', 'Meiryo', sans-serif;
    line-height: 2;
    letter-spacing: 0.05em;
    background: #ffffff;
    color: var(--black-color);
  }
`;
