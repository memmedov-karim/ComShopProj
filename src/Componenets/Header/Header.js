import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';
export default function Header(props) {
    let data = window.location.href.split("/")
    const CurrentPage =data[data.length-1]
    console.log(CurrentPage)
    const [ShoppingBtn,setShoppingBtn] = React.useState(true);
    const [MyCompsBtn,setMyCompsBtn] = React.useState(false);
    const [LogoutBtn,setLogoutBtn] = React.useState(false);
    const [LoginBtn,setLoginBtn] = React.useState(true);
    const [GeneralPage,setGeneralPage] = React.useState(false);
    const [AddComp,setAddComp] = React.useState(false);
    React.useEffect(()=>{
        if(CurrentPage === "userpage"){
            setShoppingBtn(true)
            setMyCompsBtn(true)
            setLogoutBtn(true)
            setLoginBtn(false)
            setGeneralPage(false)
            setAddComp(false)
        }
        if(CurrentPage === "addcomputer"){
            setShoppingBtn(false)
            setMyCompsBtn(false)
            setLogoutBtn(false)
            setLoginBtn(false)
            setGeneralPage(true)
            setAddComp(true)



        }
        if(CurrentPage === "shopping"){
            setShoppingBtn(false)
            setMyCompsBtn(false)
            setLogoutBtn(false)
            setLoginBtn(false)
            setGeneralPage(true)
            setAddComp(false)



        }

    },[CurrentPage])
    // console.log(window.location.href)
  return (
    <div className='nav'>
        {GeneralPage && <Link to='/userpage'><button className='generalpage'>Esas Sehife</button></Link>}
        
        {MyCompsBtn && <Link to='/addcomputer' >
        <button className='mycomps'>Komputerlerim</button>
        </Link>}
        
        {ShoppingBtn && <Link to='/shopping'>
        <button className='buycomp'>Komputer Alis-Verisine Basla</button>
        </Link>}

        
        {LoginBtn && <Link to='/signup' >
        <button className='loginaccount'>Hesaba daxil olmaq</button>

        </Link>}
        {LogoutBtn && <Link to='/'>
        <button className='logout'>Hesabdan cix</button>

        </Link>}

        {AddComp && <button onClick={props.handleShow} className='newcomp'>Yeni komputer</button>}
        
        


        
       
    </div>
  )
}
