import { useState } from "react";
import { render } from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>The count is {count}. <button onClick={() => setCount(count + 1)}>Click</button></div>
  )
}

render(<App />, document.getElementById("root"));
