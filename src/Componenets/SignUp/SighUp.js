import React from 'react'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import { GetData } from '../../Redux/Reducers/UserReducer';
import { useDispatch, useSelector } from "react-redux/es/exports";
export default function Login() {
    const UserData = useSelector(state=>state.dt.UsersData);
    console.log(JSON.parse(localStorage.getItem("UserSignUpData")))
    const dispatch = useDispatch();
    const [notificationName,setNotificationName] = React.useState('Bos qaymayin,minimum 2 max 30 simvol ola biler');
    const [notificationPhone,setNotificationPhone] = React.useState('Nomre 000-000-0000 bu formatda olmalidir');
    const [notificationUsername,setNotificationUserName] = React.useState('Bos qaymayin,minimum 2 max 30 simvol ola biler');
    const [notificationPassword,setNotificationPassword] = React.useState('Bos qaymayin,minimum 2 max 30 simvol ola biler');
    const [name,setName] = React.useState("");
    const [phoneNumber,setPhoneNumber] = React.useState("");
    const [userName,setUserName] = React.useState("");
    const [parol,setParol] = React.useState("");
    const styleName = {
        color:notificationName ==='Bos qaymayin,minimum 2 max 30 simvol ola biler' ? "red" : "green"
    }
    const stylePhone = {
        color:notificationPhone ==='Nomre 000-000-0000 bu formatda olmalidir' ? "red" : "green"
    }
    const styleUserName = {
        color:notificationUsername ==='Bos qaymayin,minimum 2 max 30 simvol ola biler' ? "red" : "green"
    }
    const stylePassword = {
        color:notificationPassword ==='Bos qaymayin,minimum 2 max 30 simvol ola biler' ? "red" : "green"
    }
    const GetName = (e) => {
        setName(e.target.value);
        (name.length>2 && name.length<30) ? setNotificationName('Duzgundur') : setNotificationName('Bos qaymayin,minimum 2 max 30 simvol ola biler');
    }
    const GetPhone = (e) => {
        setPhoneNumber(e.target.value);
        (phoneNumber[3]==='-' && phoneNumber[7] ==='-' && phoneNumber.length>11 ) ? setNotificationPhone('Duzgundur') : setNotificationPhone('Nomre 000-000-0000 bu formatda olmalidir')
        
    }
    const GetUserName = (e) => {
        setUserName(e.target.value);
        (userName.length>2 && userName.length<30) ? setNotificationUserName('Duzgundur') : setNotificationUserName('Bos qaymayin,minimum 2 max 30 simvol ola biler');
    }
    const GetUserParol = (e) => {
        setParol(e.target.value);
        (parol.length>2 && parol.length<30) ? setNotificationPassword('Duzgundur') : setNotificationPassword('Bos qaymayin,minimum 2 max 30 simvol ola biler');
    }

    const SubmitSignUpData = (e) => {
        e.preventDefault()
        dispatch(GetData(`${name},${phoneNumber},${userName},${parol}`))
        // console.log(UserData)
        // console.log(name,phoneNumber,userName,parol)
    }

  return (
    <div className='from-contanier'>
        <Link to='/' className='homepagebtn'>
        <button className='homepagebtn1'>Esas Sehife</button>
        </Link>
        <hr className='hr' />
        <form onSubmit={SubmitSignUpData} className='form'>
            
            <h1 className='h1'>Hesaba yaratmaq</h1>
            <hr />

            <label className='label6'>
                Ad:

            </label>
            <input className='input' value={name} onChange={GetName} required type='text' placeholder='ad..' />
            <smal style={styleName}>{notificationName}</smal>
            <label className='label5'>
                Telefon:
            </label>
            <input className='input' value={phoneNumber} onChange={GetPhone} required type='tel' placeholder='phone..' />
            <smal style={stylePhone}>{notificationPhone}</smal>

            <label className='label3'>
                Istifadeci adi:
            </label>
            <input className='input' value={userName} onChange={GetUserName} required type='text' placeholder='ad..' />
            <smal style={styleUserName}>{notificationUsername}</smal>

            <label className='label4'>
                Sifre:
            </label>
            <input className='input' value={parol} onChange={GetUserParol} required type='password' placeholder='sifre..' />
            <smal style={stylePassword}>{notificationPassword}</smal>
            
            
            
            
            <button className='submit-btn3'  type='submit'>Hesab yarat</button>
            
            <hr />
            <div className='noaccount'>
                <span>Artiq movcud hesabin var?</span>
                <Link to='/login'>
                <button>Hesaba daxil ol</button>
                </Link>
            </div>
            
        </form>
        
    </div>
  )
}