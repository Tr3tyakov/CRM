import React, { ReactElement } from "react";
import "./modal.scss";
import cross from "../../../images/cross.svg";
import { createPortal } from "react-dom";

const ModalRoot = document.getElementById("modal");

interface IModal {
  children: React.ReactNode;
  changeOpenModal: Function;
  title: string;
  modal: boolean;
}

const ModalWrapper: React.FC<IModal> = ({
  children,
  changeOpenModal,
  title,
  modal,
}): any => {
  if (modal) {
    return createPortal(
      <div className="background-modal" onClick={() => changeOpenModal(false)}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal">
            <div
              className="modal__cross-block"
              onClick={() => changeOpenModal(false)}
            >
              <img src={cross} alt="cross" />
            </div>
            <div className="modal__title-block">
              <h3 className="modal_title">{title}</h3>
            </div>
            {children}
          </div>
        </div>
      </div>,
      ModalRoot as HTMLElement
    );
  }
  return null;
};

export default ModalWrapper;
