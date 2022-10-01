import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
  data: {
    name:"",
    number:"",
    username:"",
    parol:""
  },
  UsersData:[

  ],
  LoginData:{}
};

export const DataReducer = createSlice({
  name: "dt",
  initialState,
  reducers: {
    GetData: (state, action) => {
        const DataWithPayload = action.payload.split(",");
        const name = DataWithPayload[0];
        const phonenumber = DataWithPayload[1];
        const username = DataWithPayload[2];
        const parol = DataWithPayload[3];
        state.data = {...state.data,name:name,number:phonenumber,username:username,parol:parol}
        state.UsersData = [...state.UsersData,state.data]
        localStorage.setItem("UserSignUpData",JSON.stringify(state.UsersData))
    //   console.log(name,phonenumber,username,parol)
    },
    GetLoginData: (state,action) => {
        state.LoginData = action.payload
        
        localStorage.setItem('user',JSON.stringify(state.LoginData))

        
        
    }
  },
});

export const { GetData,GetLoginData } = DataReducer.actions;
export default DataReducer;