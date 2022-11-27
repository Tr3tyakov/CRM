export type typeVersion = 'small' | 'full';

export interface IVerticalPanel {
  active: boolean;
  version: typeVersion;
}

export interface IActionVersionMenu {
  type: string;
  payload: typeVersion;
}

export interface IActionActiveMenu extends Omit<IActionVersionMenu, 'payload'> {
  payload: boolean;
}
