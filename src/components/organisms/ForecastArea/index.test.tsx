import { render, screen } from '@testing-library/react';
import ForecastArea, { Props } from '.';
import { data } from 'src/data/openweather';

const props: Props = {
  data: data,
};

describe('Organisms/ForecastArea', () => {
  it('データ受け取りまではローディング画面が表示される', () => {
    render(<ForecastArea data={null} />);
    expect(screen.getByTestId('skelton')).toBeTruthy();
    expect(screen.queryByTestId('forecast')).toBeNull();
  });
  it('データ受け取り後は予報データが表示される', () => {
    render(<ForecastArea {...props} />);
    expect(screen.queryByTestId('skelton')).toBeNull();
    expect(screen.getByTestId('forecast')).toBeTruthy();
  });
});
