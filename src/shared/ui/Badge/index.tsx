import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface BadgeProps {
  children?: ReactNode;
  type?:
    | 'normal'
    | 'minor'
    | 'major'
    | 'critical'
    | 'new'
    | 'progress'
    | 'paused'
    | 'done';
  badgeType?: 'status' | 'priority' | 'kanban-status' | 'shortcut';
  extended?: boolean;
}

const StatusBadge = styled.div<BadgeProps>`
  ${({ type, theme }) => css`
    padding: 2px 4px;
    width: max-content;
    border-radius: 4px;
    font-size: 13px;

    ${(type === 'new' || !type) &&
    css`
      background-color: ${theme.colors.grey[10]};
    `}

    ${type === 'progress' &&
    css`
      background-color: ${theme.colors.purple[10]};
      color: ${theme.colors.purple[60]};
    `}

  ${type === 'paused' &&
    css`
      background-color: ${theme.colors.red[10]};
      color: ${theme.colors.red[60]};
    `}

    ${type === 'done' &&
    css`
      background-color: ${theme.colors.green[10]};
      color: ${theme.colors.green[60]};
    `}
  `}
`;

const PriorityBadge = styled.div<BadgeProps>`
  ${({ type = 'default', theme }) => css`
    padding: 2px 4px;
    width: max-content;
    border-radius: 4px;
    font-size: 13px;

    ${type === 'normal' &&
    css`
      background-color: ${theme.colors.grey[10]};
    `}

    ${type === 'minor' &&
    css`
      background-color: ${theme.colors.grey[10]};
      color: ${theme.colors.grey[60]};
    `}

  ${type === 'major' &&
    css`
      background-color: ${theme.colors.red[10]};
      color: ${theme.colors.red[60]};
    `}

    ${type === 'critical' &&
    css`
      background-color: ${theme.colors.red[60]};
      color: #fff;
    `}
  `}
`;

const KanbanStatusBadge = styled.div<BadgeProps>`
  ${({ type, theme }) => css`
    padding: 2px 4px;
    width: max-content;
    border-radius: 4px;
    font-size: 13px;
    color: #fff;

    ${(type === 'new' || !type) &&
    css`
      background-color: ${theme.colors.grey[60]};
    `}

    ${type === 'progress' &&
    css`
      background-color: ${theme.colors.purple[60]};
      color: ${theme.colors.purple[10]};
    `}

  ${type === 'paused' &&
    css`
      background-color: ${theme.colors.red[60]};
      color: ${theme.colors.red[10]};
    `}

    ${type === 'done' &&
    css`
      background-color: ${theme.colors.green[60]};
      color: ${theme.colors.green[10]};
    `}
  `}
`;

const ShortcutBadge = styled.div<BadgeProps>`
  padding: 0 4px;
  width: max-content;
  border-radius: 4px;
  border: 1px solid #ff00bf;
  color: #ff00bf;
  font-size: 11px;
  font-weight: 300;
  line-height: 16px;
`;

export const Badge: FC<BadgeProps> = ({
  type = 'new',
  badgeType = 'status',
  extended = true,
  children,
}) => {
  if (badgeType === 'priority') {
    return (
      <PriorityBadge type={type}>
        {(type === 'normal' && (extended ? 'Normal' : 'N')) ||
          (type === 'minor' && (extended ? 'Minor' : 'M')) ||
          (type === 'major' && (extended ? 'Major' : 'M')) ||
          (type === 'critical' && (extended ? 'Critical' : 'C'))}
      </PriorityBadge>
    );
  }

  if (badgeType === 'kanban-status') {
    return (
      <KanbanStatusBadge type={type}>
        {(type === 'new' && 'New') ||
          (type === 'progress' && 'In progress') ||
          (type === 'paused' && 'Paused') ||
          (type === 'done' && 'Done')}
      </KanbanStatusBadge>
    );
  }

  if (badgeType === 'shortcut') {
    return <ShortcutBadge>{children}</ShortcutBadge>;
  }

  return (
    <StatusBadge type={type}>
      {(type === 'new' && 'New') ||
        (type === 'progress' && 'In progress') ||
        (type === 'paused' && 'Paused') ||
        (type === 'done' && 'Done')}
    </StatusBadge>
  );
};

Badge.displayName = 'Badge';
