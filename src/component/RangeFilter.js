import React from 'react'
import { useMainFilterData } from '../Contex/MainDataContex'
import { formatePrice } from './GetUniqData'



function RangeFilter() {

    const { Max_Price,Min_Price,PriceFilter,price}=useMainFilterData()

    return (
        <div className='ranaa'>
            <h3 className='cate'>Price</h3>
            <p className='listt'>{formatePrice(price)}</p>

            <input  onChange={PriceFilter}  type='range' name='price' min={Min_Price} max={Max_Price} value={price} step='10' ></input>
        </div>
    )
}

export default RangeFilter
