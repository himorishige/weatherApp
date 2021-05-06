/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Position, WeatherData } from 'src/types';
import {
  CurrentInfo,
  SearchArea,
  MapArea,
  ForecastArea,
  GraphArea,
} from 'src/components/organisms';

export type Props = {
  position: Position;
  data: WeatherData | null;
  inputDisabled?: boolean;
  searchDisabled?: boolean;
  currentLocation?: string;
  inputHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clickHandler?: () => void;
};

const Home: React.VFC<Props> = ({
  position,
  data,
  currentLocation,
  inputHandler,
  clickHandler,
  searchDisabled,
  inputDisabled,
}) => {
  return (
    <div css={bodyWrapperStyle}>
      <div css={searchAreaStyle}>
        <SearchArea
          inputHandler={inputHandler}
          clickHandler={clickHandler}
          inputDisabled={inputDisabled}
          searchDisabled={searchDisabled}
        />
      </div>
      <div css={wrapperStyle}>
        <div css={currentInfoStyle}>
          <CurrentInfo data={data} currentLocation={currentLocation} />
        </div>
        <div css={mapAreaStyle}>
          <MapArea position={position} />
        </div>
      </div>
      <div css={wrapperStyle}>
        <div css={graphAreaStyle}>
          <GraphArea data={data} />
        </div>
        <div css={forecastAreaStyle}>
          <ForecastArea data={data} />
        </div>
      </div>
    </div>
  );
};

export default Home;

const bodyWrapperStyle = css`
  width: 768px;
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 767px) {
    width: 100%;
    padding: 1rem;
  }
`;

const searchAreaStyle = css`
  margin-bottom: 2rem;
`;

const wrapperStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    display: block;
  }
`;

const currentInfoStyle = css`
  width: 100%;
  padding-right: 2rem;
  @media (max-width: 767px) {
    padding: 0;
    margin-bottom: 2rem;
  }
`;

const mapAreaStyle = css`
  width: 100%;
`;

const graphAreaStyle = css`
  width: 70%;
  padding-right: 2rem;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
    margin-bottom: 2rem;
  }
`;

const forecastAreaStyle = css`
  width: 30%;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;
