import { render, screen } from '@testing-library/react';
import GraphArea, { Props } from '.';
import { data } from 'src/data/openweather';

const props: Props = {
  data: data,
};

beforeEach(() => {
  jest.spyOn(window, 'addEventListener').mockImplementation();
});

describe('Organisms/ForecastArea', () => {
  it('データ受け取りまではローディング画面が表示される', () => {
    render(<GraphArea data={null} />);
    expect(screen.getByTestId('skelton')).toBeTruthy();
  });
});
