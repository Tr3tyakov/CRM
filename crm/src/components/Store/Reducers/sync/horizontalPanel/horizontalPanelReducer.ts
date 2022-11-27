import { createSlice } from '@reduxjs/toolkit';
import {
  IHorizontalMenuAction,
  IHorizontalPanel,
  IPanelAction,
} from './horizontalPanel..interfaces';
import { initialState } from './horizontalPanel.state';

export const horizontalPanelReducer = createSlice({
  name: 'horizontalPanel',
  initialState,
  reducers: {
    changePanel: (state: IHorizontalPanel, action: IPanelAction) => {
      state.panels = state.panels.map((element) =>
        element.title === action.payload.title
          ? { ...element, checked: action.payload.checked }
          : element,
      );
    },
    changeHorizontalPanel: (state: IHorizontalPanel, action: IHorizontalMenuAction) => {
      state.active = action.payload;
    },
  },
});

export const { changePanel, changeHorizontalPanel } = horizontalPanelReducer.actions;

export default horizontalPanelReducer.reducer;
