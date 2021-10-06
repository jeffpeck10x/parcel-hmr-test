import { render } from "react-dom";
import { CounterProvider } from "./hooks/counter-context";
import { Count } from "./components/count";

function App() {
  return (
    <CounterProvider>
      <Count />
    </CounterProvider>
  )
}

render(<App />, document.getElementById("root"));
