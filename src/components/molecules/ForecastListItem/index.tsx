/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useHelper } from 'src/hooks/useHelper';
import { Daily } from 'src/types';
import { Skelton } from 'src/components/atoms';

export type Props = {
  data: Daily | null;
};

const ICON_URL = process.env.REACT_APP_OPENWEATHER_ICON_URL || '';

const ForecastListItem: React.VFC<Props> = ({ data }) => {
  const { formatUnixtime } = useHelper();

  return (
    <>
      {data ? (
        <div css={itemStyle}>
          <dt>{formatUnixtime(data.sunrise)}</dt>
          <dd>
            <img
              src={`${ICON_URL}/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              width="50"
              height="50"
            />
          </dd>
          <dd>
            {data.temp.max.toFixed(1)}/{data.temp.min.toFixed(1)}℃
          </dd>
        </div>
      ) : (
        <div css={itemStyle}>
          <dt>
            <Skelton />
          </dt>
          <dd>
            <Skelton width="50px" height="50px" />
          </dd>
          <dd>
            <Skelton />
          </dd>
        </div>
      )}
    </>
  );
};

export default ForecastListItem;

const itemStyle = css`
  display: flex;
  font-size: 1rem;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
  }
  dt {
    min-width: 70px;
  }
`;
