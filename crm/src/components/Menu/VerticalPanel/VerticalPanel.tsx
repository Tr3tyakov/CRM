import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import clsx from 'clsx';
import './verticalPanel.scss';
import Button from '../../theme/buttonTheme';
import users from '../../../images/users.svg';
import user from '../../../images/user.svg';
import menu from '../../../images/menu.svg';
import chart from '../../../images/chart.svg';
import list from '../../../images/list.svg';
import statement from '../../../images/statement.svg';
import turnoff from '../../../images/turnoff.svg';
import { useAppDispatch, useAppSelector } from '../../Hooks/useTypeSelector';
import Bubble from '../../Elements/Bubble/Bubble';
import arrow from '../../../images/leftArrow.svg';
import { changeVersionLeftMenu } from '../../Store/Reducers/sync/VerticalPanel/verticalPanelReducer';

type Links = { path: string; title: string; icon: string };

const links: Links[] = [
  { path: 'Main', title: 'Главное меню', icon: menu },
  { path: 'Orders', title: 'Заказы', icon: list },
  { path: 'Scores', title: 'Счета', icon: chart },
  { path: 'Statement', title: 'Отчеты', icon: statement },
  { path: 'Users', title: 'Пользователи', icon: users },
];

interface ItypeVerticalPanel {
  full: 'small';
  small: 'full';
}

const typeVerticalPanel: ItypeVerticalPanel = {
  full: 'small',
  small: 'full',
};

function VerticalPanel() {
  const { active, version } = useAppSelector((state) => state.verticalPanel);
  const dispatch = useAppDispatch();

  const versionIsFull = version === 'full' ? true : false;

  return (
    <div
      className={clsx({
        vertical: true,
        vertical__small: !versionIsFull,
        vertical__disabled: !active,
      })}>
      <div className="vertical__container">
        <div
          className="vertical__image"
          onClick={() => dispatch(changeVersionLeftMenu(typeVerticalPanel[version]))}>
          <Bubble className="vertical__arrow">
            <img
              className={clsx({
                vertical__icon: true,
                'vertical__icon--rotate': !versionIsFull,
              })}
              src={arrow}
              alt="arrow"
            />
          </Bubble>
        </div>
        <div className="vertical__avatar">
          {versionIsFull && (
            <>
              <div className="vertical__avatar__block">
                <img className="vertical__avatar__icon" src={user} alt="avatar" />
              </div>
              <div className="vertical__avatar__info">
                <div className="vertical__avatar__title">
                  <h4 className="vertical__avatar__name">Третьяков</h4>
                </div>
                <Button
                  onClick={() => console.log('ДА')}
                  theme="black"
                  img={turnoff}
                  alt="Выход"></Button>
              </div>
            </>
          )}
        </div>
        {links.map((element, index) => {
          return (
            <Bubble key={index}>
              <Link className="link" to={`${element.path}`}>
                <div className="link__block">
                  <img src={element.icon} className="link__icon" alt="icon" />
                </div>
                {versionIsFull && <div className="link__title">{element.title}</div>}
              </Link>
            </Bubble>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalPanel;
