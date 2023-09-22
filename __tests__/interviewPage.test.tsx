import Interview from '@/app/spread/meonji/page';
import { userEvent } from '@storybook/testing-library';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

test('interview page', async () => {
  render(<Interview />);

  const progressBar = screen.getByRole('progressBar');
  const bottomBox = screen.getByRole('bottomBox');

  // 첫번째 단계
  expect(progressBar).toBeInTheDocument();
  expect(progressBar).toHaveStyle({ width: '0%' });
  expect(bottomBox).toBeInTheDocument();

  userEvent.click(bottomBox);
  await waitFor(() => screen.getByRole('button', { name: '응 맞아!' }));
  await waitFor(() => screen.getByRole('img', { name: 'meonji?' }));

  // 두번째 단계
  expect(progressBar).toHaveStyle({ width: '25%' });
  expect(screen.getByRole('button', { name: '응 맞아!' })).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: '응 맞아!' }));
  await waitForElementToBeRemoved(() =>
    screen.queryByRole('button', { name: '응 맞아!' })
  );
  await waitFor(() => screen.getByRole('img', { name: 'meonji!!' }));

  // 세번째 단계
  expect(
    screen.queryByRole('button', { name: '응 맞아!' })
  ).not.toBeInTheDocument();
  expect(progressBar).toHaveStyle({ width: '50%' });

  userEvent.click(bottomBox);
  await waitFor(() => screen.getByRole('img', { name: 'meonjiu' }));
});
