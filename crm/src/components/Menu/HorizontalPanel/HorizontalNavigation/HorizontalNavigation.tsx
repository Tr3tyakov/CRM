import React from 'react';
import './horizontalNavigation.scss';
import SettingsModal from '../SettingsModal/SettingsModal';

import settings from '../../../../images/settings.svg';
import gear from '../../../../images/gear.svg';
import { IPanel } from '../../../Interface/IHorizontalPanel';
import clsx from 'clsx';
import user from '../../../../images/user.svg';
import Button from '../../../theme/buttonTheme';
import { typeVersion } from '../../../Interface/ILeftMenu';
import Box from '../../../Elements/Box/Box';

interface IHorizontalPanelProps {
  counters: IPanel[];
  leftMenuActive: boolean;
  horizontalPanelActive: boolean;
}

const HorizontalNavigation: React.FC<IHorizontalPanelProps> = ({
  counters,
  leftMenuActive,
  horizontalPanelActive,
}) => {
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <>
      <div className="horizontal">
        <Box display="flex" align="center">
          <Button
            img={settings}
            onClick={() => setModal(!modal)}
            alt={'Настройки'}
            theme="black"></Button>
          <Button
            onClick={() => console.log('ДА')}
            theme="black"
            img={gear}
            alt={'Настройки'}></Button>
        </Box>
        <Box display="flex" align="center">
          <div className="horizontal__avatar">
            <div className="horizontal__avatar__container">
              <img src={user} alt="user photo" />
              <div className="horizontal__avatar__circle">
                <p>10</p>
              </div>
            </div>
            <div className="horizontal__avatar__info">
              <p>Третьяков Михаил</p>
              <button>Выйти</button>
            </div>
          </div>
        </Box>
      </div>

      <SettingsModal
        counters={counters}
        setOpenModal={setModal}
        leftMenuActive={leftMenuActive}
        horizontalPanelActive={horizontalPanelActive}
        modal={modal}
      />
    </>
  );
};

export default HorizontalNavigation;
