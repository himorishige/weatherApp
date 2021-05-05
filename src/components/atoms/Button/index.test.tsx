import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '.';

describe('Atoms/Button', () => {
  it('正しくレンダリングされている', () => {
    const button = renderer.create(<Button />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
