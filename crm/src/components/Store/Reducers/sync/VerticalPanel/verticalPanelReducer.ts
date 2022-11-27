import { createSlice } from '@reduxjs/toolkit';
import { IActionActiveMenu, IActionVersionMenu, IVerticalPanel } from './verticalPanel.interfaces';
import { initialState } from './verticalPanel.state';

const verticalPanelReducer = createSlice({
  name: 'leftMenu',
  initialState,
  reducers: {
    changeVersionLeftMenu: (state: IVerticalPanel, action: IActionVersionMenu): IVerticalPanel => {
      return { ...state, version: action.payload };
    },
    changeActiveLeftMenu: (state: IVerticalPanel, action: IActionActiveMenu): IVerticalPanel => {
      return { ...state, active: !action.payload };
    },
  },
});

export const { changeVersionLeftMenu, changeActiveLeftMenu } = verticalPanelReducer.actions;

export default verticalPanelReducer.reducer;
