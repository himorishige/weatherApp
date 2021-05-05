import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Input from '.';

describe('Atoms/Input', () => {
  it('placeholderに（例）東京が表示される', () => {
    render(<Input />);
    const inputElement = screen.getByTestId('input') as HTMLInputElement;
    expect(inputElement.placeholder).toBe('（例）東京');
  });
  it('検索フィールドに1を入力したら1が表示される', () => {
    render(<Input />);
    const inputElement = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: '1' } });
    expect(inputElement.value).toBe('1');
  });
  it('正しくレンダリングされている', () => {
    const inputField = renderer.create(<Input />).toJSON();
    expect(inputField).toMatchSnapshot();
  });
});
