import { render, screen } from '@testing-library/react';
import CurrentInfo, { Props } from '.';
import { data } from 'src/data/openweather';
it.todo('現在地が表示される');
it.todo('現在地の天気アイコンが表示される');
it.todo('現在地の気温が表示される');
it.todo('現在地の体感温度が表示される');
it.todo('現在地の今日の最高気温が表示される');
it.todo('現在地の今日の最低気温が表示される');
it.todo('現在地の風向・風速が表示される');
it.todo('現在地の気圧が表示される');
it.todo('現在地の湿度が表示される');

const props: Props = {
  data: data,
};

describe('Organisms/CurrentInfo', () => {
  it('現在日時が表示されている', () => {
    render(<CurrentInfo {...props} />);
    expect(screen.getByTestId('datetime').textContent).toBeTruthy();
  });
});
