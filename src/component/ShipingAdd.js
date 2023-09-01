import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiShieldQuarter } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";

function ShipingAdd() {
    return (
        <div>
            <div className="cmain">
                <div className="row">
                    <div className="col l">
                        <div className="div4">
                           <div className="smdiv">
                             <MdLocalShipping className='icon' />
                           </div>
                            <div>
                                <span className='addName'> Super fast and free delevery</span>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className='div3'>
                            <div className="div5">
                               <div className="smdiv">
                                 <BiShieldQuarter className='icon'/>
                               </div>
                                
                                    <span className='addName'> Non-Contact Shiping</span>
                                
                            </div>

                            <div className="div5">
                                   <div className="smdiv">
                                      <GiReceiveMoney className='icon'/>
                                   </div>
                                
                                 <span className='addName'> Money Back Gurantee</span>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col l">
                        <div className="div4">
                        <div className="smdiv">
                           <RiSecurePaymentLine className='icon' />
                        </div>
                            
                            <div>
                                <span className='addName'> Super Secure Payment System</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipingAdd
