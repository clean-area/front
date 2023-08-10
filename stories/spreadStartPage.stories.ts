import type { Meta, StoryObj } from '@storybook/react';

import Spread from '../app/spread/page';

const meta = {
  title: 'Page/spreadPage',
  component: Spread,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Spread>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {},
};
