import { useCallback, useState } from 'react';
import axios from 'axios';

import { WeatherData, Position } from 'src/types';

const API_URL = process.env.REACT_APP_OPENWEATHER_API_URL || '';
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY || '';

export const useWeatherApi = () => {
  const [loadingApi, setLoadingApi] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const fetchWeather = useCallback(async (position: Position) => {
    setLoadingApi(true);
    try {
      const URL = `${API_URL}/onecall?lat=${position.lat}&lon=${position.lng}&units=metric&lang=ja&exclude=minutely&appid=${API_KEY}`;
      const res = await axios.get<WeatherData>(URL);
      console.log(res.data);
      setWeatherData(res.data);
    } catch (error) {
      alert('データが正しく取得できませんでした。');
    } finally {
      setLoadingApi(false);
    }
  }, []);

  return { loadingApi, fetchWeather, weatherData };
};
