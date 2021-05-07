import React, { memo } from 'react';
import { Skelton } from 'src/components/atoms';
import { ForecastListItem } from 'src/components/molecules';
import { WeatherData } from 'src/types';

export type Props = {
  data: WeatherData | null;
};

const ForecastArea: React.VFC<Props> = memo(({ data }) => {
  return (
    <>
      <h2>7日間予報</h2>
      {data ? (
        <div data-testid="forecast">
          {data.daily.map((item) => <ForecastListItem key={item.dt} data={item} />).slice(0, 7)}
        </div>
      ) : (
        <div data-testid="skelton">
          <Skelton height="2.5rem" />
          <Skelton height="2.5rem" />
          <Skelton height="2.5rem" />
          <Skelton height="2.5rem" />
          <Skelton height="2.5rem" />
          <Skelton height="2.5rem" />
          <Skelton height="2.5rem" />
        </div>
      )}
    </>
  );
});

export default ForecastArea;
