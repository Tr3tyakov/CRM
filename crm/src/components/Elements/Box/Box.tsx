import React from "react";

interface IBox {
  children?: React.ReactNode;
  sx?: object;
  component?: string;
  justify?: string;
  display?: string;
  gap?: string;
  width?: string;
  height?: string;
  overflow?: string;
  p?: string;
  m?: string;
  align?: string;
  flexDirection?: string;
  wrap?: string;
  onClick?: () => void;
  className?: string;
}

const Box: React.FC<IBox> = ({
  children,
  sx,
  component = "div",
  justify,
  display,
  gap,
  p,
  m,
  wrap,
  width,
  height,
  align,
  overflow,
  flexDirection,
  onClick,
  className,
}) => {
  const style = {
    ...{
      justifyContent: justify,
      display,
      gap,
      width,
      height,
      padding: p,
      margin: m,
      overflow,
      flexDirection,
      flexWrap: wrap,
      alignItems: align,
    },
    ...sx,
  };
  return React.createElement(
    component,
    { style, className, onClick },
    children
  );
};
export default Box;
