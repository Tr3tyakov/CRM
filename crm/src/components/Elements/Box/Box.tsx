import React from "react";

interface IBox {
  children?: React.ReactNode;
  sx?: object;
  component?: string;
  justify?: string;
  display?: string;
  gap?: string;
  p?: string;
  m?: string;
  align?: string;
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
  align,
  onClick,
  className,
}) => {
  const style = {
    ...{
      justifyContent: justify,
      display,
      gap,
      padding: p,
      margin: m,
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
