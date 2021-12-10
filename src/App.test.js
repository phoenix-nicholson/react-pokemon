import { render } from '@testing-library/react';
import App from './App';

test('renders pokes correctly', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
