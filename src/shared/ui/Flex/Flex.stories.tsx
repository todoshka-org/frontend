import { Flex } from '@shared/ui/Flex';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Flex> = {
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const FlexComponent: Story = {
  args: {
    children: 'Flex',
    justify: 'center',
    align: 'center',
    as: 'ul',
    padding: 0,
  },
};
