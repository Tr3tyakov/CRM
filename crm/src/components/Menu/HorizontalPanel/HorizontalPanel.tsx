import React from "react";
import "./horizontalPanel.scss";
import SettingsModal from "./SettingsModal/SettingsModal";

import settings from "../../../images/settings.svg";
import gear from "../../../images/gear.svg";
import { IPanel } from "../../Interface/IHorizontalPanel";
import clsx from "clsx";
import user from "../../../images/user.svg";
import Button from "../../Elements/Button/Button";

interface IHorizontalPanelProps {
  counters: IPanel[];
  leftMenuActive: boolean;
  horizontalPanelActive: boolean;
}

const HorizontalPanel: React.FC<IHorizontalPanelProps> = ({
  counters,
  leftMenuActive,
  horizontalPanelActive,
}) => {
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <>
      <SettingsModal
        counters={counters}
        setOpenModal={setModal}
        leftMenuActive={leftMenuActive}
        horizontalPanelActive={horizontalPanelActive}
        modal={modal}
      />

      <div
        className={clsx({
          "horizontal-panel": true,
          "horizontal-panel__full": !leftMenuActive,
        })}
      >
        <div className="horizontal-panel__flex-container">
          <Button
            img={settings}
            onClick={() => setModal(!modal)}
            alt={"Настройки"}
          ></Button>
          <Button img={gear} alt={"Настройки"}></Button>
        </div>
        <div className="horizontal-panel__flex-container">
          <div className="avatar-box">
            <div className="avatar-box__img-container">
              <img src={user} alt="" />
              <div className="avatar-box__circle">
                <p>10</p>
              </div>
            </div>
            <div className="avatar-box__info-container">
              <p>Третьяков Михаил</p>
              <button>Выйти</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalPanel;
