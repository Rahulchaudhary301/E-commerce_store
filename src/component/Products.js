import React from 'react'
import {NavLink} from 'react-router-dom'

import { formatePrice } from './GetUniqData'

function Products({ Data }) {

    const { image, category, price } = Data

  

    if (Data.length == 0) {
        return <h1>Loding.....</h1>

    }

    return (
        <div>

            <div className='main'>
                {
                    Data.map((ele) => {
                        return (

                          <NavLink className='listt contentfont' to={`/singleproduct/${ele.id}`} >
                          <div className='cardContainer'>
                           <div className='card'>
                                <img src={ele.image}></img>


                                <div className='p'>
                                    <span>{ele.name}</span>
                                    <span>{formatePrice(ele.price)} </span>
                                </div>

                            </div>
                           </div>
                          </NavLink>

                        )

                    })
                }
            </div>

        </div>
    )
}

export default Products
