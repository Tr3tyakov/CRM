import {configureStore} from '@reduxjs/toolkit'
import horizontalPanelReducer from './Reducers/horizontalPanelReducer'
<<<<<<< HEAD
import leftMenuReducer from './Reducers/leftMenuReducer'


const store = configureStore({
    reducer:{
        horizontalPanel: horizontalPanelReducer,
        leftMenu: leftMenuReducer
=======
const store = configureStore({
    reducer:{
        panel: horizontalPanelReducer
>>>>>>> 9326ae53b188f5cd7d428e6134289a38b54127e6
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store