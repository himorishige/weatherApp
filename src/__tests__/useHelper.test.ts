import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import { useHelper } from 'src/hooks/useHelper';

afterEach(() => cleanup());

describe('useHelper/formatUnixtime', () => {
  test('unixtime 1619838000 が5月1日に変換される', () => {
    const { result } = renderHook(() => useHelper());
    expect(result.current.formatUnixtime(1619838000)).toBe('5月1日');
  });
  test('unixtimeを渡さない場合errorと表示される', () => {
    const { result } = renderHook(() => useHelper());
    expect(result.current.formatUnixtime(undefined)).toBe('error');
  });
});

describe('useHelper/printWindDirection', () => {
  test('風向き情報（100°）を渡すと矢印➡️に変換される', () => {
    const { result } = renderHook(() => useHelper());
    expect(result.current.printWindDirection(100)).toBe('➡️');
  });
});

describe('useHelper/fixFloat', () => {
  test('1.1234と桁数1を渡すと1.1に変換される', () => {
    const { result } = renderHook(() => useHelper());
    expect(result.current.fixFloat(1.1234, 1)).toBe('1.1');
  });
});
