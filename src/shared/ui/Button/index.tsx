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
}

const StyledButton = styled.button<ButtonProps>`
  ${({
    theme,
    variant = 'filled',
    colorScheme = 'primary',
    size = 'large',
    topAddon,
    disabled,
  }) => css`
    height: ${topAddon ? '56px' : '32px'};
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
    ${variant === 'filled' &&
    css`
      background-color: ${theme.colors[colorScheme].color};
      color: ${theme.colors[colorScheme].text};
      border-bottom: 2px solid ${theme.colors[colorScheme].border};

      &:hover {
        background-color: ${theme.colors[colorScheme].hover};
      }

      &:active {
        background-color: ${theme.colors[colorScheme].active};
      }

      &:disabled {
        cursor: not-allowed;
        background-color: ${theme.colors.disabled.color};
        color: ${theme.colors.disabled.text};
        border-bottom: 2px solid ${theme.colors.disabled.border};
      }
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

StyledButton.defaultProps = {
  variant: 'filled',
  colorScheme: 'primary',
  size: 'large',
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
>((props, ref) => {
  const { topAddon, leftAddon, rightAddon, children } = props;
  return (
    <StyledButton ref={ref} {...props}>
      {topAddon && topAddon}
      {leftAddon && leftAddon}
      {children}
      {rightAddon && rightAddon}
    </StyledButton>
  );
});

Button.displayName = 'Button';
