/** @jsxImportSource @emotion/react */
import React, { memo } from 'react';
import { css } from '@emotion/react';
import { Button, Input } from 'src/components/atoms';

export type Props = {
  inputHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clickHandler?: () => void;
  inputDisabled?: boolean;
  searchDisabled?: boolean;
};

const SearchArea: React.VFC<Props> = memo(
  ({ clickHandler, inputHandler, inputDisabled, searchDisabled }) => {
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
  },
);

export default SearchArea;

const searchWrapperStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const inputStyle = css`
  width: calc(70% - 1rem);
  margin-right: 1rem;
`;

const buttonStyle = css`
  width: 30%;
`;
