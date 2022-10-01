import React from 'react'
import { Link } from "react-router-dom";
import Login from '../Componenets/Login/Login';
import Header from '../Componenets/Header/Header';
import Slider from '../Componenets/Slider/Slider';
export default function Home() {
  return (
    <div>
        <Header />
        <hr />
        <Slider />
        
    </div>
  )
}
