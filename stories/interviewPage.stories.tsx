import type { Meta, StoryObj } from '@storybook/react';

import Interview from '../app/spread/interview/page';

const meta = {
  title: 'Page/interviewPage',
  component: Interview,
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
} satisfies Meta<typeof Interview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {},
};
