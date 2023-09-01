
import React from 'react'
import { BsCartFill } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { useAddToCart } from '../Contex/AddCartContex';
import logo from '../Image/logo.png'




function NavBar() {

const {total_items}=useAddToCart()


    return (
        <div >

            <div className='containerr'>

                <div className='div1'>
                    <NavLink to='/'><img className='logoo' src={logo}></img></NavLink>
                </div>





                <ul className='div2'  >
                    <li><Link to='/' className='lii'>HOME</Link></li>
                    <li><Link to='mainpage' className='lii'>PRODUCTS</Link></li>
                    <li><Link to='addcart' className='lii'>CART</Link></li>
                    <li><Link to='contact' className='lii'>CONTACT</Link></li>

                    <li>
                        <div className='profile'>
                            <img className='pro' src='https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-814242f/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg'></img>
                        </div>
                    </li>
                    <li ><button className='btnn'>LOGIN</button></li>
                    <li>

                        <NavLink to='/addcart'>
                            <div className='cart-icon'>

                                <i class="fa fa-shopping-cart"><BsCartFill /></i>
                                <span className='cart-badge'>{total_items}</span>
                            </div>
                        </NavLink>

                    </li>
                </ul>



            </div>

        </div>
    )
}

export default NavBar
