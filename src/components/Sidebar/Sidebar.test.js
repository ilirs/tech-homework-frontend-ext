import { render, screen } from '@testing-library/react';

import Sidebar from '../Sidebar';

test('renders the sidebar', () => {
  render(<Sidebar title="Sidebar" />);

  expect(screen.getByTestId('sidebar')).toHaveTextContent(/Sidebar/);
  expect(screen.getByTestId('list')).toBeInTheDocument();
});
