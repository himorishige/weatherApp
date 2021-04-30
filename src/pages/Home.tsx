import { Position } from 'src/types';

export type Props = {
  position: Position;
};

const Home: React.VFC<Props> = ({ position }) => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h1>test</h1>
        <div>
          <span data-testid="latitude-from-webapi">{position?.latitude}</span>
          <span data-testid="longitude-from-webapi">{position?.longitude}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
