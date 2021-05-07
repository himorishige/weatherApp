import React, { memo } from 'react';
import { Line } from 'react-chartjs-2';
import { WeatherData } from 'src/types';

import { useHelper } from 'src/hooks/useHelper';
import { Skelton } from 'src/components/atoms';

export type Props = {
  data: WeatherData | null;
};

const GraphArea: React.VFC<Props> = memo(({ data }) => {
  const { formatUnixtime } = useHelper();

  const labels = data?.hourly.map((hourData) => formatUnixtime(hourData.dt, 'H時')).slice(1, 9);

  const houlyTemp = data?.hourly.map((houlyTemp) => houlyTemp.temp.toFixed(1)).slice(1, 9);

  const graphData = {
    labels: labels ?? [],
    datasets: [
      {
        label: '気温',
        data: houlyTemp ?? [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0,
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: 2000,
    plugins: {
      tooltip: {
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: '時刻',
          font: {
            size: 14,
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: '気温',
          font: {
            size: 14,
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
      },
    },
  };

  return (
    <>
      <h2>1時間ごとの予想気温</h2>
      {data ? (
        <div data-testid="graph">
          <Line type={Line} data={graphData} width={100} height={70} options={options} />
        </div>
      ) : (
        <div data-testid="skelton">
          <Skelton height="320px" />
        </div>
      )}
    </>
  );
});

export default GraphArea;
