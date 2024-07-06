import { useState, useEffect } from "react";
function useCurInfo(currency)
{
    useEffect(()=>{
        const [data,setData] = useState({});
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`).then(data=>data.json()).then(setData(data[`${currency}`]));
        console.table(data);
    },[currency]);
    return data;
} 
export default useCurInfo;