import { IHorizontalMenuAction, IHorizontalPanel, IPanelAction } from './../../Interface/IHorizontalPanel';
import {createSlice} from '@reduxjs/toolkit'

const initialState:IHorizontalPanel ={
    panels:[
        { title: "Пользователи", quantity: 0, checked: true },
        { title: "Заказы", quantity: 0, checked: true },
        { title: "Прибыль", quantity: 0, checked: true },
        { title: "Сообщения", quantity: 0, checked: true },
    ],
    horizontalPanelOn: true
}

export const horizontalPanelReducer = createSlice({
    name:"horizontalPanel",
    initialState,
    reducers:{
        changePanel:(state:IHorizontalPanel, action: IPanelAction)=>{
            state.panels = state.panels.map(element=> element.title === action.payload.title ? {...element, checked: action.payload.checked} : element)
            
        },
        changeHorizontalPanel:(state:IHorizontalPanel, action: IHorizontalMenuAction)=>{
            state.horizontalPanelOn = action.payload
        }
    }
})

export const {changePanel,changeHorizontalPanel} = horizontalPanelReducer.actions

export default horizontalPanelReducer.reducer