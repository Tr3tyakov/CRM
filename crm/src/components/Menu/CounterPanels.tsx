import React from "react";
import cross from "../../images/cross.svg";
import HorizontalPanel from "./HorizontalPanel/HorizontalPanel";
import { useAppSelector, useAppDispatch } from "../Hooks/useTypeSelector";
import { changePanel } from "../Store/Reducers/horizontalPanelReducer";
import "./counterPanels.scss";
import clsx from "clsx";
import { IPanel } from "../Interface/IHorizontalPanel";

function CounterPanels() {
  const { horizontalPanel, leftMenuActive } = useAppSelector((state) => ({
    leftMenuActive: state.leftMenu.leftMenuActive,
    horizontalPanel: state.horizontalPanel,
  }));
  const dispatch = useAppDispatch();

  const changeCheckedPanel = (title: string, checked: boolean) => {
    dispatch(changePanel({ title, checked }));
  };

  return (
    <>
      <div
        className={clsx({
          "horizontal-container": true,
          "horizontal-container__full": !leftMenuActive,
        })}
      >
        <HorizontalPanel
          counters={horizontalPanel.panels}
          leftMenuActive={leftMenuActive}
          horizontalPanelActive={horizontalPanel.horizontalPanelOn}
        />
      </div>
      <div
        className={clsx({
          "menu-container": true,
          "menu-container__full": !leftMenuActive,
          "menu-container__disabled": !horizontalPanel.horizontalPanelOn,
        })}
      >
        <div className="counters">
          {horizontalPanel.panels.map((element: IPanel) => {
            if (element.checked) {
              return (
                <div className="counter" key={element.title}>
                  <div
                    className="counter__cross"
                    onClick={() => changeCheckedPanel(element.title, false)}
                  >
                    <img className={"cross__panel"} src={cross} alt="cross" />
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
    </>
  );
}
export default CounterPanels;
