import React from "react";
import "./button.scss";

interface IButton {
  img?: any;
  title?: string;
  color?: string;
  bgColor?: string;
  alt?: string;
  onClick?: any;
}

const Button: React.FC<IButton> = ({
  img,
  title,
  bgColor = "inherit",
  color = "white",
  onClick,
  alt,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className={"button"}
    >
      {title && <p style={{ color }}>{title}</p>}
      {img && <img src={img} alt={alt ? alt : "Изображение"} />}
    </button>
  );
};

export default Button;
