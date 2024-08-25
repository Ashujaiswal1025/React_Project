import { useState,useEffect } from "react";



function useCurrencyInfo(Currency){
    const [data, setData] = useState({});
    
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${Currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[Currency]))
    },[Currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;