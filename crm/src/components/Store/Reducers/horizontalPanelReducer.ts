import { IHorizontalPanel } from './../../Interface/IHorizontalPanel';
import {createSlice} from '@reduxjs/toolkit'

const initialState:IHorizontalPanel[] =[
        { title: "Пользователей", quantity: 0, checked: true },
        { title: "Заказов", quantity: 0, checked: true },
        { title: "Прибыль", quantity: 0, checked: true },
        { title: "Сообщения", quantity: 0, checked: true },
    ]


interface IPayload {
    title: string,
    checked: boolean
}

interface horizontalPanelActions{
    payload: IPayload,
    type: string


}
export const horizontalPanelReducer = createSlice({
    name:"horizontalPanel",
    initialState,
    reducers:{
        editCounter:(state:IHorizontalPanel[], action: horizontalPanelActions):IHorizontalPanel[]=>{
            return state.map(element=> element.title === action.payload.title ? {...element, checked: action.payload.checked} : element)
        },
    }
})

export const {editCounter} = horizontalPanelReducer.actions

export default horizontalPanelReducer.reducer