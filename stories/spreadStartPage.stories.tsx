import type { Meta, StoryObj } from '@storybook/react';

import Spread from '../app/spread/page';

const meta = {
  title: 'Page/spreadPage',
  component: Spread,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className='text-body-0" flex h-screen w-screen justify-center bg-white'>
        <div className="w-full max-w-[450px]">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Spread>;

export default meta;

type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {},
};
