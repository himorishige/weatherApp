import { useGeolocation } from 'src/hooks/useGeolocation';
import { renderHook } from '@testing-library/react-hooks';
import { cleanup, waitFor } from '@testing-library/react';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation();
});
afterEach(() => cleanup());

describe('useGeolocation custom hook', () => {
  test('初期値が東京駅の緯度経度になっている', () => {
    const { result } = renderHook(() => useGeolocation());
    expect(result.current.position).toStrictEqual({
      latitude: 35.681236,
      longitude: 139.767125,
    });
  });
  test('位置情報APIを利用できないブラウザではエラーになる', async () => {
    const { result } = renderHook(() => useGeolocation());
    await waitFor(() => result.current.updatePosition());
    expect(result.current.errorMessage).toBe(true);
  });
  test('エラーが出てもloadingが終了する', async () => {
    const { result } = renderHook(() => useGeolocation());
    await waitFor(() => result.current.updatePosition());
    expect(result.current.loading).toBe(false);
  });
});
