import { useState, useEffect, useRef} from "react";
function inputTab({type, currency})
{
    const menuRef = useRef();
    useEffect(()=>{
        let currencies = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`).then(data => data.json()).then((res) => f(res["usd"]));
        let f = (list)=>{    let menu = document.getElementById("cr_menu");
        for (let x in list)
        {
            menuRef.current.innerHTML += `<option value = "${x}">${x}</option>`
            console.log(x,list[x]);
        }
    }
    },[type]);
    return(
    <>
        <div className="flex justify-center">
            <div className="w-fit flex justify-evenly bg-slate-500 rounded-xl max-w-screen-sm mt-2 ml-2">
                <div className="ml-1">
                    <div className="ml-1">{type}</div>
                    <select className="appearance-none bg-slate-900 text-white rounded ml-1 mb-1" name="Currency option" ref = {menuRef}>
                        <option value="">Select Currency</option>
                    </select>
                </div>
                <div className="mr-1">
                    <div className="ml-1">Value</div>
                    <input className="appearance-none bg-slate-900 text-white rounded ml-1 mb-1" type="number" min={0} max={1e9} />
                </div>
            </div>
        </div>
    </>
    )
};
export default inputTab;
