import React, { useEffect, useState } from 'react';
import { useGeolocation } from 'src/hooks/useGeolocation';
import { useWeatherApi } from 'src/hooks/useWeatherApi';
import { useGoogleMaps } from 'src/hooks/useGoogleMaps';
import Home from './Home';

const HomeContainer: React.VFC = () => {
  const { updatePosition, position, loading, errorMessage, setPosition } = useGeolocation();
  const { loadingApi, fetchWeather, weatherData } = useWeatherApi();
  const { addressToPosition, gaPosition } = useGoogleMaps();

  const [keyword, setKeyword] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);
  const [searchDisabled, setSearchDisabled] = useState(true);

  const [currentLocation, setCurrentLocation] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
    setKeyword(event.target.value);
  };

  const clickHandler = async () => {
    setInputDisabled(true);
    await addressToPosition(keyword);
    setInputDisabled(false);
  };

  // 00 初回のみ geolocationAPI
  useEffect(() => {
    updatePosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 01 初回のみ geolocationAPIの情報を利用してOpenWeatherAPIから取得
  useEffect(() => {
    if (!loading) {
      fetchWeather(position);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // 02 検索結果からAPI情報を取得する
  useEffect(() => {
    if (gaPosition) {
      setPosition(gaPosition);
      fetchWeather(gaPosition);
      setCurrentLocation(keyword);
      console.log('gaposition');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gaPosition]);

  // if (loading || loadingApi) {
  //   return <div>loading...</div>;
  // }

  return (
    <>
      <Home
        position={position}
        data={weatherData}
        clickHandler={clickHandler}
        inputHandler={inputHandler}
        searchDisabled={searchDisabled}
        inputDisabled={inputDisabled}
        currentLocation={currentLocation}
      />
    </>
  );
};

export default HomeContainer;
