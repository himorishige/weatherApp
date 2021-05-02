/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const Button: React.VFC = () => {
  return (
    <div>
      <button type="button" css={buttonStyle}>
        検索する
      </button>
    </div>
  );
};

export default Button;

const buttonStyle = css`
  padding: 0.25rem 1rem;
  text-align: center;
  color: var(--white-color);
  background: var(--primary-color);
  cursor: pointer;
  border: none;
  border-radius: 4px;
  &:hover {
    opacity: 0.7;
  }
`;
