import { createContext, useContext, useEffect, useReducer } from "react";
import MainDataReducer from "../Reducer/MainData_Reducer";
import { useProductContex } from "./Product_Context";
import { formatePrice } from "../component/GetUniqData";



const AppContex= createContext();


const initialState={
    filterProduct:[],
    isGridView:false,
    AllProducts:[],
    Sorting_Value:"lowest",
    Category_Sorting:"All",
    Company_Sorting:"All",
    Max_Price:0,
    Min_Price:0,
    price:0,
    Search:"",
    SingalProductData:[],
    Image:[],

}





const AppMainProvider=({children})=>{



    const [state ,dispatch]=useReducer(MainDataReducer,initialState)

     const{products}=useProductContex()
    


  const gridview=()=>{
    dispatch({type:"SET_VIEW"})
  }

  const listView=()=>{
    dispatch({type:"LIST_VIEW"})
  }











//maxmin

const PriceFormate=()=>{
   let Data=products
   const priceData= Data.map((ele)=>ele.price)
   
   const MaxPrice=Math.max(...priceData) 
   const MinPrice=Math.min(...priceData) 
   
    dispatch({type:"MAX_PRICE",payload:MaxPrice})
    dispatch({type:"MIN_PRICE",payload:MinPrice})
}

useEffect(()=>{
   PriceFormate()
},[products,])



const PriceFilter=(e)=>{
  let name=e.target.name;
  let value=e.target.value

  return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
}






  ///sorting

  const sorting=(e)=>{
    let value=e.target.value
      dispatch({type:"GET_SORT_VALUE" ,payload:value})
  }

  const soringByCategory=(e)=>{
         let value=e.target.value;
         dispatch({type:"SORTING_CATEGORY_VALUE",payload:value})
  }


  const soringByCompany=(e)=>{
    let value=e.target.value;
  
    dispatch({type:"SORTING_COMPANY_VALUE",payload:value})
}



const soringBySearch=(e)=>{
  let value=e.target.value;
    
  dispatch({type:"SORTING_SEARCH_VALUE",payload:value.toLowerCase()})
}


const ClearFilter=()=>{
  
  dispatch({type:"CLEAR_ALL",payload:products})
}



const ImageArray=(data)=>{
  dispatch({type:"GET_IMAGE",payload:data})
}









useEffect(()=>{
  dispatch({type:"SORTING_PRODUCT_SEARCH",payload:products})
},[products,   state.Search])




useEffect(()=>{
    dispatch({type:"SORTING_PRODUCT",payload:products})
},[state.Sorting_Value])


useEffect(()=>{
  dispatch({type:"SORTING_RANGE_PRODUCT",payload:products})
},[products,state.price])


useEffect(()=>{
  dispatch({type:"CATEGORY_FILTER_PRODUCT",payload:products})

},[products ,state.Category_Sorting])


useEffect(()=>{
  dispatch({type:"COMPANY_FILTER_PRODUCT",payload:products})

},[products ,state.Company_Sorting])

useEffect(()=>{
  dispatch({type:"LOAD_FILTER_PRODUCT",payload:products})
},[products])





  
const getSingleProduct= async(url)=>{

  const res= await fetch(url)
 
  const data= await res.json()

  dispatch({type:"GET_SINGLE_PRODUCTS",payload:data})
  

}




    return (
        <AppContex.Provider value={{
            ...state,
            gridview,
            listView,
            sorting,
            soringByCategory,
            soringByCompany,
            PriceFilter,
            soringBySearch,
            ClearFilter,
            getSingleProduct,
            ImageArray,
            Image,
        }}>
            {children}
        </AppContex.Provider>
    )

}

// customHook

const useMainFilterData=()=>{

    return(
        useContext(AppContex)
    )
}

export {AppContex, AppMainProvider,useMainFilterData}