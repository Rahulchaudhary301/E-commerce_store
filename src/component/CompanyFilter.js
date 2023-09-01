import React from 'react'
import { useProductContex } from '../Contex/Product_Context'
import { uniueData } from './GetUniqData'
import { useMainFilterData } from '../Contex/MainDataContex'

function CompanyFilter() {


    const { products } = useProductContex()

    const UniCompany=uniueData(products, "company")

    const {soringByCompany}=useMainFilterData()

    return (
        <div>
            <h4 className='cate'>Comapany</h4>

            <form className='coma'>

                <select onClick={soringByCompany}  className='listt' id="company" name="company">
                    <option  className='listt' value='All'>All</option>
                    {
                        UniCompany.map((ele) => {
                            return (
                                <option  className='listt'  value={ele}>{ele.toUpperCase()}</option>
                            )
                        })
                    }

                </select>
            </form>

        </div>
    )
}

export default CompanyFilter
