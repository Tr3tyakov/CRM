import React from "react";
import "./settingsModal.scss";
import Checkbox from "../../../Elements/Checkbox/Checkbox";
import { IPanel } from "../../../Interface/IHorizontalPanel";
import {
  changeHorizontalPanel,
  changePanel,
} from "../../../Store/Reducers/horizontalPanelReducer";
import { useAppDispatch } from "../../../Hooks/useTypeSelector";
import ModalWrapper from "../../../Elements/Modal/Modal";
import SwitchButton from "../../../Elements/SwitchButton/SwitchButton";
import { changeLeftMenu } from "../../../Store/Reducers/leftMenuReducer";

interface ISettingsModal {
  counters: IPanel[];
  setOpenModal: Function;
  leftMenuActive: boolean;
  horizontalPanelActive: boolean;
  modal: boolean;
}

const SettingsModal: React.FC<ISettingsModal> = ({
  counters,
  setOpenModal,
  leftMenuActive,
  horizontalPanelActive,
  modal,
}) => {
  const dispatch = useAppDispatch();
  return (
    <ModalWrapper
      changeOpenModal={setOpenModal}
      modal={modal}
      title={"Настройка панелей быстрого доступа"}
    >
      <>
        <div>
          <p className="settings__subtitle">Меню</p>
        </div>
        <div className="switch-button__active-panel">
          <SwitchButton
            onChange={() => dispatch(changeLeftMenu(!leftMenuActive))}
            checked={leftMenuActive}
          />
          <p>Меню навигации</p>
        </div>
        <div className="switch-button__active-panel">
          <SwitchButton
            onChange={() =>
              dispatch(changeHorizontalPanel(!horizontalPanelActive))
            }
            checked={horizontalPanelActive}
          />
          <p>Меню оповещения</p>
        </div>
        <div className="settings__checkbox-block">
          <div>
            <p className="settings__subtitle">Блоки информации</p>
          </div>
          <div>
            {counters.map((element, index) => {
              return (
                <Checkbox
                  key={index}
                  onChange={() => {
                    dispatch(
                      changePanel({
                        title: element.title,
                        checked: !element.checked,
                      })
                    );
                  }}
                  checked={element.checked}
                >
                  <p>{element.title}</p>
                </Checkbox>
              );
            })}
          </div>
        </div>
      </>
    </ModalWrapper>
  );
};

export default SettingsModal;
