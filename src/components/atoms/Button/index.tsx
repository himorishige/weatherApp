/** @jsxImportSource @emotion/react */
import React, { memo } from 'react';
import { css } from '@emotion/react';

export type Props = {
  disabled?: boolean;
  clickHandler?: () => void;
};

const Button: React.VFC<Props> = memo(({ disabled = false, clickHandler }) => {
  return (
    <button type="button" css={buttonStyle} disabled={disabled} onClick={clickHandler}>
      検索する
    </button>
  );
});

export default Button;

const buttonStyle = css`
  padding: 0.5rem 1rem;
  text-align: center;
  color: var(--white-color);
  background: var(--primary-color);
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 100%;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;
