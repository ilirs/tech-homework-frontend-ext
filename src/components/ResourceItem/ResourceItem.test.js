import { render, unmountComponentAtNode } from 'react-dom';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import icon from 'assets/icons/store-online.png';

import ResourceItem from '../ResourceItem';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with title', () => {
  act(() => {
    render(<ResourceItem title="Hello" />, container);
  });
  expect(container.textContent).toBe('Hello');
});

it('renders with title and description', () => {
  act(() => {
    render(
      <ResourceItem size="lg" title="Hello" description="haha" />,
      container
    );
  });
  expect(container.textContent).toBe('Hellohaha');
});

it('renders with title and img', () => {
  act(() => {
    render(<ResourceItem size="lg" title="Hello" imageUrl={icon} />, container);
  });
  const logo = screen.getByTestId('item-img');
  expect(logo).toHaveAttribute('src', icon);
  expect(logo).toHaveAttribute('alt', 'img');
  expect(container.textContent).toBe('Hello');
});
