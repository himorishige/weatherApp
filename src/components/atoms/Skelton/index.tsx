/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, keyframes } from '@emotion/react';

export type Props = {
  height?: string;
  width?: string;
};

const Skelton: React.VFC<Props> = (props) => {
  const { height = '1.5rem', width = '100%' } = props;

  return <div css={skeltonStyle} style={{ width: `${width}`, height: `${height}` }} />;
};

export default Skelton;

const skeltonAnimation = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(100%)
  }
`;

const skeltonStyle = css`
  width: 100%;
  height: 1.5rem;
  line-height: 2;
  background: #d9d9d9;
  position: relative;
  overflow: hidden;
  margin: 0.5rem 0;
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    animation: ${skeltonAnimation} 1.2s linear infinite;
  }
`;
