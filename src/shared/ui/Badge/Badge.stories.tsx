import { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@shared/ui/Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Status: Story = {
  args: {
    type: 'new',
    badgeType: 'status',
  },
};

export const Priority: Story = {
  args: {
    badgeType: 'priority',
    type: 'critical',
  },
};

export const KanbanStatus: Story = {
  args: {
    badgeType: 'kanban-status',
    type: 'new',
  },
};

export const Shortcut: Story = {
  args: {
    badgeType: 'shortcut',
    type: 'new',
    children: 'Shortcut',
  },
};
