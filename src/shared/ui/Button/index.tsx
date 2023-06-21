'use client';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  MouseEventHandler,
  ReactNode,
} from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'filled' | 'ghost' | 'filter';
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  colorScheme?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  shortcut?: string;
  leftAddon?: ReactNode;
  topAddon?: ReactNode;
  rightAddon?: ReactNode;
}

export const Button: FC<
  ButtonProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = props => {
  const {
    variant = 'filled',
    colorScheme = 'primary',
    size = 'large',
    disabled,
    shortcut,
    children,
    leftAddon,
    rightAddon,
    topAddon,
  } = props;
  const Btn = styled.button`
    ${({ theme }) => css`
      height: ${topAddon ? '56px' : '32px'};
      padding: 8px;
      gap: 8px;
      border: none;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      border-radius: 8px;
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      transition: 0.2s all ease;
      display: flex;
      align-items: center;
      flex-direction: ${topAddon ? 'column' : 'row'};

      ${variant === 'filled' &&
      css`
        background-color: ${disabled
          ? theme.colors.disabled.color
          : theme.colors[colorScheme].color};
        color: ${disabled
          ? theme.colors.disabled.text
          : theme.colors[colorScheme].text};
        border-bottom: 2px solid
          ${disabled
            ? theme.colors.disabled.border
            : theme.colors[colorScheme].border};

        ${shortcut &&
        css`
          &::after {
            content: '${shortcut}';
            border: 1px solid
              ${disabled
                ? theme.colors.disabled.border
                : theme.colors[colorScheme].border};
            padding: 0 4px;
            border-radius: 4px;
          }
        `}

        ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.colors[colorScheme].hover};
          }

          &:active {
            background-color: ${theme.colors[colorScheme].active};
          }
        `};
      `}

      ${variant === 'ghost' &&
      css`
        background-color: transparent;
        color: ${theme.colors.ghost.text};
        border: none;
        gap: ${size === 'small' && '4px'};
        padding: ${size === 'small' && '4px'};
        border-radius: ${size === 'small' && '4px'};
        height: ${size === 'small' && '24px'};

        &:hover {
          background-color: ${theme.colors.ghost.hover};
        }

        &:active {
          background-color: ${theme.colors.ghost.active};
        }
      `}

      ${variant === 'filter' &&
      css`
        background-color: ${theme.colors.filter.color};
        border-bottom: 2px solid ${theme.colors.filter.border};
        color: ${theme.colors.filter.text};

        ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.colors.filter.hover};
          }

          &:active {
            background-color: ${theme.colors.filter.active};
          }
        `};
      `};
    `}
  `;

  return (
    <Btn {...props}>
      {topAddon && topAddon}
      {leftAddon && leftAddon}
      {children}
      {rightAddon && rightAddon}
    </Btn>
  );
};
