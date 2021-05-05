import { useCallback, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import { Position } from 'src/types';

export const useGoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY || '',
  });
  const [gaPosition, setPosition] = useState<Position | null>(null);
  const [address, setAddress] = useState('');

  const positionToAddress = useCallback(
    async (position: Position) => {
      if (isLoaded) {
        const geocoder = new window.google.maps.Geocoder();
        const latlng = new window.google.maps.LatLng(position.lat, position.lng);

        geocoder.geocode(
          {
            location: latlng,
          },
          (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
            setAddress(results[0].formatted_address);
          },
        );
      }

      if (loadError) {
        console.log('緯度経度から住所への変換に失敗しました');
      }
    },
    [isLoaded, loadError],
  );

  const addressToPosition = useCallback(
    async (address: string) => {
      if (isLoaded) {
        const geocoder = new window.google.maps.Geocoder();

        geocoder.geocode(
          {
            address: address,
            region: 'jp',
          },
          async (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
            if (status === google.maps.GeocoderStatus.OK) {
              console.log('緯度検索結果', results[0].geometry.location.toJSON());
              setPosition(results[0].geometry.location.toJSON());
            }
          },
        );
      }

      if (loadError) {
        console.log('住所から緯度経度への変換に失敗しました');
      }

      return gaPosition;
    },
    [gaPosition, isLoaded, loadError],
  );

  return {
    positionToAddress,
    addressToPosition,
    address,
    isLoaded,
    loadError,
    GoogleMap,
    gaPosition,
  };
};
