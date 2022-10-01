import { configureStore } from "@reduxjs/toolkit";
import CompDataReducer from "./Reducers/AddCompReducer";
import { DataReducer } from "./Reducers/UserReducer"
export const store = configureStore({
    reducer:{
        dt:DataReducer.reducer,
        comp:CompDataReducer.reducer
    }
})

export default store