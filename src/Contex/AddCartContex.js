import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from '../Reducer/AddCardReducer'
import { useMainFilterData } from "./MainDataContex";



const AddCartContex=createContext();


const getDataFromLocalStorage=()=>{
    let raw = localStorage.getItem("rahulCart");
    if(!raw) return []
    if(raw===[]){
        return [];
    }
    else{
        return JSON.parse(raw)
    }
}


console.log("Rahul")
console.log(getDataFromLocalStorage())

const initalState={
    
    CartItem:getDataFromLocalStorage(),
    total_items:'',
    total_price:'',
    shiping_fee:5000,
    subTotal:''

}


const CardProvider=({children})=>{



    const [state, dispatch]=useReducer(reducer,initalState)


    const {SingalProductData} = useMainFilterData()


   



    

    
    const setIncrement=(id ,stock)=>{
        
        dispatch({type:"INCREMENET_VALUE",payload:id , stock:stock})
        
    }

    const setDecrement=(id , stock)=>{
        
        dispatch({type:"DECREMENT_VALUE",payload:id , stock:stock})
    }



    const ClearCartItem=()=>{
       

        dispatch({type:"REMOVE_ALL_CART_ITEMS"})
       
    }




    const RemoveCard=(id)=>{
       

        dispatch({type:"REMOVE_CART_DATA",payload:id})
       
    }



const AddCard=(amount,data ,stock)=>{
   

    dispatch({type:"ADD_CART_DATA",payload:data , amount:amount, stock:stock})

    
   
}



useEffect(()=>{
    dispatch({type:"COUNT_TOTAL_PRICE"})
    dispatch({type:"COUNT_CART_NUMBER"})
},[state.CartItem])




useEffect(()=>{

    localStorage.setItem("rahulCart",JSON.stringify(state.CartItem))
},[state.CartItem])




    return(
        <AddCartContex.Provider value={{
            ...state,
            AddCard,
            RemoveCard,
            setIncrement,
            setDecrement,
            ClearCartItem,
            
            
            }}>
             {children}
        </AddCartContex.Provider>
    )
}


// custom hooks


const useAddToCart=()=>{
   
    return(
        useContext(AddCartContex)
    )
}



export {AddCartContex,CardProvider,useAddToCart}
