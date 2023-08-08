import {
  cleanup,
  fireEvent,
  getByText,
  render,
  screen,
} from '@testing-library/react';

import ButtonTest from '@/app/ButtonTest';
import { userEvent } from '@storybook/testing-library';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('jest test', () => {
  render(<ButtonTest ph={'hi'} />);
  userEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('button')).toHaveTextContent('hi');
});
