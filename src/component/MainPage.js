import React from 'react'
import { useProductContex } from '../Contex/Product_Context'
import { uniueData } from './GetUniqData'
import RangeFilter from './RangeFilter'
import CompanyFilter from './CompanyFilter'
import CategoryFilter from './CategoryFilter'
import { BsFillGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import SortByFilter from './SortByFilter'
import { useMainFilterData } from '../Contex/MainDataContex'
import Products from './Products'
import GridProduct from './GridProduct'


function MainPage() {



    const { filterProduct, isGridView, gridview, listView, soringBySearch ,ClearFilter } = useMainFilterData()

    const total = filterProduct.length


    return (
        <div>
            <div className="mainpagecontainer">
                <div className="row Mainn">
                    <div className="col-3 filter">

                        <div className="Mainn">
                            <form className='ff' onSubmit={(e) => e.preventDefault()}>
                                <input onChange={soringBySearch} type='text' placeholder='SEARCH ITEMS'></input>
                            </form>

                            <div>

                                <CategoryFilter />
                            </div>

                            <CompanyFilter />
                            <RangeFilter />
                            <div className="clearAll">
                                <button onClick={ClearFilter}>CLEAR FILTER</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-9">
                        <div className="mainhed">
                            <div>
                                <button onClick={listView} className='iccc' ><BsFillGridFill  className='mainic' /> </button>
                                <button  onClick={gridview} className='iccc'><FaBars className='mainic' /></button>
                            </div>
                            <div className='listt llbb'>{total} total Products</div>
                            <div>
                                <SortByFilter />
                            </div>
                        </div>

                        <div className='mainDataa'>
                            {
                                isGridView == false ? <Products Data={filterProduct} /> : <GridProduct Data={filterProduct} />

                            }


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
