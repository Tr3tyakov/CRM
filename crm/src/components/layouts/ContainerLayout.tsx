import clsx from 'clsx';
import React from 'react';
import { useAppSelector } from '../Hooks/useTypeSelector';
import './containerLayout.scss';

interface IContainer {
  children: React.ReactNode;
}

const ContainerLayouts: React.FC<IContainer> = ({ children }) => {
  const { topMenuActive, leftMenuActive, leftMenuVersion } = useAppSelector((state) => ({
    leftMenuActive: state.leftMenu.leftMenuActive,
    topMenuActive: state.horizontalPanel.horizontalPanelOn,
    leftMenuVersion: state.leftMenu.version,
  }));

  return (
    <div
      className={clsx({
        container: true,
        container__height: !topMenuActive,
        container__width__small: leftMenuVersion === 'small',
        container__width__full: !leftMenuActive,
      })}>
      {children}
    </div>
  );
};

export default ContainerLayouts;
