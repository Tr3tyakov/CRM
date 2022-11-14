import React from 'react';
import cross from '../../../images/cross.svg';
import { useAppSelector, useAppDispatch } from '../../Hooks/useTypeSelector';
import { changePanel } from '../../Store/Reducers/horizontalPanelReducer';
import './horizontalPanel.scss';
import clsx from 'clsx';
import { IPanel } from '../../Interface/IHorizontalPanel';
import HorizontalNavigation from './HorizontalNavigation/HorizontalNavigation';

function HorizontalPanel() {
  const { counterPanels, horizontalPanelActive, leftMenuActive, leftMenuVersion } = useAppSelector(
    (state) => ({
      leftMenuActive: state.leftMenu.leftMenuActive,
      leftMenuVersion: state.leftMenu.version,
      horizontalPanelActive: state.horizontalPanel.horizontalPanelOn,
      counterPanels: state.horizontalPanel.panels,
    }),
  );
  const dispatch = useAppDispatch();

  const changeCheckedPanel = (title: string, checked: boolean) => {
    dispatch(changePanel({ title, checked }));
  };

  return (
    <div
      className={clsx({
        horizontal__panel: true,
        horizontal__panel__small: leftMenuVersion === 'small',
        horizontal__panel__full: !leftMenuActive,
      })}>
      <HorizontalNavigation
        leftMenuActive={leftMenuActive}
        horizontalPanelActive={horizontalPanelActive}
        counters={counterPanels}
      />

      <div
        className={clsx({
          counters__panel: true,
          counters__panel__small: leftMenuVersion === 'small',
          counters__panel__full: !leftMenuActive,
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
