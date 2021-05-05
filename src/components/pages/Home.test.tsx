import React from 'react';
import { render, screen } from '@testing-library/react';
import Home, { Props } from 'src/components/pages/Home';
import { data } from 'src/data/openweather';

describe('OpenWeatherAPI', () => {
  test('緯度経度を表示する', () => {
    const props: Props = {
      position: {
        lat: 35.681236,
        lng: 139.767125,
      },
      data: data,
    };
    render(<Home {...props} />);
    const latitude = screen.getByTestId('latitude-from-webapi');
    const longitude = screen.getByTestId('longitude-from-webapi');
    expect(latitude).toHaveTextContent(/^[+-]?[0-9]+\.[0-9]+([eE][+-]?[0-9]+)?$/);
    expect(longitude).toHaveTextContent(/^[+-]?[0-9]+\.[0-9]+([eE][+-]?[0-9]+)?$/);
  });
});
it.todo('現在地のGoogleMapが表示される');
it.todo('一時間ごとの予測グラフが表示される');
it.todo('7日間の予報が表示される');
