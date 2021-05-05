/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Button, Input } from 'src/components/atoms';

export type Props = {
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clickHandler: () => void;
  inputDisabled: boolean;
  searchDisabled: boolean;
};

const SearchArea: React.VFC<Props> = ({
  clickHandler,
  inputHandler,
  inputDisabled,
  searchDisabled,
}) => {
  return (
    <div css={searchWrapperStyle}>
      <div css={inputStyle}>
        <Input inputHandler={inputHandler} disabled={inputDisabled} />
      </div>
      <div css={buttonStyle}>
        <Button clickHandler={clickHandler} disabled={searchDisabled} />
      </div>
    </div>
  );
};

export default SearchArea;

const searchWrapperStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const inputStyle = css`
  width: 70%;
  margin-right: 1rem;
`;

const buttonStyle = css`
  width: 30%;
`;
