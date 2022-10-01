import React from 'react';
import './category.css';
import { GetCategoryData } from '../../Redux/Reducers/AddCompReducer';
import { useDispatch, useSelector } from "react-redux/es/exports";
export default function Category() {
    if(JSON.parse(localStorage.getItem('NewCompsData'))===null){
        localStorage.setItem('NewCompsData',JSON.stringify([]))
    }
    const dispatch  = useDispatch();
    const ArrayCleaner = (arr) => {
        const NewArr = [];
        for(let i of arr){
            if(!NewArr.includes(i)){
                NewArr.push(i)
            }
        }
        return NewArr
    }
    const AllCompDatas = JSON.parse(localStorage.getItem('NewCompsData'));
    const [AllCompData,setAllCompsData] = React.useState(AllCompDatas);
    const NewCategoryDatas = [];
    for(let i of AllCompData){
        NewCategoryDatas.push(i.category)
    }
    const [CategoryData,setCategoryData] = React.useState(ArrayCleaner(NewCategoryDatas));
    // console.log(CategoryData)
    const AllComps = (e) => {
        const dt = JSON.parse(localStorage.getItem('NewCompsData'));
        localStorage.setItem('MyCompsData',JSON.stringify(dt));
        dispatch(GetCategoryData(dt))
        // console.log()

        // console.log("all")
    }
    const ShowCategory = (e) => {
        // e.target.style.color = 'red';
        const CategoryName = e.target.innerText;

        const AllData = JSON.parse(localStorage.getItem('NewCompsData'));

        const CategoryCompsData = AllData.filter((obj,ind)=>{
            return obj.category.toLowerCase() === CategoryName.toLowerCase();
        })
        localStorage.setItem('MyCompsData',JSON.stringify(CategoryCompsData))

        dispatch(GetCategoryData(CategoryCompsData))

        console.log(CategoryCompsData)
    }
    const CategoryElements = CategoryData.map((el,ind)=>{
        return (
            <li onClick={ShowCategory} id={ind} key={ind}>{el}</li>

        )
    })

  return (
    <div className='left-side'>
        <form className='searching'>
            <input className='inputt' type="text" placeholder="Axtaris" />
        </form>

        <div className='category-list'>

            <ul>
                <li onClick={AllComps}>Hamsi</li>
                {CategoryElements}
            </ul>

        </div>

    </div>
  )
}
