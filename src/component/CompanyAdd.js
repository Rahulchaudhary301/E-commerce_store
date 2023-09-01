import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import { SiAmazonaws } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function CompanyAdd() {
    return (
        <div>
            <div className="company">

               <div className="coma">
                    <p>Trusted By 100+ Comapanies</p>
               </div>


                <div className="compantdata">
                    <div className="row roww">
                        <div className="col ro">
                            <div className="">
                            <FcGoogle className='icc'/>
                            </div>
                        </div>

                        <div className="col ro">
                            <div className="">
                               <SiAmazonaws className='icc' />
                            </div>
                        </div>

                        <div className="col ro">
                            <div className="">
                              <FaHeart className='icc'/>
                            </div>
                        </div>

                        <div className="col ro">
                           <div className="">
                              <BiBarChartSquare className='icc'/>
                           </div>
                        </div>

                        <div className="col ro">
                            <div className="">
                              <FaReact className='icc'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyAdd
