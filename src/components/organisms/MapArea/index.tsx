import React from 'react';
import { useGoogleMaps } from 'src/hooks/useGoogleMaps';

import { Position } from 'src/types';
export type Props = {
  position: Position;
};

const mapContainerStyle = {
  height: '280px',
  width: '100%',
};

export const MapArea: React.VFC<Props> = ({ position }) => {
  const { isLoaded, GoogleMap } = useGoogleMaps();

  return (
    <>
      {isLoaded && (
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={11}
          center={{
            lat: position.lat,
            lng: position.lng,
          }}
          options={{
            disableDefaultUI: true,
          }}
        ></GoogleMap>
      )}
    </>
  );
};

export default MapArea;
