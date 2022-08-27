import React from "react";
import cross from "../../images/cross.svg";
import HorizontalPanel from "./HorizontalPanel/HorizontalPanel";
import {
  useAppSelector,
  useAppDispatch,
} from "../../components/Hooks/useTypeSelector";
import { editCounter } from "../Store/Reducers/horizontalPanelReducer";
import "./topMenu.scss";

function TopMenu() {
  const counters = useAppSelector(
    (horizontalPanelReducer) => horizontalPanelReducer.panel
  );
  const dispatch = useAppDispatch();

  const changeCheckedPanel = (title: string, checked: boolean) => {
    dispatch(editCounter({ title, checked }));
  };

  return (
    <div className="menu-container">
      <HorizontalPanel counters={counters} />
      <div className="counters">
        {counters.map((element, index) => {
          if (element.checked) {
            return (
              <div className="counter" key={index}>
                <div
                  className="counter__cross"
                  onClick={() => changeCheckedPanel(element.title, false)}
                >
                  <img className={"cross__panel"} src={cross} alt="cross" />
                </div>
                <div className="counter__title">
                  <h3>{element.title}</h3>
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
  );
}
export default TopMenu;
