import { createSlice } from "@reduxjs/toolkit/";
import { act } from "react-dom/test-utils";

const initialState = {
  NewCompData: {
    category:"",
    name:"",
    price:"",
    description:"",
    neww:"",
    image:"",
    hdd:"",
    cpu:"",
    ssd:"",
    typehdd:"",
    os:"",
    videocart:""
  },
  CompsData:[

  ],
  Categorydata:[

  ]
};

export const CompDataReducer = createSlice({
  name: "comp",
  initialState,
  reducers: {
    GetCompData: (state, action) => {
        const CompDataWithPayload = action.payload.split(",");
        const category = CompDataWithPayload[0];
        const name = CompDataWithPayload[1];
        const price = CompDataWithPayload[2];
        const description = CompDataWithPayload[3];
        const neww = CompDataWithPayload[4];
        const image = CompDataWithPayload[5];
        const hdd = CompDataWithPayload[6];
        const cpu = CompDataWithPayload[7];
        const ssd = CompDataWithPayload[8];
        const typehdd = CompDataWithPayload[9];
        const os = CompDataWithPayload[10];
        const videcart = CompDataWithPayload[11];
        state.NewCompData = {...state.NewCompData,
            category:category,
            name:name,
            price:price,
            description:description,
            neww:neww,
            image:image,
            hdd:hdd,
            cpu:cpu,
            ssd:ssd,
            typehdd:typehdd,
            os:os,
            videocart:videcart,
        }
        state.CompsData = [...state.CompsData,state.NewCompData]
        localStorage.setItem("NewCompsData",JSON.stringify(state.CompsData))
        // console.log(action.payload)
    //   console.log(name,phonenumber,username,parol)
    },
    DeleteElement: (state,action) => {
        const ComingData = JSON.parse(localStorage.getItem('NewCompsData'));
        const neww = ComingData.filter((item,index)=>{
            return parseInt(action.payload) !== index
        })
        localStorage.setItem('NewCompsData',JSON.stringify(neww))
        setTimeout(()=>{
            window.location.reload()

        },200)
        console.log(action.payload,neww)
        // console.log(state.data.Elements)
    },
    EditElement: (state,action) => {
        const ComingsData = JSON.parse(localStorage.getItem('NewCompsData'));
        const CompDataWithPayload = action.payload.split(",");
        const categoryedit = CompDataWithPayload[0];
        const nameedit = CompDataWithPayload[1];
        const priceedit = CompDataWithPayload[2];
        const descriptionedit = CompDataWithPayload[3];
        const newwedit = CompDataWithPayload[4];
        const imageedit = CompDataWithPayload[5];
        const hddedit = CompDataWithPayload[6];
        const cpuedit = CompDataWithPayload[7];
        const ssdedit = CompDataWithPayload[8];
        const typehddedit = CompDataWithPayload[9];
        const osedit = CompDataWithPayload[10];
        const videcartedit = CompDataWithPayload[11];
        const id = CompDataWithPayload[12]
        const updatedArray = ComingsData.map((p,ind) =>
            parseInt(id) === ind
              ? { ...p,
                category:categoryedit,
                name:nameedit,
                price:priceedit,
                description:descriptionedit,
                neww:newwedit,
                image:imageedit,
                hdd:hddedit,
                cpu:cpuedit,
                ssd:ssdedit,
                typehdd:typehddedit,
                os:osedit,
                videocart:videcartedit,

             }
              : p
          );
          localStorage.setItem('NewCompsData',JSON.stringify(updatedArray))
          setTimeout(()=>{
            window.location.reload()

        },200)
        console.log(updatedArray)

    },
    GetCategoryData: (state,action) => {
      state.Categorydata  = action.payload
    }
  },
});

export const { GetCompData,DeleteElement,EditElement,GetCategoryData } = CompDataReducer.actions;
export default CompDataReducer;