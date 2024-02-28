import './App.css'
import { useState } from 'react'
function App() {

  const [color, setColor] = useState("olive")


  return (
   <>
   <div className="grid content-between text-center p-10 w-full h-screen" style={{backgroundColor: color}}>
    <h1 className='text-blue-500'>Click Button to Change Background color</h1>
    <div className='flex flex-wrap justify-evenly'>
      <button className="bg-red-500 rounded" onClick={() => setColor("red")}>Red</button>
      <button className='bg-blue-500 rounded' onClick={() => setColor("blue")}>Blue</button>
      <button className='bg-green-500 rounded' onClick={() => setColor("green")}>Green</button>
      <button className='bg-yellow-500 rounded' onClick={() => setColor("yellow")}>Yellow</button>
      <button className='bg-slate-500 rounded' onClick={() => setColor("pink")}>Pink</button>
      <button className='bg-purple-500 rounded' onClick={() => setColor("purple")}>Purple</button>
    </div>

   </div>

   </>
  )
}

export default App
