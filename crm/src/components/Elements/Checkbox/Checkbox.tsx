import React, { ReactElement } from "react";
import "./checkbox.scss";

interface ICheckboxProps {
  children: ReactElement;
<<<<<<< HEAD
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
=======
  onClick: Function;
}

const Checkbox: React.FC<ICheckboxProps> = ({ children }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input className="checkbox__input" type="checkbox" checked />
>>>>>>> 9326ae53b188f5cd7d428e6134289a38b54127e6
        <span className="checkbox__span"></span>
      </label>
      <div className="checkbox__children">{children}</div>
    </div>
  );
};

export default Checkbox;
