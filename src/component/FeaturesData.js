import React from 'react'
import Products from './Products'
import { useProductContex } from '../Contex/Product_Context'

function FeaturesData() {
    
    const {featureProducts}=useProductContex()
    return (
        <div>
            <Products Data={featureProducts} />


        </div>
    )
}

export default FeaturesData
