import { IActionActiveMenu, IActionVersionMenu } from './../../Interface/ILeftMenu';
import { createSlice } from '@reduxjs/toolkit';
import { ILeftMenu } from '../../Interface/ILeftMenu';

let initialState: ILeftMenu = {
  leftMenuActive: true,
  version: 'full',
};

const leftMenuReducer = createSlice({
  name: 'leftMenu',
  initialState,
  reducers: {
    changeVersionLeftMenu: (state: ILeftMenu, action: IActionVersionMenu): ILeftMenu => {
      return { ...state, version: action.payload };
    },
    changeActiveLeftMenu: (state: ILeftMenu, action: IActionActiveMenu): ILeftMenu => {
      return { ...state, leftMenuActive: !action.payload };
    },
  },
});

export const { changeVersionLeftMenu, changeActiveLeftMenu } = leftMenuReducer.actions;

export default leftMenuReducer.reducer;
