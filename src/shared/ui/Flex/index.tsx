import { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
import { styled } from 'styled-components';

type StringCSSProperties = {
  [P in keyof CSSProperties]?: string;
};

interface FlexProps {
  as?: string;
  children?: ReactNode;
  align?: StringCSSProperties['alignItems'];
  justify?: StringCSSProperties['justifyContent'];
  direction?: StringCSSProperties['flexDirection'];
  wide?: StringCSSProperties['flex'];
  padding?: StringCSSProperties['padding'];
  margin?: StringCSSProperties['margin'];
}

export const Flex: FC<FlexProps> = ({
  as = 'div',
  children,
  align,
  justify,
  direction,
  wide,
  padding,
  margin,
}) => {
  const FlexComponent = styled(as)`
    display: flex;
    ${align && 'align-items: ' + align};
    ${justify && 'justify-content: ' + justify};
    ${direction && 'flex-direction: ' + direction};
    ${wide && 'flex: ' + wide};
    ${padding && 'padding: ' + padding};
    ${margin && 'margin: ' + margin};
  `;

  return <FlexComponent>{children}</FlexComponent>;
};
