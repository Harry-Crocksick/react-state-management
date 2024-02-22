/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/counterReducer";
import { State, Action, initialState } from "../reducer/counterReducer";

type ContextTypes = {
  state: State;
  dispatch: (action: Action) => void;
};

const CounterContext = createContext<ContextTypes | null>(null);

export function useCounterContext() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(
      "useCounterContext must be used within CounterContext.Provider!"
    );
  }
  return context;
}

export default function ContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
