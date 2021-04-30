import { useGeolocation } from 'src/hooks/useGeolocation';
import { act, renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';

afterEach(() => cleanup());

describe('useGeolocation custom hook', () => {
  test('position', () => {
    const { result } = renderHook(() => useGeolocation());
    expect(result.current.position).toStrictEqual({
      latitude: 35.681236,
      longitude: 139.767125,
    });
  });
});
