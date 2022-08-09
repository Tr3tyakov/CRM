import React from "react";
import cross from '../../images/cross.svg'
import "./topMenu.scss";

type Counter = { title: string; counter: number };

const counters: Counter[] = [
  { title: "Пользователей", counter: 0 },
  { title: "Заказов", counter: 0 },
  { title: "Прибыль", counter: 0 },
  { title: "Сообщения", counter: 0 },
];

function TopMenu() {
  return (
    <div className="menu-container">
        <div className="horizontal-panel"></div>
      <div className="counters">
        {counters.map((element, index) => {
          return (
            <div className="counter" key={index}>
                <div className='counter__cross'>
                    <img className={'cross__panel'} src={cross} alt="cross" />
                </div>
              <div className="counter__title">
                <h3>{element.title}</h3>
              </div>
              <div className="counter__number">
                <p>{element.counter}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopMenu;
