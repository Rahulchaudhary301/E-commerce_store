import React from 'react'
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { useMainFilterData } from '../Contex/MainDataContex';




function StarRating() {
    const { SingalProductData} = useMainFilterData()

    const{reviews,  stars,}=SingalProductData;

    const RatingSatr=Array.from({length:5},(elem,index)=>{
        let number=index + 0.5

        return(
            <span key={index}>
                {
                    stars >= index + 1 ? (
                      <FaStar/>
                    )
                    :stars >= number ?(
                      <FaStarHalfAlt/>
                    )
                    :(
                     <AiOutlineStar/>
                    )
                }
            </span>
        )
    })

    return (
        <div>
           <div className="startIcon">
           <span> {RatingSatr}</span>
            <p>({reviews} customer reviews)</p>
           </div>

        </div>
    )
}

export default StarRating
