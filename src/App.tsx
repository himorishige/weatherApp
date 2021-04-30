import { useEffect } from 'react';
import Home from 'src/pages/Home';
import { useGeolocation } from 'src/hooks/useGeolocation';

import 'destyle.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
`;

const App: React.VFC = () => {
  const { updatePosition, position, loading, errorMessage } = useGeolocation();
  useEffect(() => {
    updatePosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyle />
      <Home position={position} />
    </>
  );
};

export default App;
