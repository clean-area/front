import Spread from '@/app/spread/page';
import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';

test('renders the landing page', () => {
  render(<Spread />);

  expect(screen.getByRole('heading')).toHaveTextContent(/청정구역/);
  expect(screen.getByRole('img', { name: 'meonji' })).toBeInTheDocument();
});
