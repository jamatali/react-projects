import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const handleCount = (x) => {
    setCount(count + x);
  };
  const handleChange = (e) => {
    setNum(parseInt(e.target.value));
  };
  return (
    <>
      <h1>Counter App</h1>
      <button
        onClick={() => {
          handleCount(num);
        }}
      >
        Count: {count}
      </button>
      <input type="number" value={num} onChange={handleChange} />
    </>
  );
}

export default App;
