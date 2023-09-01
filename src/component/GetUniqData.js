import React, { useEffect, useState } from 'react'









   export  const uniueData=(data,property)=>{
        const uniq=data.map((ele)=>  ele[property])

        const uData=[...new Set(uniq)]
         return uData
    }


   export const formatePrice=(price)=>{
       return Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR",
        maximumFractionDigits:2,
       }).format(price / 100)
    }

    

  



