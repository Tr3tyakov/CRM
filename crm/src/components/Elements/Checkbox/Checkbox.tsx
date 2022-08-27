import React, { ReactElement } from "react";
import "./checkbox.scss";

interface ICheckboxProps {
  children: ReactElement;
  checked: boolean;
  onChange: any;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  children,
  checked,
  onChange,
}) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="checkbox__span"></span>
      </label>
      <div className="checkbox__children">{children}</div>
    </div>
  );
};

export default Checkbox;
