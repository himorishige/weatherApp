import React from 'react';
import { data } from 'src/data/openweather';
import { CurrentInfo } from 'src/components/organisms';

const HomeTemplate: React.VFC = () => {
  return (
    <>
      <CurrentInfo data={data} />
    </>
  );
};

export default HomeTemplate;
