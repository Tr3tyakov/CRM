import React from "react";
import "./switchButton.scss";

interface ISwitchButton {
  checked: boolean;
  onChange: any;
}

const SwitchButton: React.FC<ISwitchButton> = ({ onChange, checked }) => {
  return (
    <span className="switch-checkbox">
      <label className="switch-checkbox__label">
        <input
          className="switch-checkbox__input"
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <span className="switch-checkbox__area">
          <span className="switch-checkbox__ellipse"></span>
        </span>
      </label>
    </span>
  );
};

export default SwitchButton;
