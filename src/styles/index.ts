import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const globalStyle = css`
  ${emotionReset}

  :root {
    --white-color: #ffffff;
    --black-color: #353535;
    --primary-color: #1ea7fd;
  }

  body {
    line-height: 2;
    letter-spacing: 0.05em;
    background: #ffffff;
    color: var(--black-color);
  }
`;
