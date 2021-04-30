import { render, screen } from '@testing-library/react';
import Home, { Props } from 'src/pages/Home';

describe('OpenWeatherAPI', () => {
  test('現在地の緯度経度を表示する', async () => {
    const props: Props = {
      position: {
        latitude: 35.681236,
        longitude: 139.767125,
      },
    };
    render(<Home {...props} />);
    const latitude = screen.getByTestId('latitude-from-webapi');
    const longitude = screen.getByTestId('longitude-from-webapi');
    expect(latitude).toHaveTextContent(/^[+-]?[0-9]+\.[0-9]+([eE][+-]?[0-9]+)?$/);
    expect(longitude).toHaveTextContent(/^[+-]?[0-9]+\.[0-9]+([eE][+-]?[0-9]+)?$/);
  });
});
