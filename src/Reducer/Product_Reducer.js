

const ProductReducer= (state, action)=>{

    

    switch(action.type){

        case "SET_DATA":

           const previewData=action.payload.filter((ele)=>{
            return ele.featured === true
           })
            
            return {
                ...state,
                products:action.payload,
                featureProducts:previewData
            };

        case "SET_CATEGORY":

        const uniq=Set()


        return{

            ...state,

        }



        default:
             return state
    }
}





export default ProductReducer