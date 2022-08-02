import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page', () => {
  render(<App />);

  const map = screen.getByTestId('map-gl');

  expect(screen.getByTestId('sidebar')).toHaveTextContent(/Stores/);
  expect(map).toBeInTheDocument();
});
