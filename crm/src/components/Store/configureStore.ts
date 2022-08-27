import {configureStore} from '@reduxjs/toolkit'
import horizontalPanelReducer from './Reducers/horizontalPanelReducer'
import leftMenuReducer from './Reducers/leftMenuReducer'


const store = configureStore({
    reducer:{
        horizontalPanel: horizontalPanelReducer,
        leftMenu: leftMenuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store