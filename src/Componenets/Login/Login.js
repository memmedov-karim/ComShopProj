import React from 'react'
import './login.css'
import { Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import { GetLoginData } from '../../Redux/Reducers/UserReducer';
import { useDispatch, useSelector } from "react-redux/es/exports";
export default function Login() {
    if(JSON.parse(localStorage.getItem('UserSignUpData'))===null){
        localStorage.setItem('UserSignUpData',JSON.stringify([]))
    }
    const dispatch = useDispatch();
   

    const UsersDatas = JSON.parse(localStorage.getItem('UserSignUpData'))
    const [loginusername,setloginusername] = React.useState("");
    const [loginparol,setloginparol] = React.useState("");
    const [userCheck,setuserCheck] = React.useState(false);
    const GetLoginUserName = (e) => {
        setloginusername(e.target.value)
        
    }
    const GetLoginParol = (e) => {
        setloginparol(e.target.value)
        
        console.log(loginusername)
        
    }
    const SubmitLoginInfo = (e) => {
        e.preventDefault()
        
        console.log(userCheck)
    }
    React.useEffect(()=>{
        for(let user of UsersDatas){
            if(user.username === loginusername){
                if(user.parol === loginparol){
                    dispatch(GetLoginData(user))
                    setuserCheck(true)
                }
                else{
                    setuserCheck(false)
                }
            }
            
        }

    },[loginparol])
    
  return (
    <div className='from-contanier'>
        <Link className='homepagebtn' to='/'>
        <button className='homepagebtn1'>Esas Sehife</button>
        </Link>
        <hr className='hr' />
        <form onSubmit={SubmitLoginInfo} className='form'>
            
            <h1>Hesaba daxil olmaq</h1>
            <hr />

            <label className='label1'>
                Istifadeci adi:

            </label>
            <input className='input' onChange={GetLoginUserName} required type='text' placeholder='ad..' />
            <label className='label2'>
                Sifre:
            </label>
            <input className='input' onChange={GetLoginParol} required type='password' placeholder='sifre..' />
            
            
            
            <Link to={userCheck?"/userpage":"/login"}>
                <button className='submit-btn'  type='submit'>Hesaba daxil ol</button>
            </Link>
            <hr />
            <div className='noaccount'>
                
                <div className='noaccountins'>
                <span>Hesabin Yoxdur?</span>
                <Link to='/signup'>
                <button>Hesab Yarat</button>
                </Link>

                </div>
            </div>
            
        </form>
        
    </div>
  )
}
