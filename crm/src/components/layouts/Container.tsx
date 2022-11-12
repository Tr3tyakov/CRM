import clsx from 'clsx';
import React from 'react';
import { useAppSelector } from '../Hooks/useTypeSelector';
import './container.scss';

interface IContainer {
  children: React.ReactNode;
}

const ContainerLayouts: React.FC<IContainer> = ({ children }) => {
  const { topMenuActive, leftMenuActive } = useAppSelector((state) => ({
    leftMenuActive: state.leftMenu.leftMenuActive,
    topMenuActive: state.horizontalPanel.horizontalPanelOn,
  }));

  return (
    <div
      className={clsx({
        container: true,
        'container__width--full': !leftMenuActive,
        'container__height--full': !topMenuActive,
      })}>
      {children}
    </div>
  );
};

export default ContainerLayouts;
