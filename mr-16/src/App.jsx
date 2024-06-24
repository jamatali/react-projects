import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <button>Count: {count}</button>
    </>
  );
}

export default App;
