import React from 'react';

type typeTypography = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type typeFontWeight = 300 | 400 | 500 | 700 | 900;
type typeGutterBottom = '4px' | '8px';
export type typeCursor = 'pointer' | 'none	' | 'progress' | 'wait' | 'move' | 'not-allowed';

interface ITypography {
  sx?: object;
  component?: typeTypography;
  p?: string;
  m?: string;
  className?: string;
  fontSize?: string;
  fontWeight?: typeFontWeight;
  gutterButtom?: typeGutterBottom;
  cursor?: typeCursor;
  color?: string;
  children?: string;
}

const Typography: React.FC<ITypography> = ({
  fontWeight,
  component = 'h2',
  cursor,
  fontSize,
  gutterButtom = '4px',
  color,
  m,
  p,
  sx,
  children,
  className,
}) => {
  const style = {
    ...{
      cursor,
      fontSize,
      marginBottom: gutterButtom,
      fontWeight,
      color,
      padding: p,
      margin: m,
    },
    ...sx,
  };
  return React.createElement(component, { style, className }, children);
};
export default Typography;
