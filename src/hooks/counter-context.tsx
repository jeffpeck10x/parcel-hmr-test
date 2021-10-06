import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

type CounterAction = { type: "increment" }
type CounterState = {
  count: number;
};
type CounterProviderProps = { children: ReactNode };

const CounterStateContext = createContext<
  { counterDispatch: Dispatch<CounterAction>; counterState: CounterState } | undefined
>(undefined);

function counterReducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default: {
      throw new Error(`Received unknown action: ${action}`)
    }
  }
}

const initialState: CounterState = {
  count: 0
};

export function CounterProvider({ children }: CounterProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const context = { counterDispatch: dispatch, counterState: state };
  return <CounterStateContext.Provider value={context}>{children}</CounterStateContext.Provider>;
}

export function useCounter(): { counterDispatch: Dispatch<CounterAction>; counterState: CounterState } {
  const context = useContext(CounterStateContext);
  if (context === undefined) {
    throw new Error("useCounterState must be used within a CounterStateProvider");
  }
  return context;
}
