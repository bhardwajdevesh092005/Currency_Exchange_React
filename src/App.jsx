import { useEffect, useState } from 'react'
import './App.css'
import InputTab from './Components/input'
import useCurInfo from './Hooks/Curr_Info'
function App()
{
    const [amt,setAmt] = useState(0);
    const [from,setFrom] = useState("usd");
    const [to,setTo] = useState("inr");
    const [conv,setCon] = useState(0);
    const currInfo = useCurInfo(from);
    let currOp = Object.keys(currInfo);
    useEffect(()=>{
        setCon(Number(amt)*Number(currInfo[to]));
    },[amt,from,to])
    let swap = ()=>{
        let x = Number(amt);
        setAmt(conv);
        setCon(x);
        setFrom(to);
        setTo(from);
    }
    return (
        <>
            <InputTab type={"From"} curroptions = {currOp} amount = {amt} onAmtChange = {setAmt} OnCurrChange = {setFrom} currency = {from}/>
            <div className='flex justify-center'>
                <button className='bg-blue-500 rounded-xl p-1 mt-2 hover:bg-blue-400' onClick={swap}>Swap</button>
            </div>
            <InputTab type={"To"} curroptions = {currOp} amount = {conv} onAmtChange = {setCon} OnCurrChange = {setTo} currency = {to}/>
        </>
    )
}

export default App
