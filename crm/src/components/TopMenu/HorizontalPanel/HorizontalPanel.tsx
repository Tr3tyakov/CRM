import React from "react";
import "./horizontalPanel.scss";
import SettingsModal from "./SettingsModal/SettingsModal";

import settings from "../../../images/settings.svg";
import gear from "../../../images/gear.svg";
import { IHorizontalPanel } from "../../Interface/IHorizontalPanel";
import { AppDispatch } from "../../Store/configureStore";

interface IHorizontalPanelProps {
  counters: IHorizontalPanel[];
}

const HorizontalPanel: React.FC<IHorizontalPanelProps> = ({ counters }) => {
  const [modal, setModal] = React.useState<boolean>(false);

  const setOpenModal = () => {
    setModal(true);
  };
  return (
    <>
      <SettingsModal
        counters={counters}
        openModal={modal}
        setOpenModal={setOpenModal}
      />
      <div className="horizontal-panel">
        <button className="block__settings" onClick={() => setModal(!modal)}>
          <img src={settings} alt="settings" />
        </button>
        <button className="block__gear">
          <img src={gear} alt="gear" />
        </button>
      </div>
    </>
  );
};

export default HorizontalPanel;
