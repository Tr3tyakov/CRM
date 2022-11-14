export type typeVersion = 'small' | 'full';

export interface ILeftMenu {
  leftMenuActive: boolean;
  version: typeVersion;
}

export interface IActionVersionMenu {
  type: string;
  payload: typeVersion;
}

export interface IActionActiveMenu extends Omit<IActionVersionMenu, 'payload'> {
  payload: boolean;
}
