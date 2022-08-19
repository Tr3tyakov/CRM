import React, { ReactElement } from "react";
import "./checkbox.scss";

interface ICheckboxProps {
  children: ReactElement;
  onClick: Function;
}

const Checkbox: React.FC<ICheckboxProps> = ({ children }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input className="checkbox__input" type="checkbox" checked />
        <span className="checkbox__span"></span>
      </label>
      <div className="checkbox__children">{children}</div>
    </div>
  );
};

export default Checkbox;
