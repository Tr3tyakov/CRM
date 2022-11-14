import React from 'react';
import BaseButton, { IButton } from '../Elements/Button/Button';
import theme from './theme';

interface IThemeButtonProps {
  theme?: string;
  children?: HTMLElement | string;
}

const WhiteThemeButton = (Button: React.FC<IButton>) => (props: IThemeButtonProps | any) => {
  if (props.theme === 'white') {
    return (
      <Button
        {...props}
        style={{
          backgroundColor: theme.color.white,
          boxShadow: theme.boxShadow.white,
          color: theme.color.black,
        }}>
        {props.children && props.children}
      </Button>
    );
  }

  return <Button {...props}>{props.children && props.children}</Button>;
};
export const BlackThemeButton = (Button: React.FC<IButton>) => (props: IThemeButtonProps | any) => {
  if (props.theme === 'black') {
    return (
      <Button
        {...props}
        style={{
          backgroundColor: theme.color.black,
          boxShadow: theme.boxShadow.black,
          color: theme.boxShadow.white,
        }}>
        {props.children && props.children}
      </Button>
    );
  }

  return <Button {...props}>{props.children && props.children}</Button>;
};

type IHOC = typeof WhiteThemeButton;

const compare =
  (...HOCS: IHOC[]) =>
  (base: React.FC<IButton>) =>
    HOCS.reduce((component, HOC) => HOC(component), base);

const Button = compare(WhiteThemeButton, BlackThemeButton)(BaseButton);

export default Button as React.FC<IThemeButtonProps | IButton>;
