import 'destyle.css';
import { Global } from '@emotion/react';
import { globalStyle } from 'src/styles';
import HomeContainer from 'src/components/pages/HomeContainer';

const App: React.VFC = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <HomeContainer />
    </>
  );
};

export default App;
