import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeContainer from './HomeContainer';

beforeEach(() => {
  jest.spyOn(window, 'alert').mockImplementation();
  jest.spyOn(console, 'log').mockImplementation();
  jest.spyOn(console, 'error').mockImplementation();
});

describe('Home component', () => {
  test('GoogleMap表示エリアが表示される', async () => {
    render(<HomeContainer />);
    expect(await screen.findByTestId('google-map')).toBeTruthy();
  });
});
