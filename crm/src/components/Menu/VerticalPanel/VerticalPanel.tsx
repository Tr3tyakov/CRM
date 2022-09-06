import React from "react";
import { NavLink as Link } from "react-router-dom";
import clsx from "clsx";
import "./verticalPanel.scss";
import Button from "../../theme/buttonTheme";
import users from "../../../images/users.svg";
import user from "../../../images/user.svg";
import menu from "../../../images/menu.svg";
import chart from "../../../images/chart.svg";
import list from "../../../images/list.svg";
import statement from "../../../images/statement.svg";
import turnoff from "../../../images/turnoff.svg";
import { useAppSelector } from "../../Hooks/useTypeSelector";

type Links = { path: string; title: string; icon: string };

const links: Links[] = [
  { path: "Main", title: "Главное меню", icon: menu },
  { path: "Orders", title: "Заказы", icon: list },
  { path: "Scores", title: "Счета", icon: chart },
  { path: "Statement", title: "Отчеты", icon: statement },
  { path: "Users", title: "Пользователи", icon: users },
];

function VerticalPanel() {
  const { leftMenuActive } = useAppSelector((state) => state.leftMenu);
  return (
    <div
      className={clsx({
        navigation: true,
        "navigation-disabled": !leftMenuActive,
      })}
    >
      <div className="navigation__container">
        <div className="avatar">
          <div className="avatar__block">
            <img className="avatar__icon" src={user} alt="avatar" />
          </div>
          <div className="avatar__info">
            <div className="avatar__title">
              <h4 className="avatar__name">Третьяков</h4>
            </div>
            <Button theme="black" img={turnoff} alt="Выход"></Button>
          </div>
        </div>
        {links.map((element, index) => {
          return (
            <Link className="link" key={index} to={`${element.path}`}>
              <div className="link__block">
                <img src={element.icon} className="link__icon" alt="icon" />
              </div>
              <div className="link__title">{element.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalPanel;
