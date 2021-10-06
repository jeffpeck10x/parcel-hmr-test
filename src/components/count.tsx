import { useCounter } from "../hooks/counter-context";

export function Count() {
  const { counterState, counterDispatch } = useCounter();
  const increment = () => counterDispatch({type: "increment"});
  return (
    <div>The count is {counterState.count}. <button onClick={increment}>Click</button></div>
  )
}