'use client';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactNode,
  forwardRef,
} from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  ref?: React.Ref<HTMLButtonElement>;
  variant?: 'filled' | 'ghost' | 'filter';
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  colorScheme?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  leftAddon?: ReactNode;
  topAddon?: ReactNode;
  rightAddon?: ReactNode;
  disabled?: boolean;
  height?: string;
}

const buttonSizes = {
  small: {
    height: '24px',
    any: '6px',
  },
  large: {
    height: '24px',
    any: '6px',
  },
};

const StyledButton = styled.button<ButtonProps>`
  ${({ theme, variant, colorScheme, size, topAddon, disabled, height }) => css`
    min-height: ${topAddon ? '56px' : '32px'};
    height: ${height && height};
    padding: 8px;
    gap: 8px;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s all ease;
    display: flex;
    align-items: center;
    flex-direction: ${topAddon ? 'column' : 'row'};

    ${(variant === 'filled' || variant === undefined) &&
    css`
      background-color: ${theme.colors[colorScheme ?? 'primary'].color};
      color: ${theme.colors[colorScheme ?? 'primary'].text};
      border-bottom: 2px solid ${theme.colors[colorScheme ?? 'primary'].border};

      &:hover {
        background-color: ${theme.colors[colorScheme ?? 'primary'].hover};
      }

      &:active {
        background-color: ${theme.colors[colorScheme ?? 'primary'].active};
      }

      &:disabled {
        cursor: not-allowed;
        background-color: ${theme.colors.grey[30]};
        color: ${theme.colors.grey[60]};
        border-bottom: 2px solid ${theme.colors.grey[40]};
      }
    `}

    ${variant === 'ghost' &&
    css`
      background-color: transparent;
      color: ${theme.colors.grey[60]};
      border: none;
      gap: ${size === 'small' && buttonSizes.small.any};
      padding: ${size === 'small' && buttonSizes.small.any};
      border-radius: ${size === 'small' && buttonSizes.small.any};
      min-height: ${size === 'small' && buttonSizes.small.height};

      &:hover {
        background-color: rgba(193, 199, 205, 0.24);
      }

      &:active {
        background-color: rgba(193, 199, 205, 0.32);
      }
    `}

    ${variant === 'filter' &&
    css`
      background-color: ${theme.colors.grey[10]};
      border-bottom: 2px solid ${theme.colors.grey[20]};
      color: ${theme.colors.grey[100]};

      ${!disabled &&
      css`
        &:hover {
          background-color: ${theme.colors.grey[20]};
        }

        &:active {
          background-color: ${theme.colors.grey[30]};
        }
      `};
    `};
  `}
`;

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
>(
  (
    {
      topAddon,
      leftAddon,
      rightAddon,
      children,
      variant,
      colorScheme,
      size,
      ...rest
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      topAddon={topAddon}
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      {...rest}
    >
      {topAddon && topAddon}
      {leftAddon && leftAddon}
      {children}
      {rightAddon && rightAddon}
    </StyledButton>
  )
);

Button.displayName = 'Button';
