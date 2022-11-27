import React from 'react';
import cross from '../../../images/cross.svg';
import { useAppSelector, useAppDispatch } from '../../Hooks/useTypeSelector';
import { changePanel } from '../../Store/Reducers/sync/horizontalPanel/horizontalPanelReducer';
import './horizontalPanel.scss';
import clsx from 'clsx';
import HorizontalNavigation from './HorizontalNavigation/HorizontalNavigation';
import { IPanel } from '../../Store/Reducers/sync/horizontalPanel/horizontalPanel..interfaces';

function HorizontalPanel() {
  const { counterPanels, horizontalPanelActive, verticalPanelActive, verticalPanelVersion } =
    useAppSelector(({ verticalPanel, horizontalPanel }) => ({
      verticalPanelActive: verticalPanel.active,
      verticalPanelVersion: verticalPanel.version,
      horizontalPanelActive: horizontalPanel.active,
      counterPanels: horizontalPanel.panels,
    }));
  const dispatch = useAppDispatch();

  const changeCheckedPanel = (title: string, checked: boolean) => {
    dispatch(changePanel({ title, checked }));
  };

  return (
    <div
      className={clsx({
        horizontal__panel: true,
        horizontal__panel__small: verticalPanelVersion === 'small',
        horizontal__panel__full: !verticalPanelActive,
      })}>
      <HorizontalNavigation
        verticalPanelActive={verticalPanelActive}
        horizontalPanelActive={horizontalPanelActive}
        counters={counterPanels}
      />

      <div
        className={clsx({
          counters__panel: true,
          counters__panel__small: verticalPanelVersion === 'small',
          counters__panel__full: !verticalPanelActive,
          'counters__panel--disabled': !horizontalPanelActive,
        })}>
        <div className="counters">
          {counterPanels.map((element: IPanel) => {
            if (element.checked) {
              return (
                <div className="counter" key={element.title}>
                  <div
                    className="counter__cross"
                    onClick={() => changeCheckedPanel(element.title, false)}>
                    <img className={'cross__panel'} src={cross} alt="cross" />
                  </div>
                  <div className="counter__title">
                    <p>{element.title}</p>
                  </div>
                  <div className="counter__number">
                    <p>{element.quantity}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default HorizontalPanel;
