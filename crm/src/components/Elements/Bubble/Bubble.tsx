import React from "react";
import "./bubble.scss";
import createBubble from "./createBubble";

interface IBubble {
  children?: React.ReactNode;
  component?: string;
  className?: string;
  key?: string | number;
}

const Bubble: React.FC<IBubble> = ({
  children,
  className,
  component = "div",
  key,
}) => {
  return (
    <div
      className={className ? className + " bubble" : "bubble"}
      key={key}
      onClick={(e) =>
        createBubble(e.currentTarget, e.pageX, e.pageY, component)
      }
    >
      {children}
    </div>
  );
};

export default Bubble;
