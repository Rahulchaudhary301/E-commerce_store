import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'



function ImageDataa({ Data = [{ url: "" }] }) {


    const [img,setImg]=useState(0)


    const handlepic=(id)=>{
        setImg(id)
    }

    return (
        <div>






            <div className="row">
                <div className="col pii">

                    {
                        Data.map((ele,index) => {
                            return (
                                <NavLink onClick={()=>handlepic(index)}><img   className='god' src={ele.url}></img></NavLink>
                            )
                        })
                    }

                </div>
                <div className="col piii">
                    <img className='godd' src={Data[img].url}></img>
                </div>
            </div>


        </div>
    )
}

export default ImageDataa
