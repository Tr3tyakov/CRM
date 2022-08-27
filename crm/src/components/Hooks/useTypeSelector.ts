import { RootState, AppDispatch } from "../Store/configureStore";
import {useDispatch, useSelector} from 'react-redux'
import { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch: ()=>AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector