import { useEffect } from 'react';
import Home from 'src/pages/Home';
import { useGeolocation } from 'src/hooks/useGeolocation';
import { Global } from '@emotion/react';
import { globalStyle } from 'src/styles';
import { Button } from 'src/components/atoms';

const App: React.VFC = () => {
  const { updatePosition, position, loading, errorMessage } = useGeolocation();
  useEffect(() => {
    updatePosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Global styles={globalStyle} />
      <Home position={position} />
      <Button />
    </>
  );
};

export default App;
