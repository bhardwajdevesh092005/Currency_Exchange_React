import { useState, useEffect } from "react";
function useCurInfo(currency)
{
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`).then(data=>data.json()).then(res=>res[currency]).then(dat=>setData(dat)); 
    },[currency]);
    return data;
} 
export default useCurInfo;