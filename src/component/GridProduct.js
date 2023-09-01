import React from 'react'
import { useMainFilterData } from '../Contex/MainDataContex'
import { formatePrice } from './GetUniqData'
import { NavLink } from 'react-router-dom'





function GridProduct({Data}) {




    return (
        <div>

            {
                Data.map((ele) => {
                    return (
                        
                        <div className="maingrid">
                            <div className="row">
                            
                                <div className="col maingr">
                                    <NavLink className='listt contentfont' to={`/singleproduct/${ele.id}`} >
                                       <img className='maingrimage' src={ele.image}></img>
                                    </NavLink>
                                </div>
                                
                          

                                <div className="col mainda">

                                    <h4>{ele.name.toUpperCase()}</h4>
                                    <span> {formatePrice(ele.price)}</span>
                                    <p className='lessde'>{ele.description.slice(0,90)}</p>
                                    <button className='btn btn-warning'>READ MORE</button>
                                </div>


                            </div>
                        </div>
                        
                    )
                })
            }

        </div>
    )
}

export default GridProduct
