import React from 'react';
import './button.scss';
import Bubble from '../Bubble/Bubble';

export interface IButton {
  img?: string;
  children?: React.ReactNode;
  color?: string;
  alt?: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const BaseButton: React.FC<IButton> = ({ img, children, color, style, onClick, alt }) => {
  return (
    <Bubble onClick={onClick} className="button" style={style}>
      <div>
        {children && <p style={{ color }}>{children}</p>}
        {img && <img src={img} alt={alt ? alt : 'Изображение'} />}
      </div>
    </Bubble>
  );
};

export default BaseButton;
