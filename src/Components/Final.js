import React, { useContext,useEffect, useState } from 'react'
import Inside from './Inside'
import Leg from './Leg'
import { useParams } from 'react-router-dom'
import { CategoryContext } from './Matter'

const Final = () => {
    const {id} =useParams();
    const[category]=useContext(CategoryContext);
    const[dataa,setDataa] =useState({ img:"",det:"",date:"",description:"",category:""})


    useEffect(() => {
        category.forEach((view)=>{
            if(view.id===id){
                console.log("Matched Param");
                setDataa({
                    img:view.img,
                    det:view.det,
                    date:view.date,
                    description:view.description,
                    category:view.category,
                });
            }
        });
    },)
    
    return (
        <div>
            <h1 className='ram'>{dataa.category}</h1><hr className='okati'/>
            <div className='rama'>
            <div>
               <div className='rimg'><img src={dataa.img} alt="" /></div>
               <div className='rd3'><h3>{dataa.det}</h3></div>
               <div className='rd5'><h5>{dataa.date}</h5></div>
               <div className='rd'><p>{dataa.description}</p></div>
            </div>
            </div>
            <Inside/><br/>
            <Leg/>
        </div>
    )
}
export default Final;