import React from 'react';
import './bubble.scss';
import createBubble from './createBubble';

interface IBubble {
  children?: React.ReactNode;
  component?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Bubble: React.FC<IBubble> = ({ children, style, className, component = 'div' }) => {
  return (
    <div
      style={style}
      className={className ? className + ' bubble' : 'bubble'}
      onClick={(e) => createBubble(e.currentTarget, e.pageX, e.pageY, component)}>
      {children}
    </div>
  );
};

export default Bubble;
