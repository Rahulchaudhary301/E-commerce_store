import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { NavLink, useParams } from 'react-router-dom'
import { useMainFilterData } from '../Contex/MainDataContex'
import { formatePrice } from './GetUniqData'
import ImageDataa from './ImageData'
import StarRating from './StarRating'

import { TbTruckDelivery } from "react-icons/tb";
import { TbReplaceFilled } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useAddToCart } from '../Contex/AddCartContex'






function SingleData() {


    const { getSingleProduct, SingalProductData, ImageArray, Image } = useMainFilterData()

    const { id } = useParams()

    const url = `https://api.pujakaitem.com/api/products?id=${id}`






    useEffect(() => {
        getSingleProduct(url)
    }, [])


    const {  company, description, name, price, shipping, stock ,} = SingalProductData

    const [amount,setAmount]=useState(1)





    const setIncrement=()=>{
        
        amount < stock ? setAmount(amount +1) :setAmount(stock)
    }

    const setDecrement=()=>{
        amount > 1? setAmount(amount -1):setAmount(1)
    }





    const alertpopup=()=>{
       
        toast.success("Item added succefully!",{
            theme:"colored",
        });
    }








    // useEffect(()=>{
    //    let Pata=SingalProductData
    //    let arr=Pata.image
    //    console.log(arr)
    //    ImageArray(arr)

    // },[SingalProductData])



    useEffect(() => {
        ImageArray()

    }, [SingalProductData])



    const {stockData ,AddCard} = useAddToCart()







    return (
        <div>
            <div className="navigationn">
                <NavLink className='na' to='/mainpage'>
                    <div className="navigationn1">
                        BACK
                    </div>
                </NavLink>
                <div className="navigationn1">
                    / {name}
                </div>
            </div>

            <div className="singledata">
                <div className="row">
                    <div className="col">
                        <ImageDataa Data={SingalProductData.image} />

                    </div>
                    <div className="col">
                        <div className="dattt">
                            <h4> {name}</h4>
                            <StarRating/>
                            <del className='dell'>MRP :{formatePrice(price + 25000)}</del>
                            <span className='dillof'>Deal of the Day : {formatePrice(price)}</span>
                            <p className='disss'> {description}</p>

                            <div className="sinicon">
                                  <div className="row ">
                                    <div className="col deliverymiddile">
                                       <div className="deic">
                                         <TbTruckDelivery/>
                                       </div >
                                        <p>Free Delivery </p>
                                    </div>
                                    <div className="col deliverymiddile">
                                    <div className="deic">
                                      <TbReplaceFilled/>
                                    </div>
                                        <p>30 Days Replacement</p>
                                    </div>
                                    <div className="col deliverymiddile">
                                    <div className="deic">
                                      <MdOutlineSupportAgent/>
                                    </div>
                                        <p>24 Hours Support</p>
                                    </div>
                                    <div className="col deliverymiddile">
                                    <div className="deic">
                                      <RiSecurePaymentFill/>
                                    </div>
                                        <p>Highly Secure service</p>
                                    </div>
                                    <hr></hr>
                                  </div>
                                  
                            </div>
                            <p>Avilable : {stock}</p>
                            <span className='idddd'>Id :Rahul</span>
                            <p>Brand : {company} </p>
                            <hr></hr>
                        </div>
                       
                       <div className="items">
                           <FaMinus onClick={setDecrement} className='itemmm'/>
                            <span>{amount}</span>
                           <FaPlus onClick={setIncrement} className='itemmm'/>
                       </div>

                        <button  onClick={()=>   {  {alertpopup()}  AddCard(amount , SingalProductData ,stock)}}   className='btn btn-warning'>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <ToastContainer className='iconnnn' />
        </div>
    )
}

export default SingleData  
