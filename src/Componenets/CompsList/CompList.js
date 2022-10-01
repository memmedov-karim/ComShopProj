import React from "react";
import "./complist.css";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux/es/exports";
export default function CompList() {
    if(JSON.parse(localStorage.getItem('NewCompsData'))===null){
      localStorage.setItem('NewCompsData',JSON.stringify([]))
    }

    const dft = useSelector(state=>state.comp.Categorydata)
    console.log(dft)

    const [show, setShow] = React.useState(false);
    // const [MyComps,setMyComps] = React.useState(JSON.parse(localStorage.getItem('NewCompsData')))
    const MyComps = [...JSON.parse(localStorage.getItem('NewCompsData'))]
    localStorage.setItem('MyCompsData',JSON.stringify(MyComps))
    const [MyComps1,setMyComps1] = React.useState(JSON.parse(localStorage.getItem('MyCompsData')))

    const ShowDetail = (e) => {
        setShow(true);
        console.log(e.target.parentElement.id)
        // localStorage.setItem('OneComp',JSON.stringify(JSON.parse(localStorage.getItem('NewCompsData')[e.target.parentElement.id])))
        console.log(MyComps[e.target.parentElement.id])
        localStorage.setItem('OneComp',JSON.stringify(MyComps[e.target.parentElement.id]))
    }
    const handleClose = (e) => {
        setShow(false)
    }

    const Comps = dft.map((comp,ind)=>{
        return (
            <div id={ind} key={ind} className="cart">
        <img

          alt="sekil"
          src={comp.image}
        />
        <div className="infos">
          <p>Ad:{comp.name}</p>
          <p>Tesvir:{comp.description}</p>
          <p>Qiymet:{comp.price}</p>
          <p>Yeni:{comp.neww}</p>
          <p>Telefon:0702388838</p>
        </div>

        <button onClick={ShowDetail} className="detail">Etrafli</button>
      </div>

        )
    })
    if((JSON.parse(localStorage.getItem('OneComp'))===null)){
      localStorage.setItem('OneComp',JSON.stringify({}))
    }
    console.log(localStorage.getItem('OneComp'))
  return (
    <div className="container">
      {Comps}
      <Modal  size="md" className="mmodal" show={show} onHide={handleClose}>
        <h1>Komputer haqqinda etrafli melumat</h1>
        <img alt="sekil" src={JSON.parse(localStorage.getItem('OneComp')).image} />

        <div className="infos">
          <p>Ad:{JSON.parse(localStorage.getItem('OneComp')).name}</p>
          <p>Tesvir:{JSON.parse(localStorage.getItem('OneComp')).description}</p>
          <p>Qiymet:{JSON.parse(localStorage.getItem('OneComp')).price}</p>
          <p>Yeni:{JSON.parse(localStorage.getItem('OneComp')).neww}</p>
          <p>Os:{JSON.parse(localStorage.getItem('OneComp')).os}</p>
          <p>Cpu:{JSON.parse(localStorage.getItem('OneComp')).cpu}</p>
          <p>Videocart:{JSON.parse(localStorage.getItem('OneComp')).videocart}</p>
          <p>Hdd:{JSON.parse(localStorage.getItem('OneComp')).hdd}</p>
          <p>Telefon:0702388838</p>
        </div>




        <button onClick={handleClose}>Bagla</button>
        
      </Modal>
    </div>
  );
}
