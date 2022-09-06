import React, { ReactElement } from "react";
import "./checkbox.scss";

interface ICheckboxProps {
  children?: ReactElement;
  style?: any;
  checked: boolean;
  onChange: any;
  justifyContent?: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  children,
  style,
  checked,
  onChange,
  justifyContent = "center",
}) => {
  return (
    <div className="checkbox-wrapper" style={{ justifyContent }}>
      <div className="checkbox">
        <label className="checkbox__label">
          <input
            className="checkbox__input"
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          <span className="checkbox__span" style={style}></span>
        </label>
      </div>
      <div className="checkbox__children">{children}</div>
    </div>
  );
};

export default Checkbox;
