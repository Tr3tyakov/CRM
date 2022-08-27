import { createSlice } from "@reduxjs/toolkit";
import { ILeftMenu, ILeftMenuAction } from "../../Interface/ILeftMenu";

let initialState:ILeftMenu = {
    leftMenuActive: true
}




const leftMenuReducer = createSlice({
     name: "leftMenu",
     initialState,
     reducers:{
        changeLeftMenu:(state:ILeftMenu, action:ILeftMenuAction):ILeftMenu=>{
            return state = {leftMenuActive: action.payload}
        }
     }
})


export const {changeLeftMenu} = leftMenuReducer.actions

export default leftMenuReducer.reducer