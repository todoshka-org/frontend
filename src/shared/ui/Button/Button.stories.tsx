import { Button } from '@shared/ui/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    children: 'filled',
    variant: 'filled',
  },
};

export const Ghost: Story = {
  args: {
    children: 'ghost',
    variant: 'ghost',
  },
};

export const Filter: Story = {
  args: {
    children: 'filter',
    variant: 'filter',
  },
};

