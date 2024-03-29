import { useState, useCallback } from "react"

function App() {
  
const [length, setLength] =useState(8);
const [numberAllowed, setNumberAllowed] =useState(false); 
const [charAllowed, setCharAllowed] =useState(false);
const [password, setPassword] = useState(""); 
const passwordGenerator = useCallback (() => {
  let pass = "";
  let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
  if (numberAllowed) str += "0123456789";
  if(charAllowed) str += "!@#$%^&*(){}[]-_=+|`~";
  for (let i = 1; i<=array.length; i++){
    let char = Math.floor(Math.random() * str.length + 1); 
    pass = str.charAt(char);
  }
}, [length, numberAllowed,charAllowed, setPassword]);
  return (
   <>
   <h1 className='font-bold text-3xl p-4 text-center animate-bounce'>Password Generator</h1>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly/>
    </div>
   </div>
   </>
  )
}

export default App
