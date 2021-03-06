import { useCallback, useState } from 'react';
import { Position } from 'src/types';

export const useGeolocation = () => {
  const initialPosition: Position = {
    // 初期値 東京駅
    lat: 35.681236,
    lng: 139.767125,
  };
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [position, setPosition] = useState<Position>(initialPosition);

  const getCurrentPosition = useCallback(
    (options?: PositionOptions): Promise<GeolocationPosition> =>
      new Promise(
        (
          resolve: (position: GeolocationPosition) => void,
          reject: (positionError: GeolocationPositionError) => void,
        ) => {
          // 位置情報APIが利用できない場合
          if (!navigator.geolocation) {
            const error: GeolocationPositionError = {
              code: 99,
              message: 'geolocation not supported',
              PERMISSION_DENIED: 1,
              POSITION_UNAVAILABLE: 2,
              TIMEOUT: 3,
            };
            reject(error);
          }

          const successCallback: PositionCallback = (position: GeolocationPosition): void => {
            resolve(position);
          };

          const errorCallback: PositionErrorCallback = (
            positionError: GeolocationPositionError,
          ): void => {
            reject(positionError);
          };

          navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
        },
      ),
    [],
  );

  const updatePosition = useCallback(async () => {
    setLoading(true);
    setErrorMessage(false);
    try {
      const currentPosition = await getCurrentPosition();
      console.log(currentPosition);
      setPosition({
        lat: currentPosition.coords.latitude,
        lng: currentPosition.coords.longitude,
      });
    } catch (err) {
      const error = err as GeolocationPositionError;
      console.log(error.message);
      alert('現在地情報が取得できなかったため、東京の天気を表示します。');
      setErrorMessage(true);
    } finally {
      setLoading(false);
    }
  }, [getCurrentPosition]);

  return { updatePosition, position, loading, errorMessage, setPosition };
};
