import {configureStore} from '@reduxjs/toolkit'
import horizontalPanelReducer from './Reducers/horizontalPanelReducer'
const store = configureStore({
    reducer:{
        panel: horizontalPanelReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store