import clsx from 'clsx';
import React from 'react';
import './checkbox.scss';

interface ICheckboxProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  checked: boolean;
  onChange: () => void;
  justifyContent?: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  children,
  style,
  checked,
  onChange,
  justifyContent = 'center',
}) => {
  const childrenIsDefined = children === undefined ? true : false;
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
      <div
        className={clsx({
          checkbox__children: true,
          'checkbox__children--deactive': childrenIsDefined,
        })}>
        {children}
      </div>
    </div>
  );
};

export default Checkbox;
