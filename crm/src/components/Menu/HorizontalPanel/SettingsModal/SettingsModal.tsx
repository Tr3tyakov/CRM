import React from 'react';
import './settingsModal.scss';
import Checkbox from '../../../Elements/Checkbox/Checkbox';
import {
  changeHorizontalPanel,
  changePanel,
} from '../../../Store/Reducers/sync/horizontalPanel/horizontalPanelReducer';
import { useAppDispatch } from '../../../Hooks/useTypeSelector';
import ModalWrapper from '../../../Elements/Modal/Modal';
import SwitchButton from '../../../Elements/SwitchButton/SwitchButton';
import { changeActiveLeftMenu } from '../../../Store/Reducers/sync/VerticalPanel/verticalPanelReducer';
import { IPanel } from '../../../Store/Reducers/sync/horizontalPanel/horizontalPanel..interfaces';

interface ISettingsModal {
  counters: IPanel[];
  setOpenModal: Function;
  verticalPanelActive: boolean;
  horizontalPanelActive: boolean;
  modal: boolean;
}

const SettingsModal: React.FC<ISettingsModal> = ({
  counters,
  setOpenModal,
  verticalPanelActive,
  horizontalPanelActive,
  modal,
}) => {
  const dispatch = useAppDispatch();
  return (
    <ModalWrapper
      changeOpenModal={setOpenModal}
      modal={modal}
      title={'Настройка панелей быстрого доступа'}>
      <>
        <div>
          <p className="settings__subtitle">Меню</p>
        </div>
        <div className="settings__switch">
          <SwitchButton
            onChange={() => dispatch(changeActiveLeftMenu(verticalPanelActive))}
            checked={verticalPanelActive}
          />
          <p>Меню навигации</p>
        </div>
        <div className="settings__switch">
          <SwitchButton
            onChange={() => dispatch(changeHorizontalPanel(!horizontalPanelActive))}
            checked={horizontalPanelActive}
          />
          <p>Меню оповещения</p>
        </div>
        <div className="settings__checkbox">
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
                      }),
                    );
                  }}
                  checked={element.checked}
                  justifyContent="flex-start">
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
