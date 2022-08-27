<<<<<<< HEAD
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

=======
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
>>>>>>> 9326ae53b188f5cd7d428e6134289a38b54127e6
export const horizontalPanelReducer = createSlice({
    name:"horizontalPanel",
    initialState,
    reducers:{
<<<<<<< HEAD
        changePanel:(state:IHorizontalPanel, action: IPanelAction)=>{
            state.panels = state.panels.map(element=> element.title === action.payload.title ? {...element, checked: action.payload.checked} : element)
            
        },
        changeHorizontalPanel:(state:IHorizontalPanel, action: IHorizontalMenuAction)=>{
            state.horizontalPanelOn = action.payload
        }
    }
})

export const {changePanel,changeHorizontalPanel} = horizontalPanelReducer.actions
=======
        editCounter:(state:IHorizontalPanel[], action: horizontalPanelActions):IHorizontalPanel[]=>{
            return state.map(element=> element.title === action.payload.title ? {...element, checked: action.payload.checked} : element)
        },
    }
})

export const {editCounter} = horizontalPanelReducer.actions
>>>>>>> 9326ae53b188f5cd7d428e6134289a38b54127e6

export default horizontalPanelReducer.reducer