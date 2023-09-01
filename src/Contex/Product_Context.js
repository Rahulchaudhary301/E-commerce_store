import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/Product_Reducer'



const AppContext=createContext();


const initialState={
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    category:[]

}



const AppProvider=({children})=>{


const [state,dispatch]=useReducer(reducer,initialState);


const fetchData=async()=>{
    try {
        const res= await fetch('https://api.pujakaitem.com/api/products')
        //https://api.pujakaitem.com/api/products?id=thapaserialnoe
        const data= await res.json()
         console.log(data)
        dispatch({type:"SET_DATA",payload:data})


        
    } catch (error) {

        console.log(error)
        
    }
}







useEffect(()=>{
    fetchData()
    
},[])


 

    return(
        <AppContext.Provider value={{
            ...state,
            name:"Rahul chaudhary"
            
            }}>
            {children}
        </AppContext.Provider>
    )
}



//customhook

const useProductContex=()=>{

    return(
        useContext(AppContext)
    )
}



export {AppContext, AppProvider,useProductContex}