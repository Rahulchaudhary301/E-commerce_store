import React from 'react'
import Products from './Products'
import { useProductContex } from '../Contex/Product_Context'
import { formatePrice } from './GetUniqData'
import { NavLink } from 'react-router-dom'

function FeaturesProducts() {
    const { featureProducts } = useProductContex()
    const screenWidth = window.innerWidth

    return (
        <div>
            <div className="fmain">
                <div className="mm">
                    <span className='spa'>CHECK NOW</span>
                    <h3>Our feature Services</h3>
                </div>


                <div className="fcontain">
                    {
                        screenWidth > 700 ?
                        <Products Data={featureProducts} />
                        :

                        <div className="wraper">
                   
                        {
                            featureProducts.map((ele) => {
                                return (
                                    
                                    <div className="cards">
                                    <div className="item">
                                     <NavLink className='listt contentfont' to={`/singleproduct/${ele.id}`} >
                                        <img src={ele.image}></img>
                                        <div className='p'>
                                            <span>{ele.name}</span>
                                            <span>{formatePrice(ele.price)} </span>
                                        </div>
                                    </NavLink>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    }

                    
                </div>

            </div>
        </div>
    )
}

export default FeaturesProducts
