import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const handleCount = () => {
    setCount(count + num);
  };
  const handleChange = (e) => {
    setNum(parseInt(e.target.value));
  };
  return (
    <>
      <h1>Counter App</h1>
      <button>Count: {count}</button>
      <input type="number" value={num} onChange={handleChange} />
    </>
  );
}

export default App;
