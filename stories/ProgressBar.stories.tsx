import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from '../app/components/ProgressBar';

const meta = {
  title: 'Component/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen w-screen items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: { percent: 40, width: '90%' },
};
