import React, { ReactElement } from "react";
import "./button.scss";

export interface IButton {
  img?: any;
  children?: any;
  color?: string;
  alt?: string;
  onClick?: any;
  style?: any;
}

const BaseButton: React.FC<IButton> = ({
  img,
  children,
  color,
  style,
  onClick,
  alt,
}) => {
  return (
    <button onClick={onClick} style={style} className={"button"}>
      {children && <p style={{ color }}>{children}</p>}
      {img && <img src={img} alt={alt ? alt : "Изображение"} />}
    </button>
  );
};

export default BaseButton;
