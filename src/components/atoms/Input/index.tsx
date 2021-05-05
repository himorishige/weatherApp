/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export type Props = {
  disabled?: boolean;
  place?: string;
  inputHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input: React.VFC<Props> = ({ place, disabled = false, inputHandler }) => {
  return (
    <>
      <input
        type="text"
        placeholder="（例）東京"
        aria-label="search input"
        value={place}
        defaultValue=""
        data-testid="input"
        css={inputStyle}
        disabled={disabled}
        onChange={inputHandler}
      />
    </>
  );
};

export default Input;

const inputStyle = css`
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #999999;
  &::placeholder {
    color: #ccc;
  }
  &:disabled {
    color: #ccc;
    background-color: #f8f8f8;
    cursor: not-allowed;
  }
`;
