import React from "react";
import "./addcomputer.css";
import Header from "../../Componenets/Header/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { GetCompData,DeleteElement,EditElement } from "../../Redux/Reducers/AddCompReducer";
export default function AddComputer() {

  if (JSON.parse(localStorage.getItem('NewCompsData')) === null){

    localStorage.setItem('NewCompsData',JSON.stringify([]))
    
  }
  if(JSON.parse(localStorage.getItem('editInfo'))===null){
    localStorage.setItem('editInfo',JSON.stringify({}))
  }
  const dispatch = useDispatch();
  const [editingid,setEditingid] = React.useState("");
  const [neweditid,setid] = React.useState("");
  const [editingInfo,seteditinginfo] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [showedit, setShowedit] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [neww, setNeww] = React.useState("");
  const [image, setImage] = React.useState("");
  const [ssd, setSsd] = React.useState("");
  const [cpu, setCpu] = React.useState("");
  const [hdd, setHdd] = React.useState("");
  const [typehdd, setTypehdd] = React.useState("");
  const [os, setOs] = React.useState("");
  const [videocart, setVidecart] = React.useState("");
  // *************************************************
  const [categoryedit, setCategoryedit] = React.useState(category);
  const [nameedit, setNameedit] = React.useState(name);
  const [priceedit, setPriceedit] = React.useState(price);
  const [descriptionedit, setDescriptionedit] = React.useState(description);
  const [newwedit, setNewwedit] = React.useState(neww);
  const [imageedit, setImageedit] = React.useState(image);
  const [ssdedit, setSsdedit] = React.useState(ssd);
  const [cpuedit, setCpuedit] = React.useState(cpu);
  const [hddedit, setHddedit] = React.useState(hdd);
  const [typehddedit, setTypehddedit] = React.useState(typehdd);
  const [osedit, setOsedit] = React.useState(os);
  const [videocartedit, setVidecartedit] = React.useState(videocart);
  // *************************************************
  const GetCategory = (e) => {
    setCategory(e.target.value);
  };
  const GetName = (e) => {
    setName(e.target.value);
  };
  const GetPrice = (e) => {
    setPrice(e.target.value);
  };
  const GetDescription = (e) => {
    setDescription(e.target.value);
  };
  const GetNeww = (e) => {
    setNeww(e.target.value);
  };
  const GetImage = (e) => {
    setImage(e.target.value);
  };
  const GetSsd = (e) => {
    setSsd(e.target.value);
  };
  const GetCpu = (e) => {
    setCpu(e.target.value);
  };
  const GetHdd = (e) => {
    setHdd(e.target.value);
  };
  const GetTypehdd = (e) => {
    setTypehdd(e.target.value);
  };
  const GetOs = (e) => {
    setOs(e.target.value);
  };
  const GetVidecart = (e) => {
    setVidecart(e.target.value);
  };
  const FormSubmit = (e) => {
    e.preventDefault();
    
  };
  // *****************************************
  const GetCategoryedit = (e) => {
    setCategoryedit(e.target.value);
  };
  const GetNameedit = (e) => {
    setNameedit(e.target.value);
  };
  const GetPriceedit = (e) => {
    setPriceedit(e.target.value);
  };
  const GetDescriptionedit = (e) => {
    setDescriptionedit(e.target.value);
  };
  const GetNewwedit = (e) => {
    setNewwedit(e.target.value);
  };
  const GetImageedit = (e) => {
    setImageedit(e.target.value);
  };
  const GetSsdedit = (e) => {
    setSsdedit(e.target.value);
  };
  const GetCpuedit = (e) => {
    setCpuedit(e.target.value);
  };
  const GetHddedit = (e) => {
    setHddedit(e.target.value);
  };
  const GetTypehddedit = (e) => {
    setTypehddedit(e.target.value);
  };
  const GetOsedit = (e) => {
    setOsedit(e.target.value);
  };
  const GetVidecartedit = (e) => {
    setVidecartedit(e.target.value);
  };
  const FormSubmitedit = (e) => {
    e.preventDefault();
    
  };
  // *****************************************
  const handleClose = (e) => {
    e.preventDefault();
    dispatch(GetCompData(`${category},${name},${price},${description},${neww},${image},${ssd},${cpu},${hdd},${typehdd},${os},${videocart}`))
    console.log(category,name,price,description,neww,image,ssd,cpu,hdd,typehdd,os,videocart)
    // console.log(JSON.parse(localStorage.getItem('NewCompsData')))
    setShow(false);
  };
  const handleShow = () => setShow(true);
  
  const handleShowEdit = (e) => { 
    setShowedit(true)
    setEditingid(Takeid(e))
    const df = JSON.parse(localStorage.getItem('NewCompsData'))
    const getEdit = df[Takeid(e)]
    localStorage.setItem('editInfo',JSON.stringify(getEdit))
    seteditinginfo(getEdit)
    console.log(getEdit)
  };
  const DeletedElement = (e) => {
    const id = e.target.parentElement.parentElement.id
    dispatch(DeleteElement(id))
    // console.log(id)
  }
  const Takeid = (e) => {
    const id  = e.target.parentElement.parentElement.id
    return id
  }

  const handleCloseEdit = (e) => {
    const id = editingid
    e.preventDefault();
    dispatch(EditElement(`${categoryedit},${nameedit},${priceedit},${descriptionedit},${newwedit},${imageedit},${ssdedit},${cpuedit},${hddedit},${typehddedit},${osedit},${videocartedit},${id}`))
    // console.log(categoryedit,nameedit,priceedit,descriptionedit,newwedit,imageedit,ssdedit,cpuedit,hddedit,typehddedit,osedit,videocartedit)
    setShowedit(false);
  };
  
  const FillinTable = JSON.parse(localStorage.getItem('NewCompsData')).map((element,ind)=>{
    return (
      <tr id={ind} key={ind}>
            <td>{ind+1}</td>
            <td>{element.name}</td>
            <td>
              <img
                className="compimage"
                alt="sekil"
                src={element.image}
              />
            </td>
            <td>{element.price}</td>
            <td>
              <button onClick={DeletedElement} className="delete">Sil</button>
              <button onClick={handleShowEdit} className="update">Redakte</button>
            </td>
          </tr>

    )
  })
  
  return (
    <div>
      <Header handleShow={handleShow} />
      <hr />
      <form  className="searchform">
        <label>Search:</label>
        <input className="serchcomp" type="text" />
      </form>
      <Table className="table" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Sekil</th>
            <th>Qiymet</th>
            <th>Emeliyatlar</th>
          </tr>
        </thead>
        <tbody>
          {FillinTable}
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>
              <img
                className="compimage"
                alt="sekil"
                src="https://m.media-amazon.com/images/I/715ht-tvp1S._SL1500_.jpg"
              />
            </td>
            <td>1000azn</td>
            <td>
              <button className="delete">Sil</button>
              <button className="update">Redakte</button>
            </td>
          </tr> */}
        </tbody>
      </Table>
      <div className="undertable">
        <p>Showing 1 to 1 of 1 entries</p>
        <div className="buttons">
          <span className="btn">Previos</span>
          <span className="number">1</span>
          <span className="btn">Next</span>
        </div>
      </div>

      <Modal size="lg" className="modal" show={show} onHide={handleClose}>
        <form onSubmit={FormSubmit} className="form">
        <h1 className="heading">Yeni</h1>
          
          <div className="form-inputs">
          
            <div className="left">
              <label>Kateqoriya:</label>
              <input  value={category} onChange={GetCategory} type="text" />
              <label>Ad:</label>
              <input value={name} onChange={GetName} type="text" />
              <label>Qiymet:</label>
              <input value={price} onChange={GetPrice} type="text" />
              <label>Tesvir:</label>
              <input value={description} onChange={GetDescription} type="text" />
              <label>Yeni:</label>
              <input value={neww} onChange={GetNeww} type="text" />
              <label>Sekil:</label>
              <input value={image} onChange={GetImage} type="text" />
            </div>
            <div className="right">
              <label>Emeli Yaddas(GB):</label>
              <input value={ssd} onChange={GetSsd} type="text" />
              <label>Merkezi Processor:</label>
              <input value={cpu} onChange={GetCpu} type="text" />
              <label>Daimi yaddas(GB):</label>
              <input value={hdd} onChange={GetHdd} type="text" />
              <label>Daimi yaddas tipi:</label>
              <input value={typehdd} onChange={GetTypehdd} type="text" />
              <label>Emeliyyat tipi:</label>
              <input value={os} onChange={GetOs} type="text" />
              <label>Video kart(GB):</label>
              <input value={videocart} onChange={GetVidecart} type="text" />
            </div>
          </div>
          <hr />
          <div className="form-buttons">
            <button onClick={handleClose} className="save">Yadda Saxla</button>
            <button className="reset">Melumatlari sifirla</button>
          </div>
        </form>
      </Modal>


      <Modal size="lg" className="modal_edit" show={showedit} onHide={handleCloseEdit}>
        <form onSubmit={FormSubmitedit} className="form">
        <h1 className="heading">Yeni</h1>
          
          <div className="form-inputs">
          
            <div className="left">
              <label>Kateqoriya:</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).category} onChange={GetCategoryedit} type="text" />
              <label>Ad:</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).name} onChange={GetNameedit} type="text" />
              <label>Qiymet:</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).price} onChange={GetPriceedit} type="text" />
              <label>Tesvir:</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).description} onChange={GetDescriptionedit} type="text" />
              <label>Yeni:</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).neww} onChange={GetNewwedit} type="text" />
              <label>Sekil:</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).image} onChange={GetImageedit} type="text" />
            </div>
            <div className="right">
              <label>Emeli Yaddas(GB):</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).ssd} onChange={GetSsdedit} type="text" />
              <label>Merkezi Processor:</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).cpu} onChange={GetCpuedit} type="text" />
              <label>Daimi yaddas(GB):</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).hdd} onChange={GetHddedit} type="text" />
              <label>Daimi yaddas tipi:</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).typehdd} onChange={GetTypehddedit} type="text" />
              <label>Emeliyyat tipi:</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).os} onChange={GetOsedit} type="text" />
              <label>Video kart(GB):</label>
              <input defaultValue={JSON.parse(localStorage.getItem('editInfo')).videcart} onChange={GetVidecartedit} type="text" />
            </div>
          </div>
          <hr />
          <div className="form-buttons">
            <button onClick={handleCloseEdit} className="save">Yadda Saxla</button>
            <button className="reset">Melumatlari sifirla</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
