import { render, screen } from '@testing-library/react';
import CurrentInfo, { Props } from '.';
import { data } from 'src/data/openweather';

const props: Props = {
  data: data,
};

describe('Organisms/CurrentInfo', () => {
  it('現在日時が表示されている', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('datetime').textContent).toBeTruthy();
  });
  it('現在地が表示されている', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('location').textContent).toBeTruthy();
  });
  it('天気アイコンが表示されている', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('weather-img')).toContainHTML('img');
  });
  it('気温が表示されている', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('temp').textContent).toBeTruthy();
  });
  it('体感温度が表示されている', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('feels-like').textContent).toBeTruthy();
  });
  it('最高気温が表示される', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('temp-max').textContent).toBeTruthy();
  });
  it('最低気温が表示される', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('temp-min').textContent).toBeTruthy();
  });
  it('風向・風速が表示される', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('wind').textContent).toBeTruthy();
  });
  it('気圧が表示される', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('pressure').textContent).toBeTruthy();
  });
  it('現在地の湿度が表示される', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('humidity').textContent).toBeTruthy();
  });
});
