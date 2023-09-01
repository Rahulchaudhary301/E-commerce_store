import React from 'react'

import pic from '../Image/shoping pic.jpg'
import { NavLink } from 'react-router-dom'

function HeroData() {
  return (
    <div className='m'>



      <div className="row">
        <div className="col py">

         <div className="pvb">
          <span>Welcome To</span>
          <div className="hhh">
          <h2 className='text'>Rahul Store</h2>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor ab praesentium nisi voluptatibus fuga molestias dolores harum</p>
          <div>
            <NavLink to='/mainpage'><button className='btn btn-warning'>Shoping</button></NavLink>
          </div>
         </div>

        </div>
        <div className="col px">
          {/* <div className="bgdiv" ></div> */}
          <img className='picc' src={pic}></img>
        </div>
      </div>
























      {/* <div className="container">
                <div className="row">
                    <div className="col">
                      <div className="herData">
                      <span>Welcome To</span>
                       <h2>Bajaj Store</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor ab praesentium nisi voluptatibus fuga molestias dolores harum</p>
                       <div>
                          <button className='btn btn-warning'>Shoping</button>
                       </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="pic">
                        <img src={pic}></img>

                      </div>
                    </div>
                </div>
            </div> */}
    </div>
  )
}

export default HeroData
