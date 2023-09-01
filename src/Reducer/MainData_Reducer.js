


const MainDataReducer = (state, action) => {

  switch (action.type) {

    case "LOAD_FILTER_PRODUCT":

      return {
        ...state,
        filterProduct: [...action.payload],
        AllProducts: [...action.payload]
      }


    case "SET_VIEW":

      return {
        ...state,
        isGridView: true
      }

    case "LIST_VIEW":

      return {
        ...state,
        isGridView: false
      }


    case "GET_SORT_VALUE":

      return {
        ...state,
        Sorting_Value: action.payload,
      }


    case "SORTING_CATEGORY_VALUE":

      return {
        ...state,
        Category_Sorting: action.payload,
      }

















    case "SORTING_PRODUCT":

      let newSortData;
      let tempSortdata = [...action.payload]

      if (state.Sorting_Value === "A-Z") {
        newSortData = tempSortdata.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }

      if (state.Sorting_Value === "Z-A") {
        newSortData = tempSortdata.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }

      if (state.Sorting_Value === "lowest") {
        newSortData = tempSortdata.sort((a, b) => {
          return a.price - b.price
        })
      }

      if (state.Sorting_Value === "higest") {
        newSortData = tempSortdata.sort((a, b) => {
          return b.price - a.price
        })
      }

      return {
        ...state,
        filterProduct: newSortData
      } 



case "CLEAR_ALL":

 return{
  ...state,
  filterProduct: action.payload
 }




case "MAX_PRICE":

 return{
  ...state,
  Max_Price:action.payload,
 }

 case "MIN_PRICE":

 return{
  ...state,
  Min_Price:action.payload,
 }




 case "SORTING_SEARCH_VALUE":

 return{
  ...state,
  Search:action.payload,
 }



 case "SORTING_PRODUCT_SEARCH":

 let sorting;
 let temappp = [...action.payload]
 sorting=temappp.filter((ele)=>ele.name.toLowerCase().includes(state.Search))

 return{

  ...state,
  filterProduct: sorting

 }


case "UPDATE_FILTER_VALUE":

const {name,value}=action.payload

return{
  ...state,
  [name]:value,

}


case "SORTING_RANGE_PRODUCT":

let Sorttt;
let temmmm=[...action.payload]

Sorttt=temmmm.filter((ele)=>ele.price >=state.price)

return {
  ...state,
  filterProduct: Sorttt
}




    


    case "CATEGORY_FILTER_PRODUCT":

      let sort;
      let temap = [...action.payload]

      if (state.Category_Sorting === "mobile") {
        sort = temap.filter((ele) => ele.category.toUpperCase() === "MOBILE")
      }

      if (state.Category_Sorting === "laptop") {
        sort = temap.filter((ele) => ele.category.toUpperCase() === "LAPTOP")
      }

      if (state.Category_Sorting === "computer") {
        sort = temap.filter((ele) => ele.category.toUpperCase() === "COMPUTER")
      }


      if (state.Category_Sorting === "accessories") {
        sort = temap.filter((ele) => ele.category.toUpperCase() === "ACCESSORIES")
      }
      if (state.Category_Sorting === "watch") {
        sort = temap.filter((ele) => ele.category.toUpperCase() === "WATCH")
      }

      if (state.Category_Sorting === "All") {
        sort = action.payload
      }

      return {
        ...state,
        filterProduct: sort
      }



    case "SORTING_COMPANY_VALUE":

      return {
        ...state,
        Company_Sorting: action.payload,
      }


      // case "GET_IMAGE":

      // return {
      //   ...state,
      //   Image:[...action.payload],
      // }





    case "COMPANY_FILTER_PRODUCT":

      let Sortt;
      let temapp = [...action.payload]

      if (state.Company_Sorting === "apple") {
        Sortt = temapp.filter((ele) => ele.company.toUpperCase() === "APPLE")
      }

      if (state.Company_Sorting === "samsung") {
        Sortt = temapp.filter((ele) => ele.company.toUpperCase() === "SAMSUNG")
      }

      if (state.Company_Sorting === "dell") {
        Sortt = temapp.filter((ele) => ele.company.toUpperCase() === "DELL")
      }

      if (state.Company_Sorting === "nokia") {
        Sortt = temapp.filter((ele) => ele.company.toUpperCase() === "NOKIA")
      }

      if (state.Company_Sorting === "asus") {
        Sortt = temapp.filter((ele) => ele.company.toUpperCase() === "ASUS")
      }

      if (state.Company_Sorting === "lenova") {
        Sortt = temapp.filter((ele) => ele.company.toUpperCase() === "LENOVA")
      }

      if (state.Company_Sorting === "rolex") {
        Sortt = temapp.filter((ele) => ele.company.toUpperCase() === "ROLEX")
      }
      if (state.Company_Sorting === "All") {
        Sortt = action.payload
      }

      return {
        ...state,
        filterProduct: Sortt
      }



      case "GET_SINGLE_PRODUCTS":

      return{
       ...state,
       SingalProductData: action.payload
      }
     


      


    default:
      return state
  }

}



export default MainDataReducer