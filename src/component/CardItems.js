import React, { useState } from 'react'
import { useAddToCart } from '../Contex/AddCartContex'
import { formatePrice } from './GetUniqData'
import { AiFillDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useMainFilterData } from '../Contex/MainDataContex';

import {NavLink} from 'react-router-dom'

function CardItems() {

    const {SingalProductData}=useMainFilterData()

    const { CartItem, RemoveCard ,setIncrement,setDecrement,total_price,ClearCartItem,shiping_fee ,subTotal} = useAddToCart()

    const { stock } = SingalProductData

    const{}=useAddToCart()

    
    
    if(CartItem.length==0){
        return(
            <div className="empcart">
                  <h3 className='emptycart'>Cart is empty</h3>
            </div>
        )
    }


    return (





        <div className='carttt'>

            <div className="row ">
                <div className="impo">
                    <div className="col textt">ITEM</div>
                    <div className="col textt">PRICE</div>
                    <div className="col textt">QUANTYTY</div>
                    <div className="col textt">SUBTOTAL</div>
                    <div className="col textt">REMOVE</div>
                </div>
            </div>
            <hr></hr>



            {
                CartItem.map((ele) => {
                    return (
                        <div className="row cartt">
                            <div className="col textt">
                                <div className="cv">
                                    <img className='imgg' src={ele.image}></img>
                                    <p >{ele.name}</p>
                                </div>
                            </div>

                            <div className="col textt">
                                {formatePrice(ele.price)}
                            </div>
                            <div className="col textt">

                                <div className="items">
                                    <FaMinus onClick={()=> setDecrement(ele.id , stock)} className='itemmm' />
                                        <span className='iitm'>{ele.quantity}</span>
                                     <FaPlus onClick={()=> setIncrement(ele.id , stock)} className='itemmm' />
                                </div>

                            </div>
                            <div className="col textt">
                                {ele.subPrice}
                            </div>
                            <div className="col textt">
                                <AiFillDelete onClick={() => RemoveCard(ele.id)} className='icccc' />
                            </div>
                        </div>
                    )
                })
            }

            <hr></hr>

            <div className="buttonn">
               <NavLink to='/mainpage'><button className='btn btn-success'>CONTINUE SHOPING</button></NavLink>
               <button onClick={ClearCartItem} className='btn btn-danger'>CLEAR CART</button>
            </div>

            <div className="total">
                <div className="page">
                   
                   <div className="p">
                      <span>SubTotal :</span>
                      <p>{subTotal}</p>
                   </div>

                   <div className="p">
                      <span>Shipping Fee :</span>
                      <p>{ formatePrice(shiping_fee)}</p>
                      
                   </div>
                   
                     
                    <div className="p">
                      <span>Order Total :</span>
                      <p>{total_price}</p>
                   </div>
                    
                   
                </div>
                <hr ></hr> 
            </div>
            
        </div>





    )
}

    export  default CardItems
