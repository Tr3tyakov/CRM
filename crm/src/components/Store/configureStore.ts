import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './Reducers/async/userReducer';
import horizontalPanelReducer from './Reducers/sync/horizontalPanel/horizontalPanelReducer';
import verticalPanelReducer from './Reducers/sync/VerticalPanel/verticalPanelReducer';

const store = configureStore({
  reducer: {
    horizontalPanel: horizontalPanelReducer,
    verticalPanel: verticalPanelReducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
