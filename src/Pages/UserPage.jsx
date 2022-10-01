import React from 'react'
import Header from '../Componenets/Header/Header';
import Slider from '../Componenets/Slider/Slider';
import { useDispatch, useSelector } from "react-redux/es/exports";
export default function UserPage() {
  // if(JSON.parse(localStorage.getItem('user'))===null){
  //   localStorage.setItem('user',JSON.stringify({name:"",
  //   number:"",
  //   username:"",
  //   parol:""}))
  // }
  // const UsersData = JSON.parse(localStorage.getItem('user'))

    const styles = {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"

    }
    const style1 = {
      marginLeft:"-75%"
    }
  return (
    <div>
        <Header />
        <hr />
        <h1 style={style1}>Istifadec Adi:{JSON.parse(localStorage.getItem('user')).name}</h1>
        <div style={styles}>
        
        <Slider />
        </div>
    </div>
  )
}
