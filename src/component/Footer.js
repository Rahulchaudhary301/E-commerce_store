import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from 'react-router-dom';


function Footer() {


    return (
        <div className='fff'>
            <div className="fmainn">
                <div className="row">
               
                    <div className="col">
                        <h5>Rahul Cahudhary</h5>
                        <p className='con'>I am bluddy engineer from BCE Bhagalpur</p>

                    </div>


                    <div className="col">
                        <p>Subcribe to get Updates</p>
                        <div>
                            <input className='inpp' type='text' placeholder='YOUR E-MAIL'></input>
                        </div>
                        <div className="fbut">
                            <button className='btn btn-danger butcon'>SUBSCRIBE</button>
                        </div>
                    </div>


                    <div className="col">
                          <p className='follow'>Follow Us</p>
                          <div className="ficon">
                              <div className='ic'><Link to='https://www.facebook.com/profile.php?id=100004000444519' target='blanck'><FaFacebook/></Link></div>
                              <div className='ic'><Link to='https://www.instagram.com/rahulchaudhary301/' target='blanck'><AiFillInstagram /></Link></div>
                              <div className='ic'><Link to='https://rahulportfolios.netlify.app/' target='blanck'><BsBrowserChrome /></Link></div>

                          </div>
                    </div>


                    <div className="col">
                        <p className='follow'>Call Us</p>
                        <div className='iibbb'>

                        <BiSolidPhoneCall className='ic'/>
                        <p> 9852675983</p>
                        </div>

                    </div>

                    
                </div>
            </div>

            <hr className='hrrr'></hr>
            <div className="writer">
                <p >@2023 make by @rahuchaudhary</p>
            </div>



        </div>

        
    )
}

export default Footer
