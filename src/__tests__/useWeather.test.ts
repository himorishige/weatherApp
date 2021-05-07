/* eslint-disable @typescript-eslint/no-unused-vars */
import { renderHook } from '@testing-library/react-hooks';
import { cleanup, waitFor } from '@testing-library/react';
import { useWeatherApi } from 'src/hooks/useWeatherApi';
import { data } from 'src/data/openweather';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const position = {
  lat: 35.681236,
  lng: 139.767125,
};

const server = setupServer(
  rest.get('/onecall', (req, res, ctx) => {
    const query = req.url.searchParams;
    const lat = query.get('lat');
    const lon = query.get('lon');
    const units = query.get('units');
    const lang = query.get('lang');
    const exclude = query.get('exclude');
    const appid = query.get('appid');
    return res(ctx.status(200), ctx.json(data));
  }),
);

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation();
  jest.spyOn(console, 'error').mockImplementation();
});

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe('useWeatherApi/fetchWeather', () => {
  test('api', async () => {
    const { result } = renderHook(() => useWeatherApi());
    await waitFor(() => result.current.fetchWeather(position));
    expect(result.current.weatherData).toBeTruthy();
  });
});
