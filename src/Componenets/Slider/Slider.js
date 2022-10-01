import React from 'react';
import './slider.css';
import { AiOutlineLine } from 'react-icons/ai';
import { CompInfoData } from '../../Data/SliderData';
export default function Slider() {
    console.log(CompInfoData)
    const sol = "<";
    const sag = ">";
    const [numofclick,setNumOfClick] = React.useState(0);
    const [index,setIndex] = React.useState(0);
    const [nextButtonDisabled,setNextButtonDisabled] = React.useState(false);
    const [prevButtonDisabled,setPrevButtonDisabled] = React.useState(false);

    const stle1 = {
        color:index===0 ? "red" :"black"
    }
    const stle2 = {
        color:index===1 ? "red" :"black"
    }
    const stle3 = {
        color:index===2 ? "red" :"black"
    }
    const stle4 = {
        color:index===3 ? "red" :"black"
    }
    const stle5 = {
        color:index===4 ? "red" :"black"
    }

    
    const GetFirstSlide = (e) =>{
        setIndex(0)
    }
    const GetSecondSlide = (e) =>{
        setIndex(1)
    }
    const GetThirdSlide = (e) =>{
        setIndex(2)
    }
    const GetFourthSlide = (e) =>{
        setIndex(3)
    }
    const GetFivethSlide = (e) =>{
        setIndex(4)
    }
    const GetPrevSlide = (e) => {
        setNumOfClick(count=>count-1);
        setIndex(prev=>prev-1);
        console.log("prev")
    }
    const GetNextSlide = () => {
        console.log("next")
        setNumOfClick(count=>count+1)
        setIndex(prev=>prev+1)
    }
    React.useEffect(()=>{
        if(numofclick>=4){
            
            setNextButtonDisabled(true)
            setPrevButtonDisabled(false)
            
            
        }
        if(numofclick<=0){
            setPrevButtonDisabled(true)
            setNextButtonDisabled(false)
        }
        if(numofclick>0 && numofclick<4){
            setPrevButtonDisabled(false)
            setNextButtonDisabled(false)

        }

    },[numofclick])
    
    console.log(numofclick)

  return (
    <div className='all'>
    <div className='slidercontent'>
        
        

        <button disabled={prevButtonDisabled}  onClick={GetPrevSlide} className='sol'>{sol}</button>


        <img alt="kmp" src={CompInfoData[index].imageUrl} />


        <button disabled={nextButtonDisabled} onClick={GetNextSlide} className='sag'>{sag}</button>



    </div>
    <div className='info'>

        <p>{CompInfoData[index].name}</p>
        <p>{CompInfoData[index].description}</p>

    </div>
    <div className='detectline'>
        <AiOutlineLine style={stle1} values='1' onClick={GetFirstSlide} className='line' />
        <AiOutlineLine style={stle2} values='2' onClick={GetSecondSlide} className='line' />
        <AiOutlineLine style={stle3} values='3' onClick={GetThirdSlide} className='line' />
        <AiOutlineLine style={stle4} values='4' onClick={GetFourthSlide} className='line' />
        <AiOutlineLine style={stle5} values='5' onClick={GetFivethSlide} className='line' />

    </div>
    </div>
  )
}
