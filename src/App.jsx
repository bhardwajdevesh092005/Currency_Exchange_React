import { useState } from 'react'
import './App.css'
import InputTab from './Components/input'
function App()
{
    return (
        <>
            <InputTab type={"From"}/>
            <div className='flex justify-center'>
                <button className='bg-blue-500 rounded-xl p-1 mt-2 hover:bg-blue-400'>Swap</button>
            </div>
            <InputTab type={"To"}/>
        </>
    )
}

export default App
