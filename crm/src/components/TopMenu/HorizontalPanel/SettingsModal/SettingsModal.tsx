import React from "react";
import "./settingsModal.scss";
import cross from "../../../../images/cross.svg";
import Checkbox from "../../../Elements/Checkbox/Checkbox";
import { IHorizontalPanel } from "../../../Interface/IHorizontalPanel";
import { editCounter } from "../../../Store/Reducers/horizontalPanelReducer";
import { useAppDispatch } from "../../../Hooks/useTypeSelector";

interface ISettingsModal {
  counters: IHorizontalPanel[];
  openModal: boolean;
  setOpenModal: Function;
}

const SettingsModal: React.FC<ISettingsModal> = ({
  counters,
  setOpenModal,
  openModal,
}): any => {
  const dispatch = useAppDispatch();
  if (openModal) {
    return (
      <div className="background-modal" onClick={() => setOpenModal(false)}>
        <div className="modal-container">
          <div className="settings-modal">
            <div
              className="settings-modal__cross-block"
              onClick={() => setOpenModal(false)}
            >
              <img src={cross} alt="cross" />
            </div>
            <div className="settings-modal__title">
              <h3>Выберете, что вы хотите видеть на панели</h3>
            </div>
            <div className="settings-modal__checkbox-block">
              {counters.map((element, index) => {
                return (
                  <Checkbox
                    key={index}
                    onClick={() => {
                      dispatch(
                        editCounter({
                          title: element.title,
                          checked: element.checked,
                        })
                      );
                    }}
                  >
                    <p>{element.title}</p>
                  </Checkbox>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SettingsModal;
