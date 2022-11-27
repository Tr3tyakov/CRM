import clsx from 'clsx';
import React from 'react';
import { useAppSelector } from '../Hooks/useTypeSelector';
import './containerLayout.scss';

interface IContainer {
  children: React.ReactNode;
}

const ContainerLayouts: React.FC<IContainer> = ({ children }) => {
  const { horizontalPanelActive, verticalPanelActive, leftMenuVersion } = useAppSelector(
    ({ horizontalPanel, verticalPanel }) => ({
      verticalPanelActive: verticalPanel.active,
      horizontalPanelActive: horizontalPanel.active,
      leftMenuVersion: verticalPanel.version,
    }),
  );

  return (
    <div
      className={clsx({
        container: true,
        container__height: !horizontalPanelActive,
        container__width__small: leftMenuVersion === 'small',
        container__width__full: !verticalPanelActive,
      })}>
      {children}
    </div>
  );
};

export default ContainerLayouts;
