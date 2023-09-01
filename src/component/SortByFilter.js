import React from 'react'
import { useMainFilterData } from '../Contex/MainDataContex'

function SortByFilter() {

const {sorting}=useMainFilterData()

    return (
        <div>
            <form>
            
                <select onClick={sorting} className='listt' id="sort" name="sort">
                    
                    <option className='listt' value="lowest">Price (Lowest)</option>
                    <option disabled></option>
                    <option className='listt' value="higest">Price (higest)</option>
                    <option disabled></option>
                    <option className='listt' value="A-Z">Name (A-Z)</option>
                    <option  disabled></option>
                    <option className='listt' value="Z-A">Name (Z-A)</option>
                </select>
            </form>
        </div>
    )
}

export default SortByFilter
