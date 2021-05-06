/** @jsxImportSource @emotion/react */
import React, { memo } from 'react';
import { css } from '@emotion/react';
import { WeatherData } from 'src/types';
import { useHelper } from 'src/hooks/useHelper';
import Skelton from 'src/components/atoms/Skelton';

export type Props = {
  data: WeatherData | null;
  currentLocation?: string;
};

const ICON_URL = process.env.REACT_APP_OPENWEATHER_ICON_URL || '';

const CurrentInfo: React.VFC<Props> = memo((props) => {
  const { data, currentLocation } = props;

  const { printWindDirection, formatUnixtime } = useHelper();

  return (
    <>
      {data ? (
        <div css={rootStyle}>
          <div css={currentTimeStyle} data-testid="datetime">
            取得日時：{formatUnixtime(data.current.dt, 'Y/M/d kk:mm:ss')}
          </div>
          <h2 css={currentLocationStyle}>{currentLocation || '現在地'}付近</h2>
          <div css={currentDataStyle}>
            <div>
              <img src={`${ICON_URL}/10d@2x.png`} alt="" width="50" height="50" />
            </div>
            <h3>{data.current.temp.toFixed(1)}℃</h3>
          </div>
          <div css={dataListWrapperStyle}>
            <dl css={dataListStyle}>
              <div css={dataItemStyle}>
                <dt>体感温度：</dt>
                <dd>{data.current.feels_like.toFixed(1)}℃</dd>
              </div>
              <div css={dataItemStyle}>
                <dt>最高気温：</dt>
                <dd>{data.daily[0].temp.max.toFixed(1)}℃</dd>
              </div>
              <div css={dataItemStyle}>
                <dt>最低気温：</dt>
                <dd>{data.daily[0].temp.min.toFixed(1)}℃</dd>
              </div>
              <div css={dataItemStyle}>
                <dt>風向き：</dt>
                <dd>
                  {printWindDirection(data.current.wind_deg)}
                  {data.current.wind_speed.toFixed(1)}m/s
                </dd>
              </div>
              <div css={dataItemStyle}>
                <dt>気圧：</dt>
                <dd>{data.current.pressure}hPa</dd>
              </div>
              <div css={dataItemStyle}>
                <dt>湿度：</dt>
                <dd>{data.current.humidity}%</dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <div css={rootStyle}>
          <div css={currentTimeStyle} data-testid="datetime">
            <Skelton width="50%" height="1rem" />
          </div>
          <h2 css={currentLocationStyle}>
            <Skelton width="50%" height="1.75rem" />
          </h2>
          <div css={currentDataStyle}>
            <div style={{ marginRight: '1rem' }}>
              <Skelton width="50px" height="50px" radius="8px" />
            </div>
            <h3>
              <Skelton width="200px" height="3rem" />
            </h3>
          </div>
          <div css={dataListWrapperStyle}>
            <dl css={dataListStyle}>
              <div css={dataItemStyle}>
                <dt>
                  <Skelton width="8rem" />
                </dt>
                <dd>
                  <Skelton />
                </dd>
              </div>
              <div css={dataItemStyle}>
                <dt>
                  <Skelton width="8rem" />
                </dt>
                <dd>
                  <Skelton />
                </dd>
              </div>
              <div css={dataItemStyle}>
                <dt>
                  <Skelton width="8rem" />
                </dt>
                <dd>
                  <Skelton />
                </dd>
              </div>
              <div css={dataItemStyle}>
                <dt>
                  <Skelton width="8rem" />
                </dt>
                <dd>
                  <Skelton />
                </dd>
              </div>
              <div css={dataItemStyle}>
                <dt>
                  <Skelton width="8rem" />
                </dt>
                <dd>
                  <Skelton />
                </dd>
              </div>
              <div css={dataItemStyle}>
                <dt>
                  <Skelton width="8rem" />
                </dt>
                <dd>
                  <Skelton />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
});

export default CurrentInfo;

const rootStyle = css``;

const currentTimeStyle = css`
  color: #ec6e4c;
  font-size: 0.75rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const currentLocationStyle = css`
  font-size: 1.5rem;
`;

const currentDataStyle = css`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
  h3 {
    font-size: 2rem;
  }
`;

const dataListWrapperStyle = css`
  font-size: 1rem;
`;

const dataListStyle = css`
  display: flex;
  flex-wrap: wrap;
`;

const dataItemStyle = css`
  display: flex;
  flex-wrap: nowrap;
  dt {
    font-weight: bold;
  }
  dd {
    margin-right: 1rem;
  }
`;
