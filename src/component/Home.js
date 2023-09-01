import React, { useContext } from 'react'
import { AppContext, useProductContex } from '../Contex/Product_Context'
import Products from './Products'
import HeroData from './HeroData'
import FeaturesData from './FeaturesData'
import FeaturesProducts from './FeaturesProducts'
import ShipingAdd from './ShipingAdd'
import CompanyAdd from './CompanyAdd'





function Home() {


const {name,products}= useProductContex()


    return (
        <div className='home'>

         <HeroData/>
         <FeaturesProducts/>
         <ShipingAdd/>
         <CompanyAdd/>
        </div>
    )
}

export default Home
