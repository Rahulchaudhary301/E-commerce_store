import { formatePrice } from "../component/GetUniqData"


const AddToCartReducer=(state,action)=>{





    switch(action.type){

        


        
   



        case "ADD_CART_DATA":
            
            let Data=action.payload
            let qn=action.amount
            let maxStock=action.stock

            let {id,name,company,price,image }=Data
            let subtotal=price *qn

        //    exiting Item

         let extingProduct=state.CartItem.find((ele)=> ele.id == id)

         if(extingProduct){

             let updatedProduct= state.CartItem.map((ele)=>{
               
                if(ele.id==id){


                    let newQuant=ele.quantity + qn

                    let updateprice= price *newQuant

                    if(newQuant >=maxStock){
                        newQuant=maxStock
                        updateprice=price * maxStock
                    }

                    return{
                        ...ele,
                        quantity:newQuant,
                        subPrice:formatePrice(updateprice),
                        amount:updateprice

                    }
                }
                else{
                    return ele
                }
             
             })

             return{
                ...state,
                CartItem:updatedProduct
             }
         }
       else{
    
          let item={
              id:id,
              name:name,
              comapny:company,
              price:price,
              subPrice:formatePrice(subtotal),
              image:image[0].url,
              quantity:qn,
              amount:subtotal
          }
        return {
            ...state,
            CartItem:[...state.CartItem ,item]

        }
}




        case "REMOVE_CART_DATA":

         let rm=state.CartItem
         let remove=rm.filter((item)=> item.id!==action.payload)

        return{
            ...state,
            CartItem:remove



        }


        case "INCREMENET_VALUE":
      
        let stock=action.stock
        let updatedProduct= state.CartItem.map((ele)=>{
            
            if(ele.id==action.payload){
                let incre = ele.quantity +1;
                 
                incre > stock ? incre=stock :incre=incre
                

                 let subT=ele.price * incre
                return{
                    ...ele,
                    quantity:incre,
                    subPrice:formatePrice(subT),
                    amount:subT
                }
            }
            else{
                return ele
            }
            
        })

    return{
        ...state,
        CartItem:updatedProduct

    }



    
    case "DECREMENT_VALUE":
      
    
    let updatedProdu= state.CartItem.map((ele)=>{
        
        if(ele.id===action.payload){
            let decre = ele.quantity - 1;
             
            decre < 1  ? decre=1 :decre=decre

             let subT=ele.price * decre
            return{
                ...ele,
                quantity:decre,
                subPrice:formatePrice(subT),
                amount:subT
            }
        }
        else{
            return ele
        }
        
    })

return{
    ...state,
    CartItem:updatedProdu

}
    

 case "COUNT_TOTAL_PRICE":

  let TotalPrice=state.CartItem.reduce((initaial, product) => {
    let {amount}=product
     return initaial=initaial + amount
  }, 0);

  let totalAndShipAmount=TotalPrice+state.shiping_fee

  let totoll=formatePrice(totalAndShipAmount) 

  return{
    ...state,
    total_price:totoll,
    subTotal:formatePrice(TotalPrice)
    
  }


  case "COUNT_CART_NUMBER":
    
     let upDateCart=state.CartItem.reduce((initial,curEle)=>{
               let {quantity} =curEle
              
               initial =initial + quantity
               return initial
     },0)
 

   return{
    
    ...state,
    total_items:upDateCart

   }




   case "REMOVE_ALL_CART_ITEMS":

   return{
    ...state,
    CartItem:[]
   }











        default : 
        return state;
    }

}


export default AddToCartReducer