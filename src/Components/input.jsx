import { useState, useEffect, useRef} from "react";
import { valid } from "semver";
function inputTab({
    type,
    currency,
    amount,
    onAmtChange,
    OnCurrChange,
    curroptions = ["usd","inr"],
    amtDisable = false,
    currDisable = false
})
{
    let menRef = useRef();
    return(
    <>
        <div className="flex justify-center align-middle">
            <div className="w-fit flex justify-evenly bg-slate-500 rounded-xl max-w-screen-sm h-fit mt-2 ml-2">
                <div className="ml-1">
                    <div className="ml-1">{type}</div>
                    <select className="appearance-none bg-slate-900 text-white rounded ml-1 mb-1" name="Currency Option" ref={menRef} disabled={currDisable} value={String(currency)} onChange={(e)=>{OnCurrChange(e.target.value)}}>
                    {
                        curroptions.map((e)=>{
                            return(
                                <option value={String(e)} key={String(e)}>{String(e)}</option>
                            )
                        })
                    }
                    </select>
            </div>
            <div className="mr-1 h-fit">
                <div className="ml-1">Value</div>
                <input className="appearance-none bg-slate-900 text-white rounded ml-1 mb-1" type="number" min={0} max={1e9} disabled={amtDisable} value={amount} onChange={(e)=>{onAmtChange(Number(e.target.value))}}/>
                </div>
            </div>
        </div>
    </>
    )
};
export default inputTab;
