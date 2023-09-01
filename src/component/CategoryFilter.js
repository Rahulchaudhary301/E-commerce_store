import React from 'react'
import { useProductContex } from '../Contex/Product_Context'
import { uniueData } from './GetUniqData'
import { useMainFilterData } from '../Contex/MainDataContex'

function CategoryFilter() {
    const { products  } = useProductContex()
    const Uni = uniueData(products, "category")

    const {soringByCategory}=useMainFilterData()

    return (
        <div>
            <h4 className='cate'>Category</h4>
            <div  className='uu'>
                <button  onClick={soringByCategory} value='All' className='category'>ALL</button>
                {
                    Uni.map((ele) => {
                        return (
                            <button type='button' onClick={soringByCategory} className='category' name='category' value={ele} >{ele.toUpperCase()}</button>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CategoryFilter
