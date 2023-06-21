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

    ${variant === 'filled' && colorScheme === 'primary'
      ? css`
          background-color: ${disabled ? '#C1C7CD' : ' #8A3FFC;'};
          color: ${disabled ? '#697077' : '#FFF'};
          border-bottom: ${disabled
            ? '2px solid #A2A9B0;'
            : '2px solid #6929c4'};

          ${shortcut &&
          css`
            &::after {
              content: '${shortcut}';
              border: 1px solid #9d5efc;
              padding: 0 4px;
              border-radius: 4px;
            }
          `}

          ${!disabled &&
          css`
            &:hover {
              background-color: #7b37e1;
            }

            &:active {
              background-color: #7534d7;
            }
          `};
        `
      : css`
          background-color: ${disabled ? '#C1C7CD' : ' #DDE1E6;'};
          color: #121619;
          border-bottom: ${disabled
            ? '2px solid #A2A9B0'
            : '2px solid #C1C7CD'};

          ${shortcut &&
          css`
            &::after {
              content: '${shortcut}';
              border: 1px solid #c1c7cd;
              padding: 0 4px;
              border-radius: 4px;
            }
          `}

          ${!disabled &&
          css`
            &:hover {
              background-color: #cfd4d9;
            }

            &:active {
              background-color: #cacfd4;
            }
          `}
        `}
    ${variant === 'ghost' &&
    (size === 'large'
      ? css`
          background-color: transparent;
          color: #697077;
          border: none;

          &:hover {
            background-color: #f0f2f3;
          }

          &:active {
            background-color: #ebedef;
          }
        `
      : css`
          background-color: transparent;
          color: #697077;
          padding: 4px;
          height: 24px;
          border-radius: 4px;
          border: none;
          gap: 4px;

          &:hover {
            background-color: #f0f2f3;
          }

          &:active {
            background-color: #ebedef;
          }
        `)}
      ${variant === 'filter' &&
    css`
      background-color: #f2f4f8;
      border-bottom: 2px solid #dde1e6;
      color: #121619;

      ${!disabled &&
      css`
        &:hover {
          background-color: #e6eaee;
        }

        &:active {
          background-color: #e2e6ea;
        }
      `};
    `};
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
