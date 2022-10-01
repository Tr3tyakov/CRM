import React from "react";
import "./button.scss";
import createBubble from "../Bubble/createBubble";

export interface IButton {
  img?: string;
  children?: React.ReactNode;
  color?: string;
  alt?: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const BaseButton: React.FC<IButton> = ({
  img,
  children,
  color,
  style,
  onClick,
  alt,
}) => {
  function buttonClick(
    node: HTMLButtonElement,
    pageX: number,
    pageY: number,
    onClick: () => void
  ) {
    createBubble(node, pageX, pageY);
    onClick();
  }
  return (
    <button
      onClick={(e) => buttonClick(e.currentTarget, e.pageX, e.pageY, onClick)}
      style={style}
      className={"button"}
    >
      {children && <p style={{ color }}>{children}</p>}
      {img && <img src={img} alt={alt ? alt : "Изображение"} />}
    </button>
  );
};

export default BaseButton;
